from sqlalchemy.orm import Session
import models, schemas
from passlib.context import CryptContext

myctx = CryptContext(schemes=["bcrypt"])

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.User):
    hashed_password = myctx.hash(user.hashed_password)
    db_user = models.User(username=user.username, email=user.email, hashed_password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user