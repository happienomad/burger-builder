import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder';
const App: React.FC = () => {
	return (
		<div className="App">
			<Layout>
				<BurgerBuilder />
			</Layout>
		</div>
	);
}

export default App;
