import Flask
from db import app, db
from app import routes

db.create_all()
