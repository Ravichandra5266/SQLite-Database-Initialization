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
    process.exit(1);
  }
};

connectDB();

app.get("/book/", async (request, response) => {
  const booksQuary = `SELECT * FROM book ORDER BY book_id LIMIT 1`;

  const bookArry = await db.all(booksQuary);

  response.send(bookArry);
});
