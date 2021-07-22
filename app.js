// homework 4 

//createing a new table Products with fields

// `CREATE TABLE PRODUCTS (
// 	ID INTEGER PRIMARY KEY AUTOINCREMENT,
// 	TITLE TEXT NOT NULL,
// 	PRICE REAL NOT NULL,
// 	RATING INT NOT NULL
// );


//  inserting 5 products

// INSERT INTO PRODUCTS (TITLE, PRICE, RATING)
// VALUES ('Motherboard', 250, 4.5);
// INSERT INTO PRODUCTS (TITLE, PRICE, RATING)
// VALUES ('Graphic-card', 410, 5);
// INSERT INTO PRODUCTS (TITLE, PRICE, RATING)
// VALUES ('SSD-drive', 350, 4.0);
// INSERT INTO PRODUCTS (TITLE, PRICE, RATING)
// VALUES ('pc-case', 200, 4.3);
// INSERT INTO PRODUCTS (TITLE, PRICE, RATING)
// VALUES ('Power-Supply', 350, 3.9);
// 

//updateing a product price

//  UPDATE products
//   SET RATING=4.8, PRICE=280
//   WHERE ID=5;


//deleteing a product

// DELETE FROM PRODUCTS
// WHERE id = 5;


//write a code in nodejs which prints all of the products
const sqlite3 = require('sqlite3').verbose();

//connected to the db
let db = new sqlite3.Database('products.db', (err) => {
    if(err) {
        console.error(err.message);
    }
    console.log('Connected to database');
});
  

// fire select query
db.serialize(() => {
    db.each(`SELECT * FROM products`, (err, row) => {
      if(err) {
        console.error(err.message);
      }
      console.table(row);
    });
  });
  
  // close connector
  db.close((err) => {
    if(err) {
      console.error(err.message)
    }
    console.log('Close the db connection!')
})




