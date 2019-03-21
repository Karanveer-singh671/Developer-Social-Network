import React, { Component } from 'react';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors: {}
		};
	}

	// on change function so when type will set to typed value, do for each input in form, arrow function so no need to bind
	onChange = (e) => {
		this.setState({
			// e.target.name is the array of the name which is name email password so put in array set to typed
			[e.target.name]: e.target.value
		});
	};

	// when submission of form, take the changed value on the inputs and put those in a new user object
	onSubmit = (e) => {
		e.preventDefault();
		const User = {
			email: this.state.email,
			password: this.state.password
		};
	};

	render() {
		return (
			<div className="login">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Log In</h1>
							<p className="lead text-center">Sign in to your DevConnector account</p>
							<form onSubmit={this.onSubmit}>
								<div className="form-group">
									<input
										type="email"
										className="form-control form-control-lg"
										placeholder="Email Address"
										name="email"
										value={this.state.email}
										onChange={this.onChange}
									/>
								</div>
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										placeholder="Password"
										name="password"
										value={this.state.password}
										onChange={this.onChange}
									/>
								</div>
								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
