const express = require("express");

const app = express();

const path = require("path");

const dbPath = path.join(__dirname, "goodreads.db");

const sqlite3 = require("sqlite3");

const { open } = require("sqlite");

let db = null;

const connectDB = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    app.listen(3000, () => {
      console.log("Server Running");
    });
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
  }
};

connectDB();
