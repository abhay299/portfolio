import express from "express";
import cors from "cors";
import db from "./connect.js";
import moment from "moment/moment.js";
import cookieParser from "cookie-parser";
import Cookies from "universal-cookie";

const app = express();
// const router = express.Router();
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {

	const corsWhiteList = [
		"http://localhost:3000",
		"https://abhay-gupta.netlify.app",
		"https://abhay-develop.netlify.app"
	];

	if (corsWhiteList.indexOf(req.headers.origin) !== -1) {
		res.header("Access-Control-Allow-Origin", req.headers.origin)
		res.header("Access-Control-Allow-Headers", 'Origin, X-Request-With, Content-Type, Accept');
		res.header({
			"Access-Control-Allow-Credentials": true,
			"Access-Control-Allow-Private-Network": true,
		});
	}

	next();
});

app.use(cookieParser());
const cookies = new Cookies();
cookies.set({ secure: true, sameSite: 'none' });
db.connect((err) => {
	if (err) throw err;
	console.log("Database Connected!")
})

// Add new feedback
app.post('/', (req, res) => {

	console.log("req:", req.body)
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