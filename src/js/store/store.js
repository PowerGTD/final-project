const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: {
				email: "",
				password: ""
			},

			products: [],

			cart: [],
			token: ""
		},
		actions: {
			addToCart: koala => {
				var tempStore = getStore();

				tempStore.cart.push(koala);
				setStore({ tempStore });
			},
			removeFromCart: e => {
				let deleteArrayValue = getStore();
				let other = deleteArrayValue.cart.filter(shower => {
					return shower.id !== e;
				});
				setStore({ cart: other });
			},
			addUser: e => {
				let newUser = getStore();
				newUser.user = e;
				console.log(newUser.user);
				setStore({ newUser });

				fetch(
					"https://real-final-project-server-powergtd.c9users.io/user",
					{
						method: "POST",
						body: JSON.stringify(e),
						headers: {
							"Content-Type": "application/json"
						}
					}
				)
					.then(res => {
						return res.json();
					})
					.then(response => {
						//console.log("Success:", typeof response);
						//	console.log(response);
					})

					.catch(error => console.error("Error:", error));
			},
			logIn: e => {
				return fetch(
					"https://real-final-project-server-powergtd.c9users.io/auth",
					{
						method: "POST",
						body: JSON.stringify(e),
						headers: {
							"Content-Type": "application/json"
						}
					}
				)
					.then(res => {
						return res.json();
					})
					.then(response => {
						//console.log(loggedInUser.user);
						localStorage.setItem("token", response.token);
						setStore({ token: response.token });
						return true;
					})

					.catch(error => console.error("Error:", error));
			},
			//this clears the cart on payment so the cart is empty after purchasing products.
			clearCartOnPayment: e => {
				let currentCart = getStore();
				localStorage.setItem(
					"payment_history",
					JSON.stringify(currentCart.cart)
				);
				console.log(localStorage.payment_history);
				currentCart.cart.splice(0, currentCart.cart.length);
				setStore({ currentCart });
			},

			getDatData: () => {
				fetch(
					"https://real-final-project-server-powergtd.c9users.io/product/all"
				)
					.then(res => res.json())
					.then(response => {
						//console.log("Success:", typeof response);
						//	console.log(response);
						if (typeof response.data === typeof []) {
							setStore({ products: response.data });
							//console.log(this.state);
						} else {
							setStore({ products: [] });
						}
					})

					.catch(error => console.error("Error:", error));
			}
			//this comes before clearing the cart so that payment history can be updated.
			// populatePaymentHistory: e => {
			// 	var i;
			// 	let paymentHistoryArray = [];
			// 	for (i = 0; i <= localStorage.payment_history; i++) {
			// 		paymentHistoryArray.push[i];
			// 	}
			// 	console.log(paymentHistoryArray);
			// 	localStorage.setItem("payment_history", paymentHistoryArray);
			// 	return paymentHistoryArray;
			// }
		}
	};
};

export default getState;
