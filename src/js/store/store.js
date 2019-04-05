const getState = ({ getStore, setStore }) => {
	return {
		store: {
			user: {},

			packages: [
				{
					id: 1,
					name: "1 - Month",
					description: "One Blog per Week",
					//<br></br>One Press Release per Week<br></br>One eBlast per Week<br></br>One Social Media Post per Week<br></br>One Newspaper Article every two weeks",
					price: 2500.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 2,
					name: "3 - Month",
					description: "One Blog per Week",
					price: 7000.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 3,
					name: "6 - Month",
					description: "One Blog per Week",
					price: 13000.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 4,
					name: "1 - Year",
					description: "One Blog per Week",
					price: 25000.0,
					image: "http://via.placeholder.com/200x200"
				}
			],

			addons: [
				{
					id: 5,
					name: "1 - Blog",
					description: "Blog",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 6,
					name: "1 - Press Release",
					description: "Press Release",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 7,
					name: "1 - eBlast",
					description: "eBlast",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 8,
					name: "1 - Social Media Post",
					description: "Social Media Post",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 9,
					name: "1 - Newspaper Article",
					description: "Newspaper Article",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 10,
					name: "1 - Direct Mailer",
					description: "Direct Mailer",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 11,
					name: "1 - Online Ad Content",
					description: "Online Ad Content",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				},
				{
					id: 12,
					name: "1 - Company Tagline",
					description: "Company Tagline",
					price: 250.0,
					image: "http://via.placeholder.com/200x200"
				}
			],

			cart: []
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
				//	let firstName = e.target.firstName.value;
				//	let lastName = e.target.lastName.value;
				//	let email = e.target.emailSignUp.value;
				//	let password = e.target.passwordSignUp.value;
				//	let businessName = e.target.businessName.value;
				//	let businessURL = e.target.businessURL.value;
				//	let businessURLUsername = e.target.businessURLUsername.value;
				//	let businessURLPassword = e.target.businessURLPassword.value;
				//	let phone = e.target.phoneSignUp.value;
				//
				//				let tempObject = {
				//					first_name: firstName,
				//					last_name: lastName,
				//					email: email,
				//					password: password,
				//					business_name: businessName,
				//					business_username: businessURLUsername,
				//					business_password: businessURLPassword,
				//					website_url: businessURL,
				//					phone: phone,
				//					payment_id: true
				//				};
			}
		}
	};
};
export default getState;
