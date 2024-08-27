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
