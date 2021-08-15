# Doctor Case Label


Versions:
 - NodeJS: v14.17.5
 - Yarn: 1.17.3
 - Docker: 19.03.3 (Optional)


## Users

When you start the application you will be able to use these users:

```
email: drjohn@gmail.com
password: drjohn
Name: Dr John
```
```
email: drbob@gmail.com
password: drbob
Name: Dr Bob
```

## Backend

##### How to start

```sh
cd backend
yarn install
yarn start
```

#### Changing the port

If you need change the backend port for some reason, open this file:

```
backend/src/main.ts
```

and edit this line: 

```
const PORT = <new_backend_port>;
```

When you change the backend port, you must update the connection in frontend too, open this file:

```
frontend/src/services/api.ts
```

and edit this part: 

```
const PORT = '<new_backend_port>'
```

## Frontend

##### How to start

```
cd frontend
yarn install
yarn start
```

#### Changing the port

If you need change the frontend port for some reason, open this file:

```
frontend/.env
```

and edit this variable: 

```
PORT=<new_frontend_port>
```


## Database

The application is already configured to use a mongodb online (https://www.mongodb.com/cloud/atlas). But, if you prefer to use a localdatabase follow the instructions below.

To start the local database go to root path (the same path of file 'docker-compose.yml'), open a prompt and execute:

```
docker-compose up -d
```

Attention! This command could take a few minutes to start the first time.

#### Configuring local database

To use the local database, open this file:

```
backend/src/database/providers/database.provider.ts
```

remove the comment of this code:

```
  return mongoose.connect('mongodb://admin:admin@localhost:27099/ehrdb?retryWrites=true&w=majority');
```

and comment this one:

```
  return mongoose.connect('mongodb+srv://admin:admin@electronichealthrecord.yyvyn.mongodb.net/ElectronicHealthRecord?retryWrites=true&w=majority');}
```


#### Changing the port

If you need change the database port for some reason, open this file:

```
<root_path>/docker-compose.yml
```

and edit this line: 

```
ports:
      - <new_database_port>:27017
```

When you change the database port, you must update the connection in backend too, open this file:

```
backend/src/database/providers/database.provider.ts
```

and edit this part: 

```
@localhost:<new_port>
```