from flask import Flask, request
import flask
import os
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy_serializer import SerializerMixin
from flask_cors import CORS

app = flask.Flask(__name__)
CORS(app)


"""
user = os.environ['db_user']
passw = os.environ['db_password']
host = os.environ['db_host']
port = os.environ['db_port']"""

mysql_db = "dog_db"
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://{0}:{1}@{2}:{3}/{4}'.format(user, passw, host, port, mysql_db)
db = SQLAlchemy(app)


class Dog_tab(db.Model, SerializerMixin):
    __tablename__ = 'Dog_tab'

    serialize_only = ('id', 'image', 'details', 'hdb_approved', 'gender', 'date_of_birth', 'age', 'name')

    id = db.Column(db.Integer, primary_key=True)
    image = db.Column(db.String(256), unique=True, nullable=False)
    details = db.Column(db.String(1000), nullable=False)
    hdb_approved = db.Column(db.Integer, nullable=False)
    gender = db.Column(db.String(4), nullable=False)
    date_of_birth = db.Column(db.Integer, nullable=False)
    age = db.Column(db.Integer, nullable=False)
    name = db.Column(db.String(256), unique=True, nullable=False)


def get_dog_data(gender, age, limit, hdb_approved):
    if not gender and age == -1 and hdb_approved == "":
        a = Dog_tab.query.filter(~Dog_tab.image.match("%.gif")).limit(limit).all()
    elif not gender and age == -1:
        a = Dog_tab.query.filter(~Dog_tab.image.match("%.gif")).filter_by(hdb_approved=hdb_approved).limit(limit).all()
    elif not gender and hdb_approved == "":
        a = Dog_tab.query.filter(~Dog_tab.image.match("%.gif")).filter_by(age=age).limit(limit).all()
    elif age == -1 and hdb_approved == "":
        a = Dog_tab.query.filter(~Dog_tab.image.match("%.gif")).filter_by(gender=gender).limit(limit).all()
    elif not gender:
        a = Dog_tab.query.filter(~Dog_tab.image.match("%.gif")).filter_by(hdb_approved=hdb_approved).filter_by(age=age).limit(limit).all()
    elif age == -1:
        a = Dog_tab.query.filter(~Dog_tab.image.match("%.gif")).filter_by(hdb_approved=hdb_approved).filter_by(gender=gender).limit(limit).all()
    elif hdb_approved == "":
        a = Dog_tab.query.filter(~Dog_tab.image.match("%.gif")).filter_by(age=age).filter_by(gender=gender).limit(limit).all()
    else:
        a = Dog_tab.query.filter(~Dog_tab.image.match("%.gif")).filter_by(gender=gender).filter_by(age=age).filter_by(hdb_approved=hdb_approved).limit(
        limit).all()
    return{'dog_data': [i.to_dict() for i in a]}


@app.route('/api/get_dogs', methods=['GET'])
def get_dogs():
    gender = request.args.get("gender", "")
    age = request.args.get("age", -1)
    limit = request.args.get("limit", 50)
    hdb_approved = request.args.get("hdb_approved", "")
    return get_dog_data(gender, age, limit, hdb_approved)


app.run()
