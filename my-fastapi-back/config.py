from pydantic_settings import BaseSettings
from dotenv import load_dotenv
import os

load_dotenv()

class Settings(BaseSettings):
    POSTGRES_URL: str = os.getenv("POSTGRES_URL")
    SECRET_KEY: str = os.getenv("SECRET_KEY")
    ALGORITHM:str = os.getenv("ALGORITHM")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES"))

    class Config:
        env_flie = ".env"

settings = Settings()