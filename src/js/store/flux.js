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
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
