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
											style={{ width: "100px", height: "100px", borderRadius: "50%", objectFit: "cover" }} 
										/>
										<div className="d-flex flex-column mx-4">
											<h6>{contactos.name}</h6>
											<span className="fw-light">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
												<path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
												<path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
												</svg> {contactos.email}
											</span>
											<span className="fw-light">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
												<path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
												</svg> {contactos.phone}
											</span>
											<span className="fw-light">
												<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
												<path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
												</svg> {contactos.address}
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
