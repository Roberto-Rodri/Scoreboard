# Steps to run this program in your computer

## Prerequisites

Before you start, make sure you have the following installed on your computer:
- PostgreSQL (version 15 or higher)
- Node.js (version 18 or higher)

If you don't have these, install them first.

## 1. Connect to PostgreSQL

Open your terminal and connect to PostgreSQL by running: `psql -U postgres`

PostgreSQL will ask for your password. Enter the password you created during PostgreSQL installation.

You should see a prompt like `postgres=#`

## 2. Create DATABASE scoreboard

Now, inside PostgreSQL, run this command: `CREATE DATABASE scoreboard;`

## 3. Connect to your new database

Inside PostgreSQL, run: `\c scoreboard`

## 4. Create the TABLE scoreboard

The command you need to run is:
```
CREATE TABLE scoreboard (
  id SERIAL PRIMARY KEY,
  nickname VARCHAR(50) NOT NULL,
  time_seconds INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 5. Exit PostgreSQL

Type `\q` to exit PostgreSQL.

## 6. Install the packages needed for this project

Before running the following command, navigate to your backend folder

Here's the list and how to install them:
- dotenv. `npm install dotenv`
- express. `npm install express`
- pg. `npm install pg`
- ws. `npm install ws`

## 7. Create a file called .env in your backend folder

You need to create a file .env following the next structure:
```
DB_USER=postgres
DB_PASSWORD=your_password
DB_HOST=localhost
DB_PORT=5432
DB_NAME=the_name_of_the_database_you_created_above(maybe_scoreboard)
```

## 8. Start the Node.js server

Finally, make sure you are in your backend folder and run the following command: `node server.js`

Your server should now be running.


## Troubleshooting

### psql command not found

If you get an error saying `psql` is not recognized, you need to use the full path to PostgreSQL:

Try running the following command in your cmd, as it works better there.
```
"C:\Program Files\PostgreSQL\18\bin\psql.exe" -U postgres
```

Replace `18` with your PostgreSQL version number.

The command above should work. To find your own PostgreSQL path, locate the folder on your computer and copy the full path.

Once you successfully connect, you should see `postgres=#` in your terminal. Then proceed to Step 2.
