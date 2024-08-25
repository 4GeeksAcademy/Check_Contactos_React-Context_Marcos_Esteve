import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container min-vh-100">
			<ul className="list-group">
				{store.contacts.map((contactos, index) => {
					return (
							<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
								<div className="d-flex flex-column">
									<h6>{contactos.name}</h6>
									<span>{contactos.email}</span>
									<span>{contactos.phone}</span>
									<span>{contactos.address}</span>
								</div>
								<div>
									<button className="btn text-success m-2" onClick={() => actions.modifyContact()}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
  									<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
									</svg></button>
									<button className="btn text-danger" onClick={() =>actions.deleteContact(contactos.id)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash2" viewBox="0 0 16 16">
  									<path d="M14 3a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2M3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5s-3.69-.311-4.785-.793"/>
									</svg></button>
								</div>
							</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary mb-4">Create new contact</button>
			</Link>
		</div>
	);
};
