import { useEffect } from 'react';
import { makeRequest } from '../../axios.js';
import './feedback.css';
import React from 'react'
import { useState } from 'react';

const Feedback = () => {

	const [contents, setContents] = useState([]);

	useEffect(() => {
		makeRequest.get('/feedback')
			.then(res => {
				setContents(res.data)
			}).catch(err => {
				console.log(err)
			});
		// console.log("Response: ", response);
	}, []);

	// console.log("DATA: ", contents);

	return (
		<div>Feedback
			<table class="table table-dark table-striped">
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Message</th>
					</tr>
				</thead>
				<tbody>
					{contents.map((content) => (
						<tr>
							<th>{content.id}</th>
							<td>{content.name}</td>
							<td>{content.email}</td>
							<td>{content.comment}</td>
						</tr>
					))}
				</tbody>
			</table>

		</div>
	)
}

export default Feedback;