import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import encode from "@/pages/Home/utils/encodeURI";

function useHomePage() {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			comment: "",
		},
	});

	const onSubmit = (data) => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...data }),
		})
			.then(() => {
				alert("Success!");
				reset();
			})
			.catch((error) => alert(error));
	};

	return {
		navigate,
		register,
		handleSubmit,
		onSubmit,
		errors,
	};
}

export default useHomePage;
