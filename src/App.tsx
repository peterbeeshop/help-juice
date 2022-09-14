import React from 'react';
import classes from './App.module.scss';
import Content from './Content/Content';
import Menu from './components/menu/Menu';
import Header from './components/Header/Header';
import { BsQuestionCircle } from 'react-icons/bs';

function App() {
	return (
		<div className={classes.container}>
			<Menu />
			<div className={classes.content}>
				<Header />
				<Content />
			</div>
			<BsQuestionCircle className={classes.questionMark} />
		</div>
	);
}

export default App;
