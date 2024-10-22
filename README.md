# Api List Ips

**description:** api created to get a list os ip's from external link and delete a ip selected and return the list updated

### status : (developing)

## technologies used

- [ExpressJs](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [NodeJS](https://nodejs.org/pt-br/)
- [Postgres-Sql](https://www.postgresql.org/)
- [TypeScript](https://www.typescriptlang.org/)

## How to Download and Run the project

#### Required:
- [Docker](https://www.docker.com/)

- **Data Base required**

- Is required a **database** called **ipsdb** in your postgres.
- Is requires a **table** called **ips** with the properties **id** and  **ip**

#### Data base config..

- user: "postgres",
- password: "admin",
- host: "localhost",
- port: 5432,
- database: "ipsdb",

#### Query sql

```zsh

    CREATE DATABASE ipsdb ;

    CREATE TABLE public.ips (
    id integer NOT NULL,
    ip text NOT NULL
);

CREATE SEQUENCE public.ips_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;

ALTER SEQUENCE public.ips_id_seq OWNED BY public.ips.id;

ALTER TABLE ONLY public.ips ALTER COLUMN id SET DEFAULT nextval('public.ips_id_seq'::regclass);

ALTER TABLE ONLY public.ips
    ADD CONSTRAINT ips_pkey PRIMARY KEY (id)
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
        - message of success
        - data : [...array of ips]
        }

**Bad Response:**

    - code : 400
    
    
### REMOVE A IP

**endpoint:**  http://localhost:3000/remove

**method:**  POST

**Success Response:**

    - code:  200
    
    - content: 
        - message : ip removed
        
**Bad Response:**

    - code : 400        

### GET LIST OF IP'S UPDATED

**endpoint:**  http://localhost:3000/ips

**method:**  GET

**Success Response:**

    - code:  200
    - content: [array_of_ip's_updated]
    
**Bad Response:**

    - code : 400    


**Desenvolvido por:** [Savio Picanço Do Espirito Santo Brito](https://www.linkedin.com/in/savio-pican%C3%A7o-b739a518a/)
