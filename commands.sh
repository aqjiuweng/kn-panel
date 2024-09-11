# PANEL INSTALLATION
sudo apt update

curl -sL https://deb.nodesource.com/setup_20.x | sudo -E bash -

sudo apt install nodejs -y

sudo apt-get install gnupg curl

curl -fsSL https://pgp.mongodb.com/server-7.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-7.0.gpg \
   --dearmor

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

sudo apt-get update

sudo apt-get install -y mongodb-org

sudo systemctl start mongod

sudo systemctl daemon-reload

sudo systemctl status mongod

mongosh

use KN_PANEL

db.accounts.insertOne({  "id": 100000000,"is_admin": 1, "password": "123456","username": "admin","tokens":[],"sub_accounts":[] })

npm install -g pm2

sudo apt install unzip

db.accounts.updateMany({  "is_admin": 0 },{ $set: { "daily_usage_logs": [] }})

db.users.updateMany({},{ $set: { "safu": 0 }})

# CERT
sudo apt install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx
sudo ln -s /etc/nginx/sites-available/test.ir /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# REDIS
sudo apt-get install lsb-release curl gpg
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
sudo chmod 644 /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
sudo apt-get update
sudo apt-get install redis
sudo systemctl start redis