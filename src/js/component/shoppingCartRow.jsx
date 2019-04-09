import React from "react";

import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class ShoppingCartRow extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div className="row d-lg-flex justify-content-between align-items-center border-bottom">
								<button
									className="btnStyle col-sm-12 col-lg-2"
									onClick={() =>
										actions.removeFromCart(this.props.id)
									}>
									<i className="fas fa-minus text-danger" />
								</button>
								<span className="productDescription col-sm-12 col-lg-4">
									<h3>{this.props.name}</h3>
								</span>
								<span className="price col-sm-12 col-lg-2 pr-4">
									<p>${this.props.price}</p>
								</span>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

ShoppingCartRow.propTypes = {
	image: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.number,
	details: PropTypes.string,
	name: PropTypes.string,
	index: PropTypes.number,
	id: PropTypes.number
};
