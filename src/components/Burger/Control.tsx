import React from 'react';
import './Burger.css';
import { Ingredient } from '../../interfaces/ingredient';

interface ControlProps {
	ingredient: Ingredient,
	addIngredient: Function,
	removeIngredient: Function
}

const Control = (props: ControlProps) => {
	return (
		<div className="Control">
			<div className="Label">{props.ingredient.name}</div>
			<div className="Buttons">
				<button className="Less" disabled={props.ingredient.portion === 0} onClick={() => props.removeIngredient(props.ingredient.name)}>Less</button>
				<button className="More" onClick={() => props.addIngredient(props.ingredient.name)}>More</button>
			</div>
		</div>
	);
}

export default Control