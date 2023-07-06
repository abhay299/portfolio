import mysql from "mysql";

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Abhay@78",
	database: "myPortfolio",
});

export default db;