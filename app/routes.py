from flask import render_template
from app import app
from db.utils import add_goal, get_all_goals

@app.route('/')
def index():
    goals = get_all_goals()
    return render_template('index.html', goals=goals)
