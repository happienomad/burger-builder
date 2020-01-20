import React, { Fragment } from 'react';
import { ReactProps } from '../../interfaces/reactProps';

interface LoginProps {

}
const Layout = (props: ReactProps) => (
	<Fragment>
		<div>Toolbar</div>
		<main>
			{props.children}
		</main>
	</Fragment>
)

export default Layout;