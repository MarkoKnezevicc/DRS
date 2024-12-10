from flask import Flask
from flask_jwt_extended import JWTManager
from mongoengine import connect
from datetime import timedelta
from api.users_api import users_api
from api.auth_api import auth_api
from flask_cors import CORS
import secrets

username = "timirjanovicstefan"  # Replace with your actual MongoDB Atlas username
password = "demo"  # Replace with your actual password
cluster_name = "cluster0"
db_name = "Portfolio"  # Replace with your actual database name

uri = f"mongodb+srv://{username}:{password}@{cluster_name}.byca7.mongodb.net/{db_name}?retryWrites=true&w=majority&appName=Cluster0"

connect(host=uri)

app = Flask(__name__);
CORS(app);

with app.app_context():
  app.jwt_manager = JWTManager(app)
  app.config["JWT_SECRET_KEY"] = '1c17f6480435a926f3601cae'; #Generisano preko secrets.token_hex(12);
  app.config["JWT_ACCESS_TOKEN_EXPIRES"] = timedelta(days=7)

app.register_blueprint(users_api)
app.register_blueprint(auth_api)

if __name__ == "__main__":
  app.run(host="0.0.0.0", debug=True)
