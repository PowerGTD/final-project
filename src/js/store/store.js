const getState = ({ getStore, setStore }) => {
	return {
		store: {
			packages: [
				{
					id: 1,
					name: "1 - Month",
					description: "One Blog per Week",
					//<br></br>One Press Release per Week<br></br>One eBlast per Week<br></br>One Social Media Post per Week<br></br>One Newspaper Article every two weeks",
					price: 2500.0,
					image: "http://source.unsplash.com/wgivdx9dBdQ/200x200"
				},
				{
					id: 2,
					name: "3 - Month",
					description: "One Blog per Week",
					price: 7000.0,
					image: "http://source.unsplash.com/uQvUByH89MA/200x200"
				},
				{
					id: 3,
					name: "6 - Month",
					description: "One Blog per Week",
					price: 13000.0,
					image: "http://source.unsplash.com/wkO0q0UTqc8/200x200"
				},
				{
					id: 4,
					name: "1 - Year",
					description: "One Blog per Week",
					price: 25000.0,
					image: "http://source.unsplash.com/y83Je1OC6Wc/200x200"
				}
			],

			addons: [
				{
					id: 5,
					name: "1 - Blog",
					description: "Blog",
					price: 250.0,
					image: "http://source.unsplash.com/OqtafYT5kTw/200x200"
				},
				{
					id: 6,
					name: "1 - Press Release",
					description: "Press Release",
					price: 250.0,
					image: "http://source.unsplash.com/4V1dC_eoCwg/200x200"
				},
				{
					id: 7,
					name: "1 - eBlast",
					description: "eBlast",
					price: 250.0,
					image: "http://source.unsplash.com/zOWvIwYGHG8/200x200"
				},
				{
					id: 8,
					name: "1 - Social Media Post",
					description: "Social Media Post",
					price: 250.0,
					image: "http://source.unsplash.com/6F0mLsrv134/200x200"
				},
				{
					id: 9,
					name: "1 - Newspaper Article",
					description: "Newspaper Article",
					price: 250.0,
					image: "http://source.unsplash.com/wajusTqz_FI/200x200"
				},
				{
					id: 10,
					name: "1 - Direct Mailer",
					description: "Direct Mailer",
					price: 250.0,
					image: "http://source.unsplash.com/uGcDWKN91Fs/200x200"
				},
				{
					id: 11,
					name: "1 - Online Ad Content",
					description: "Online Ad Content",
					price: 250.0,
					image: "http://source.unsplash.com/EpJOBZNzrVo/200x200"
				},
				{
					id: 12,
					name: "1 - Company Tagline",
					description: "Company Tagline",
					price: 250.0,
					image: "http://source.unsplash.com/Bnk2Aep_li4/200x200"
				}
			],

			cart: [{}]
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
			}
		}
	};
};
export default getState;
