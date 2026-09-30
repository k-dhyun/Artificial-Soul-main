"""Typed settings, similar to application.yml and @ConfigurationProperties."""

from pathlib import Path

from pydantic import AnyHttpUrl, Field, PostgresDsn, field_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    # Resolve from this file so IDE working directories do not change .env lookup.
    model_config = SettingsConfigDict(
        env_file=Path(__file__).resolve().parents[2] / ".env",
        env_file_encoding="utf-8",
        extra="ignore",  # POSTGRES_* settings are consumed by Docker Compose.
        hide_input_in_errors=True,
    )

    database_url: PostgresDsn = Field(validation_alias="DATABASE_URL")
    qdrant_url: AnyHttpUrl = Field(validation_alias="QDRANT_URL")
    health_check_timeout_seconds: float = Field(
        default=3.0, gt=0, validation_alias="HEALTH_CHECK_TIMEOUT_SECONDS"
    )

    @field_validator("database_url")
    @classmethod
    def require_asyncpg(cls, value: PostgresDsn) -> PostgresDsn:
        if value.scheme != "postgresql+asyncpg":
            raise ValueError("DATABASE_URL must use the postgresql+asyncpg scheme")
        return value
