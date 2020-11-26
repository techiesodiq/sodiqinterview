import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

class Product extends Component {
	render() {
		const { id, title, image, price, inCart } = this.props.product;
		return (
			<ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
				<div className="card">
					<ProductConsumer>
						{(value) => (
							<div
								className="img-container p-5"
								onClick={() => value.handleDetail(id)}
							>
								<Link to="/details">
									<img src={image} alt="product" className="card-img-top" />
								</Link>
								<button
									className="cart-btn"
									disabled={inCart ? true : false}
									onClick={() => {
										value.addToCart(id);
									}}
								>
									{inCart ? (
										<p className="text-capitalize mb-0" disabled>
											{" "}
											in Cart
										</p>
									) : (
										<FontAwesomeIcon icon={faCartPlus} />
									)}
								</button>
							</div>
						)}
					</ProductConsumer>
					{/* card footer */}
					<div className="card-footer d-flex justify-content-between">
						<p className="align-self-center mb-0">{title}</p>
						<h5 className="text-blue font-italic mb-0">
							<span>&#8358;</span>
							{price}
						</h5>
					</div>
				</div>
			</ProductWrapper>
		);
	}
}

Product.propTypes = {
	product: PropTypes.shape({
		id: PropTypes.number,
		image: PropTypes.string,
		title: PropTypes.string,
		price: PropTypes.number,
		inCart: PropTypes.bool,
	}).isRequired,
};

const ProductWrapper = styled.div`
	.card {
		border-color: transparent;
		transition: all is linear;
	}
	.card-footer {
		background: transparent;
		border-top: transparent;
		transition: all is linear;
	}
	&:hover {
		.card {
			border: 0.04rem solid rgba(0, 0, 0, 0.2);
			box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
		}
		.card-footer {
			background: rgba(247, 247 247);
		}
	}
	.img-container {
		position: relative;
		overflow: hidden;
	}
	.card-img-top {
		transition: all is linear;
	}
	.img-container:hover .card-img-top {
		transform: scale(1.2);
	}
	.cart-btn {
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 0.2rem 0.4rem;
		background: var(--lightBlue);
		border: none;
		color: var(--mainWhite);
		font-size: 1.4rem;
		border-radius: 0.5rem 0 0 0;
		transform: translate(100%, 100%);
		transition: all is linear;
	}
	.img-container: hover .cart-btn {
		transform: translate(0, 0);
	}
	.cart-btn:hover {
		color: var(--mainBlue);
		cursor: pointer;
	}
`;

export default Product;
