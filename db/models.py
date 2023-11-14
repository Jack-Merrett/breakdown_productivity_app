from db import db

class Goal(db.Model):
    __tablename__ = 'goals'

    id = db.Column(db.Integer, primary_key=True)
    goal = db.Column(db.String(255), nullable=False)
    sub_goal = db.Column(db.String(255))
    completed = db.Column(db.Boolean, default=False)
