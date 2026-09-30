"""Application assembly and lifecycle management."""

from contextlib import AsyncExitStack, asynccontextmanager

from fastapi import FastAPI

from app.clients.qdrant import create_qdrant_client
from app.core.config import Settings
from app.core.database import create_engine, create_session_factory
from app.health.router import router as health_router


def create_app(settings: Settings | None = None) -> FastAPI:
    @asynccontextmanager
    async def lifespan(application: FastAPI):
        config = settings if settings is not None else Settings()
        # ExitStack releases both resources, including on partial startup failure.
        async with AsyncExitStack() as resources:
            engine = create_engine(config)
            resources.push_async_callback(engine.dispose)
            qdrant_client = create_qdrant_client(config)
            resources.push_async_callback(qdrant_client.close)

            application.state.settings = config
            application.state.engine = engine
            application.state.session_factory = create_session_factory(engine)
            application.state.qdrant_client = qdrant_client
            yield

    application = FastAPI(
        title="Artificial Soul API", version="0.1.0", lifespan=lifespan
    )
    application.include_router(health_router)
    return application


# Importing the app does not load .env or contact external infrastructure.
app = create_app()
