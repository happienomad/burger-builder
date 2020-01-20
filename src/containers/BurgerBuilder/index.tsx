import React, { Fragment } from 'react';
import Visualizer from '../../components/Burger/Visualizer';
import { Ingredient } from '../../interfaces/ingredient';
import Controller from '../../components/Burger/Controller';
class BurgerBuilder extends React.Component<{}, { ingredients: Ingredient[], updatedPrice: number }> {
	constructor(props: any) {
		super(props);
		this.state = {
			ingredients: [
				{ name: 'salad', portion: 0, value: 80 },
				{ name: 'bacon', portion: 0, value: 100 },
				{ name: 'cheese', portion: 0, value: 75 },
				{ name: 'meat', portion: 0, value: 150 }
			],
			updatedPrice: 400
		};
	}

	addIngredientHandler = (name: string) => {
		let updatedIngredientPrice = 0;
		const updatedIngredients = this.state.ingredients.map(ingredient => {
			if (ingredient.name === name) {
				updatedIngredientPrice = ingredient.value;
				++ingredient.portion;
			}
			return ingredient;
		});
		let updatedPrice = this.state.updatedPrice + updatedIngredientPrice;
		this.setState({
			ingredients: updatedIngredients,
			updatedPrice
		});
	}

	removeIngredientHandler = (name: string) => {
		let updatedIngredientPrice = 0;
		const updatedIngredients = this.state.ingredients.map(ingredient => {
			if (ingredient.name === name) {
				updatedIngredientPrice = ingredient.value;
				--ingredient.portion;
			}
			return ingredient;
		});
		let updatedPrice = this.state.updatedPrice - updatedIngredientPrice;
		this.setState({
			ingredients: updatedIngredients,
			updatedPrice
		});
	}

	render() {
		return (
			<Fragment>
				<div>
					Burger visualization
				</div>
				<Visualizer ingredients={this.state.ingredients} />
				Price: ${this.state.updatedPrice / 100}
				<Controller ingredients={this.state.ingredients} addIngredient={this.addIngredientHandler} removeIngredient={this.removeIngredientHandler} />
			</Fragment>
		);
	}
}

export default BurgerBuilder;
