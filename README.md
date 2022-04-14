# Api List Ips

**description:** api created to get a list os ip's from external link and delete a ip selected and return the list updated

### status : (developing)

## technologies used

- [ExpressJs](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/pt-br/)
- [Postgres-Sql](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)

## How to Download the project

#### Required:
- [Docker](https://www.docker.com/)

- **Query Data Base required**

- Is required a database called **ipsdb** in your postgres.
- Is requires a table called **ips** with the properties **id** and  **ip**

- data base config..

    user: "postgres",
    password: "admin",
    host: "localhost",
    port: 5432,
    database: "ipsdb",

```zsh

    CREATE DATABASE ipsdb ;

    CREATE TABLE ips (
    id SERIAL PRIMARY KEY,
    ip string,
);

```


   
**In terminal paste the follow comand to download the project**

```zsh
$ git clone https://github.com/savinnsk/api-ip-list-js.git
```

**In Download folder paste the follow command enter at project folder**
```zsh

$ cd api-ip-list-js-main

```

**How to run the project**

```zsh
$ docker-compose up -d
```

## ENDPOINTS

### FECTH LIST OF IPS

**endpoint:**  http://localhost:3000/

**method:**  GET

**Success Response:**

    - code:  200

    - content: {
        - message,
        - [...array of ips]
        }

    
    
### REMOVE A IP

**endpoint:**  http://localhost:3000/remove

**method:**  POST

**Success Response:**

    - code:  200
    
    - content: 
        - message : ip removed

### GET LIST OF IP'S UPDATED

**endpoint:**  http://localhost:3000/ips

**method:**  GET

**Success Response:**

    - code:  200
    - content: [array_of_ip's_updated]


**Desenvolvido por:** [Savio Picanço Do Espirito Santo Brito](https://www.linkedin.com/in/savio-pican%C3%A7o-b739a518a/)
