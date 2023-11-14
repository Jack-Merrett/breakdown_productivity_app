from db import db
from db.models import Goal

def add_goal(goal, sub_goal, completed=False):
    new_goal = Goal(goal=goal, sub_goal=sub_goal, completed=completed)
    db.session.add(new_goal)
    db.session.commit()

def get_all_goals():
    return Goal.query.all()
