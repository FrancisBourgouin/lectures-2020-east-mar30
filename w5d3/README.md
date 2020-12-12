# SQL From our App

## Today's menu

- Quick recap of data insertion with files
- PostgreSQL clients
- node-postgres intro
- Creation of command line tools (turnip price & resident moving in)
- Recap of closures
- DB helper functions
- node-postgres & Express


## Content

- Build SQL with `pg` ([node-postgres](https://node-postgres.com/))
- Data flow and how the PG server runs the query and returns results
- Separation of data access functions/modules from logic
- Using modules to separate out db queries from other application logic

## Start the app

- create the database

`createdb pokedex -O <owner of the db>`

- duplicate and rename `.env.example` to `.env`
- modify the db credentials in the .env

- run the sql scripts

`psql pokedex < db/poke_db.sql`

- run the server

`npm run dev`