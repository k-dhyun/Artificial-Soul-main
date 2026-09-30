from unittest.mock import AsyncMock, MagicMock

import pytest
from sqlalchemy.ext.asyncio import AsyncEngine

from app import main


async def test_engine_is_disposed_if_client_creation_fails(monkeypatch, settings):
    engine = MagicMock(spec=AsyncEngine)
    engine.dispose = AsyncMock()
    monkeypatch.setattr(main, "create_engine", lambda config: engine)

    def fail_to_create_client(config):
        raise RuntimeError("Client initialization failed")

    monkeypatch.setattr(main, "create_qdrant_client", fail_to_create_client)
    application = main.create_app(settings)

    with pytest.raises(RuntimeError, match="Client initialization failed"):
        async with application.router.lifespan_context(application):
            pytest.fail("Startup should fail before serving requests")

    engine.dispose.assert_awaited_once()
