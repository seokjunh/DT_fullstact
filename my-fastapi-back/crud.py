from sqlalchemy.orm import Session

import models, schemas

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

def create_user(db: Session, user: schemas.User):
    fake_hashed_password = user.hashed_password + "notreallyhashed"
    db_user = models.User(id=user.id, email=user.email, hashed_password=fake_hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user