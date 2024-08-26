import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [showModal, setShowModal] = useState(false);
	const [name,setName] = useState("") 
	const [email, setEmail] = useState("")
	const [phone, setPhone] = useState("")
	const [address, setAddress] = useState("")
	const [id, setId] = useState("")

    const openModal = (id) => {
		setShowModal(true);
		const foundContact = store.contacts.find((elemento) => elemento.id === id);
		console.log (foundContact)
		setName(foundContact.name)
		setEmail(foundContact.email)
		setPhone(foundContact.phone)
		setAddress(foundContact.address)
		setId(foundContact.id)

	};
	const sendNewData = () => {
		const newContactInfo = {
			name: name,
            email: email,
            phone: phone,
            address: address,
			id: id,
        };
		actions.modifyContact(newContactInfo);
		setName("");
        setEmail("");
        setPhone("");
        setAddress("");
		closeModal();
	}

    const closeModal = () => {
        setShowModal(false);
    };
	const imgUrl = "https://fotografias.antena3.com/clipping/cmsimages01/2021/05/02/26E03450-C5FB-4D16-BC9B-B282AE784352/57.jpg?crop=1868,1080,x52,y0&width=1280&height=740&optimize=low&format=webply"

	return (
		<div className="container min-vh-100">
			<ul className="list-group">
				{store.contacts.map((contactos, index) => {
					return (
							<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
								<div className="d-flex justify-content-between align-items-center">
									<div className="d-flex align-items-center">
										<img 
											src={imgUrl} 
											className="img-thumbnail" 
											style={{ width: "200px", height: "200px", borderRadius: "50%", objectFit: "cover" }} 
										/>
										<div className="d-flex flex-column mx-4">
											<h6>{contactos.name}</h6>
											<span className="fw-light">
												{contactos.email}
											</span>
											<span className="fw-light">
												 {contactos.phone}
											</span>
											<span className="fw-light">
												 {contactos.address}
											</span>
										</div>
									</div>
									<div>
										<button className="btn text-success justify-content-end m-2" onClick={() => openModal(contactos.id)}>
											<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
												<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001"/>
											</svg>
										</button>
										<button className="btn text-danger justify-content-end " onClick={() => actions.deleteContact(contactos.id)}>
											<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trash2" viewBox="0 0 16 16">
												<path d="M14 3a.7.7 0 0 1-.037.225l-1.684 10.104A2 2 0 0 1 10.305 15H5.694a2 2 0 0 1-1.973-1.671L2.037 3.225A.7.7 0 0 1 2 3c0-1.105 2.686-2 6-2s6 .895 6 2M3.215 4.207l1.493 8.957a1 1 0 0 0 .986.836h4.612a1 1 0 0 0 .986-.836l1.493-8.957C11.69 4.689 9.954 5 8 5s-3.69-.311-4.785-.793"/>
											</svg>
										</button>
									</div>
								</div>
							</li>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary mb-4">Create new contact</button>
			</Link>
			{showModal && (
                <div className="modal fade show d-block" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Edit contact</h1>
                                <button type="button" className="btn-close" onClick={closeModal} aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
								<div className="input-group flex-nowrap">
									<span className="input-group-text" id="addon-wrapping"></span>
									<input type="text" className="form-control" placeholder="Username" onChange={(e)=>setName(e.target.value)} value = {name} aria-label="Username" aria-describedby="addon-wrapping"/>
								</div>
								<div className="input-group flex-nowrap">
									<span className="input-group-text" id="addon-wrapping"></span>
									<input type="text" className="form-control" placeholder="Username" onChange={(e)=>setEmail(e.target.value)} value = {email} aria-label="Username" aria-describedby="addon-wrapping"/>
								</div>
								<div className="input-group flex-nowrap">
									<span className="input-group-text" id="addon-wrapping"></span>
									<input type="text" className="form-control" placeholder="Username" onChange={(e)=>setPhone(e.target.value)} value = {phone} aria-label="Username" aria-describedby="addon-wrapping"/>
								</div>
								<div className="input-group flex-nowrap">
									<span className="input-group-text" id="addon-wrapping"></span>
									<input type="text" className="form-control" placeholder="Username" onChange={(e)=>setAddress(e.target.value)} value = {address} aria-label="Username" aria-describedby="addon-wrapping"/>
								</div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={()=>sendNewData()}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Backdrop */}
            {showModal && <div className="modal-backdrop fade show"></div>}
		</div>
	);
};
