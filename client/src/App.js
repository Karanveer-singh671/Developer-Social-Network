import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import store from './store';
import { jwt_decode } from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';

// check for token
if (localStorage.jwtToken) {
	// set auth token header auth
	setAuthToken(localStorage.jwtToken);
	// decode token and get user info and exp
	const decoded = jwt_decode(localStorage.jwtToken);
	// set user and isAuthenticated
	store.dispatch(setCurrentUser(decoded));

	// check if token time expired

	const currentTime = Date.now() / 1000;
	if (decoded.exp < currentTime) {
		// logout user
		store.dispatch(logoutUser());
		// Clear current Profile
		// redirect to login
		window.location.href = '/login';
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router>
					<div className="App">
						<Navbar />
						{/* if don't use exact will display component from multiple paths, link tag in router instead of a tag html */}
						<Route exact path="/" component={Landing} />
						<div className="container">
							<Route exact path="/register" component={Register} />
							<Route exact path="/login" component={Login} />
						</div>
						<Footer />
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;
