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
    var sql = "DELETE FROM Students WHERE Student_ID=101";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Data Deleted");
    });
}));