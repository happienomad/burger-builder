import React from 'react';
import './Burger.css';

const Ingredients = (props: { type: String }) => {
	let ingredient = null;

	switch (props.type) {
		case ('bread-bottom'):
			ingredient = <div className="BreadBottom"></div>;
			break;
		case ('bread-top'):
			ingredient = (
				<div className="BreadTop">
					<div className="Seeds1"></div>
					<div className="Seeds"></div>
				</div>
			);
			break;
		case ('meat'):
			ingredient = <div className="Meat"></div>;
			break;
		case ('cheese'):
			ingredient = <div className="Cheese"></div>;
			break;
		case ('bacon'):
			ingredient = <div className="Bacon"></div>;
			break;
		case ('salad'):
			ingredient = <div className="Salad"></div>;
			break;
		default:
			ingredient = null;
			break;
	}
	return ingredient;
}

export default Ingredients;