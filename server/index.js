import express from "express";
import cors from "cors";
import db from "./connect.js";
import moment from "moment/moment.js";
import cookieParser from "cookie-parser";
import jwt from 'jsonwebtoken';

const app = express();
// const router = express.Router();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Credentials", true);
	next();
})

app.use(express.json());
app.use(cors({
	origin: "http://localhost:3000"
	// origin: "https://abhay-gupta.netlify.app/"
}));

app.use(cookieParser());

db.connect((err) => {
	if (err) throw err;
	console.log("Database Connected!")
})

// Add new feedback
app.post('/', (req, res) => {

	// const token = req.cookies.accessToken;
	// if (!token) return res.status(401).json("Something went wrong");

	// jwt.verify(token, "secretkey", (err, data) => {
	// 	if (err) return res.status(403).json("Token is not valid");

	// 	const q = "INSERT INTO feedback (`name`, `email`, `comment`, `createdAt`) VALUES (?)";
	// 	const values = [
	// 		req.body.name,
	// 		req.body.email,
	// 		req.body.comment,
	// 		moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
	// 	];

	// 	db.query(q, [values], (err, data) => {
	// 		if (err) return res.status(500).json(err);
	// 		return res.status(200).json("Message has been received.")
	// 	});
	// });
	// console.log(req.body.name);
	// console.log("What is Data: ", res);

	const name = req.body.name;
	const email = req.body.email;
	const comment = req.body.comment;
	const dateTime = moment(Date.now()).format("YYYY-MM-DD HH:mm:ss");

	db.query("INSERT INTO feedback (name, email, comment, createdAt) VALUES (?, ?, ?, ?)", [name, email, comment, dateTime],
		(err, result) => {
			if (result) {
				res.send(result);
			} else {
				res.send(err);
			}
		}
	);
});

app.listen(8800, () => {
	console.log("Server is running on port 8800");
})