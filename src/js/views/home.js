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
		console.log("He enviado el formulario")
        event.preventDefault();
        const newContact = {
            name: name,
            email: email,
            phone: phone,
            address: address
        };
		if (name!="" && email!="" && phone!="" && address!=""){
			actions.addContacts(newContact);
			alert("Your contact have been saved") 
			setName("");
			setEmail("");
			setPhone("");
			setAddress("");
		}
		else {
			alert("Quedan campos por rellenar!")
		}
    };
	return (
		<div className="d-flex mx-auto justify-content-center min-vh-100">
			<div className="w-30 p-0">
				<h1>Add a new contact</h1>
				<form onSubmit={DataSend}>
					<div className="mb-3">
						<label htmlFor="inputName" className="form-label" >Full Name</label>
						<input type="text" className="form-control" value ={name} onChange={(event)=>setName(event.target.value)} id="inputName" aria-describedby="emailHelp" placeholder="Full Name"/>
					</div>
					<div className="mb-3">
						<label htmlFor="inputEmail" className="form-label">Email</label>
						<input type="email" className="form-control" value ={email} onChange={(event)=>setEmail(event.target.value)} id="inputEmail" placeholder="Enter email"/>
					</div>
					<div className="mb-3">
						<label htmlFor="inputPhone" className="form-label">Phone</label>
						<input type="text" className="form-control" value ={phone} onChange={(event)=>setPhone(event.target.value)} placeholder="Enter phone number" id="inputPhone"/>
					</div>
					<div className="mb-3">
						<label htmlFor="inputAddress" className="form-label">Address</label>
						<input type="text" className="form-control" value ={address} onChange={(event)=>setAddress(event.target.value)} placeholder="Enter address" id="inputAddress"/>
					</div>
					<button type="submit" className="btn btn-primary">Save Changes</button>
				</form>
			</div>
		</div>
)};
