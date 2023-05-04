import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
if os.path.exists("env.py"):
    import env

app = Flask(__name__)
app.config["SECRET_KEY"] = os.environ.get("SECRET_KEY")

if os.environ.get("DEVELOPMENT") == "True":
     app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DB_URL")
else:
     app.config["SQLALCHEMY_DATABASE_URI"] = os.environ.get("DATABASE_URL")
    

db = SQLAlchemy(app)

# we have to import it here because routes relies on 'app' and 'db'
from taskmanager import routes 