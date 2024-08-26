const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: [
				{
					name: "Marcos",
					email: "argoph@gmail.com",
					phone: "6134068",
					address: "calle lunar 289"
				}
			],
			iconTrash: [
				<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="fw-bold bi bi-envelope-at" viewBox="0 0 16 16">
					<path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
					<path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
				</svg>
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			modifyContact: (newContactInfo) =>{
				console.log("Quiero modificar mi contacto")
			const myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			const myid = newContactInfo.id;
			const raw = JSON.stringify({
			"name": newContactInfo.name,
			"phone": newContactInfo.phone,
			"email": newContactInfo.email,
			"address": newContactInfo.address
			});
			console.log ("He actualizado el código")
			console.log("El código que voy a enviar es:" + myid)
			const modifyOptions = {
			method: "PUT",
			headers: myHeaders,
			body: raw,
			redirect: "follow"
			};

			fetch(`https://playground.4geeks.com/contact/agendas/Marcos%201/contacts/${myid}`, modifyOptions)
			.then((response) => response.text())
			.then((result) => {console.log(result)
				getActions().loadSomeData()
			})
			.catch((error) => console.error(error));
			},
			addContacts : (newContact) => {
				console.log("Esto va cada vez mejor")
				const store = getStore();
				console.log("he añadido el nombre de " + newContact.name)
				const myHeaders = new Headers();
				myHeaders.append("Content-Type", "application/json");

				const raw = JSON.stringify({
					"name": newContact.name,
					"phone": newContact.phone,
					"email": newContact.email,
					"address": newContact.address,
				});

				const requestOptions = {
				method: "POST",
				headers: myHeaders,
				body: raw,
				redirect: "follow"
				};

				fetch("https://playground.4geeks.com/contact/agendas/Marcos1/contacts", requestOptions)
				.then((response) => response.text())
				.then((result) => {console.log(result)
					getActions().loadSomeData();
				})
				.catch((error) => console.error(error));

			},
			deleteContact: (id) =>{
				const store = getStore();
				const deleteOption = {
					method: "DELETE",
					redirect: "follow"
				  };
				  
				  fetch(`https://playground.4geeks.com/contact/agendas/Marcos1/contacts/${id}`, deleteOption)
					.then((response) => response.text())
					.then((result) => {
						setStore({contacts: store.contacts.filter((element)=>element.id != id)})})
					.catch((error) => console.error(error));
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
				const store = getStore();
				setStore({contacts: []});
				fetch('https://playground.4geeks.com/contact/agendas/Marcos1/contacts')
				.then((response) => response.json())
				.then((data)=> setStore({ contacts: data.contacts }))

			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
