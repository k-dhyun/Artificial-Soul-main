"""Qdrant client creation and a read-only connection check."""

from math import ceil

from qdrant_client import AsyncQdrantClient

from app.core.config import Settings


def create_qdrant_client(settings: Settings) -> AsyncQdrantClient:
    return AsyncQdrantClient(
        url=str(settings.qdrant_url),
        timeout=ceil(settings.health_check_timeout_seconds),
        # Avoid the constructor's network version check. Versions are pinned,
        # and readiness checks connectivity explicitly when requested.
        check_compatibility=False,
    )


async def check_qdrant(client: AsyncQdrantClient) -> None:
    # An empty collection list is healthy. Do not create a collection here.
    await client.get_collections()
