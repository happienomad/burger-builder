import React from 'react';
import './Burger.css';
import { Ingredient as IngredientModel } from '../../interfaces/ingredient';
import Control from './Control';

interface ControllerProps {
	ingredients: IngredientModel[],
	addIngredient: Function,
	removeIngredient: Function
}

const Controller = (props: ControllerProps) => {
	const controls = props.ingredients.map((ingredient, i) =>
		<Control key={'ingredient' + i} ingredient={ingredient} addIngredient={props.addIngredient} removeIngredient={props.removeIngredient} />);
	return (
		<div className="Controller">
			{controls}
			<button className="OrderButton">ORDER NOW</button>
		</div>
	);
}

export default Controller