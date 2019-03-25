import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from './../../actions/authActions';
import TextFieldGroup from './../common/TextFieldGroup';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {}
		};

		// this.onChange = this.onChange.bind(this);
	}

	// on change function so when type will set to typed value, do for each input in form, arrow function so no need to bind
	onChange = (e) => {
		this.setState({
			// e.target.name is the array of the name which is name email password so put in array set to typed
			[e.target.name]: e.target.value
		});
	};

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/dashboard');
		}
	}

	UNSAFE_componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	// when submission of form, take the changed value on the inputs and put those in a new user object
	onSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password: this.state.password2
		};
		// can use this.props.history to redirect within the action using withRouter
		this.props.registerUser(newUser, this.props.history);
	};

	render() {
		const errors = this.state;
		return (
			<div className="register">
				<div className="container">
					<div className="row">
						<div className="col-md-8 m-auto">
							<h1 className="display-4 text-center">Sign Up</h1>
							<p className="lead text-center">Create your DevConnector account</p>
							{/* on submit of the form */}
							<form noValidate onSubmit={this.onSubmit} action="create-profile.html">
								<TextFieldGroup
									placeholder="Name"
									name="name"
									value={this.state.name}
									onChange={this.onChange}
									error={errors.name}
								/>

								<TextFieldGroup
									placeholder="Email"
									name="email"
									type="email"
									value={this.state.email}
									onChange={this.onChange}
									error={errors.email}
									info="This site uses Gravatar so if you want a profile image use a Gravatar email"
								/>
								<TextFieldGroup
									placeholder="Password"
									name="password2"
									type="password"
									value={this.state.password}
									onChange={this.onChange}
									error={errors.password}
									info="This site uses Gravatar so if you want a profile image use a Gravatar email"
								/>
								<TextFieldGroup
									placeholder="Confirm Password"
									name="password"
									type="password"
									value={this.state.password2}
									onChange={this.onChange}
									error={errors.password2}
									info="This site uses Gravatar so if you want a profile image use a Gravatar email"
								/>
								<input type="submit" className="btn btn-info btn-block mt-4" />
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

// put auth in state to being able to access with this.props.auth.ANYTHINGINSIDETHISSTATE
const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
