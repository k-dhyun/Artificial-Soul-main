"""HTTP endpoints for process liveness and infrastructure readiness."""

import asyncio
import logging
from collections.abc import Awaitable

from fastapi import APIRouter, Request, Response, status

from app.clients.qdrant import check_qdrant
from app.core.database import check_postgres

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/health", tags=["Health"])


@router.get("", summary="Check API process liveness")
async def health() -> dict[str, str]:
    return {"status": "ok"}


async def _connection_status(
    service: str, check: Awaitable[None], timeout_seconds: float
) -> str:
    try:
        async with asyncio.timeout(timeout_seconds):
            await check
    except Exception as error:
        # Log the service and error class only, without credentials or raw errors.
        logger.warning("%s readiness failed (%s)", service, type(error).__name__)
        return "error"
    return "ok"


@router.get(
    "/ready",
    summary="Check PostgreSQL and Qdrant connectivity",
    responses={503: {"description": "One or more infrastructure checks failed"}},
)
async def ready(request: Request, response: Response) -> dict[str, str]:
    timeout = request.app.state.settings.health_check_timeout_seconds
    postgres_status, qdrant_status = await asyncio.gather(
        _connection_status("postgres", check_postgres(request.app.state.engine), timeout),
        _connection_status("qdrant", check_qdrant(request.app.state.qdrant_client), timeout),
    )
    is_ready = postgres_status == "ok" and qdrant_status == "ok"
    if not is_ready:
        response.status_code = status.HTTP_503_SERVICE_UNAVAILABLE
    return {
        "status": "ready" if is_ready else "not_ready",
        "postgres": postgres_status,
        "qdrant": qdrant_status,
    }
