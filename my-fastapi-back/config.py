from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

load_dotenv()

class Settings(BaseSettings):
    database_url: str = os.getenv("POSTGRES_URL")

    class Config:
        env_flie = ".env"

settings = Settings()