import express from "express";
import cors from "cors";
import db from "./connect.js";
import moment from "moment/moment.js";

const app = express();
// const router = express.Router();

app.use(express.json());
app.use(cors());

db.connect((err) => {
	if (err) throw err;
	console.log("Database Connected!")
})
// Add new feedback
app.post('/', (req, res) => {
	// console.log(req.body.name);

	const name = req.body.name;
	const email = req.body.email;
	const comment = req.body.comment;
	const dateTime = moment(Date.now()).format("YYYY-MM-DD- HH:mm:ss");

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