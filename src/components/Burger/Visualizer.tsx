import React from 'react';
import './Burger.css';
import Ingredient from './Ingredients';
import { Ingredient as IngredientModel } from '../../interfaces/ingredient';
const Visualizer = (props: { ingredients: IngredientModel[] }) => {
	const ingredients = props.ingredients.flatMap((ingredient) => {
		return [...Array(ingredient.portion)].map((_: any, i) => (
			<Ingredient key={ingredient.name + i} type={ingredient.name} />
		));
	});
	return (
		<div className="Burger">
			<Ingredient type="bread-top" />
			{ingredients}
			<Ingredient type="bread-bottom" />
		</div>
	)
}

export default Visualizer;