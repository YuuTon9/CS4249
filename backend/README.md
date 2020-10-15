Requirements: 
- Connected to sql dog_db database by updating env variables

```buildoutcfg
user = os.environ['db_user']
passw = os.environ['db_password']
host = os.environ['db_host']
port = os.environ['db_port'] 
```

1. Run `pip install -r requirements.txt`
2. Run `python app.py`