import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.getElementById('root');

class Form extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<form id="loginForm">
				<label htmlfor="username">Username:</label>
				<input type="text" id="username"/>
				<label htmlfor="username">Password:</label>
				<input type="password" id="password"/>
				<input type="submit" value="log in"/>
			</form>				
		);
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div id="loginCard">
				<Form />
			</div>
		);
	}
}

ReactDOM.render(<App />, rootElement);
