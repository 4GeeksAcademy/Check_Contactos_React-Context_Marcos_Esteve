import React, { useContext, useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => {
	const {store, actions} = useContext(Context);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");

	const DataSend = (event) => {
        event.preventDefault();
        const newContact = {
            name: name,
            email: email,
            phone: phone,
            address: address
        };
        actions.addContact(newContact);
        // Limpiar los campos del formulario
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
    };
};
	return (
	<div className=" mt-5">
		<form onSubmit={DataSend}>
			<div class="mb-3">
				<label htmlFor="inputName" class="form-label">Name</label>
				<input type="text" class="form-control" id="inputName" value={name} aria-describedby="emailHelp"/>
				<div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Email</label>
				<input type="password" class="form-control" id="exampleInputPassword1"/>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Phone</label>
				<input type="password" class="form-control" id="exampleInputPassword1"/>
			</div>
			<div class="mb-3">
				<label for="exampleInputPassword1" class="form-label">Address</label>
				<input type="password" class="form-control" id="exampleInputPassword1"/>
			</div>
			<button type="submit" class="btn btn-primary">Save Changes</button>
		</form>
	</div>
);
