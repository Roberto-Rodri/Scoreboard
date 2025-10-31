// Three packages needed in this project
const express = require('express');
const { Client } = require('pg');
const WebSocket = requiere('ws')

// This line loads all the variables from `.env` file
require('dotenv').config();

// Express app. This is the web server
const app = express();

// PostgreSQL. With this I can connect to the data base
const client = new Client({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME
});

// Port where the server will run
const PORT = 3000;