var mysql = require("mysql");
var inquirer = require('inquirer');
let chosenProduct;
let productList = [];

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    listMaker();
});

function shopping() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'itemChoice',
                message: 'Which item do you want?(Use the item_id)'
            },
            {
                type: 'input',
                name: 'itemQuantity',
                message: 'How much do you want?'
            }
        ])
        .then(answers => {

            let theItemChoice = parseInt(answers.itemChoice);
            
            let currentStock;

            connection.query("SELECT * FROM products WHERE ?"
            ,[
                {
                    item_id: theItemChoice
                }
            ],
             function (err, res) {
                if (err) throw err;
                currentStock = parseInt(res[0].stock_quantity) - answers.itemQuantity;
                if (currentStock < 0) {
                    console.log('Insufficient quantity!');
                    connection.end();
                    return;
                }
                console.log('Purchase successful!');
                connection.query(
                    "UPDATE products SET ? WHERE ?"
                ,[
                    {
                        stock_quantity: currentStock
                    },
                    {
                        item_id: theItemChoice
                    }
                ], 
                function (err, res) {
                    if (err) throw err;
                    // Log all results of the SELECT statement
                    connection.end();
                });
            });
        });
}


function listMaker() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        shopping();
    });
}