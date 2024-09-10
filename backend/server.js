var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "Rz8hqn1dK4",
    password: "nd0WKO3xeO",
    database: "Rz8hqn1dK4"
});
connection.connect((err => {
    if (err) throw err;
    console.log("DB connected");
    var sql = "INSERT INTO users (name, email) VALUES ('Eve Adams', 'eve@example.com'), ('Frank Green', 'frank@example.com'), ('Grace White', 'grace@example.com')";
    var values = [
        ['Eve Adams', 'eve@example.com'],
        ['Frank Green', 'frank@example.com'],
        ['Grace White', 'grace@example.com']
    ];
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Inserted new row");
    });
}));