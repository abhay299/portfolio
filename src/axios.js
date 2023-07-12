import axios from "axios";

export const makeRequest = axios.create({
	baseURL: "https://abhay-develop.netlify.app/",
});