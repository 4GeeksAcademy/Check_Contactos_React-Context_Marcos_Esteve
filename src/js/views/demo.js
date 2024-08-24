import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((contactos, index) => {
					return (
							<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
								<div className="d-flex flex-column">
									<h6>{contactos.name} {contactos.id}</h6>
									<span>{contactos.email}</span>
									<span>{contactos.phone}</span>
									<span>{contactos.address}</span>
								</div>
								<button className="btn btn-danger" onClick={() =>actions.deleteContact(contactos.id)}>Eliminar</button>
							</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
