import React, { Component } from 'react';
import ProfileAbout from './ProfileAbout';
import ProfileHeader from './ProfileHeader';
import ProfileCreds from './ProfileCreds';
import ProfileGithub from './ProfileGithub';
import Spinner from './../common/Spinner';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProfileByHandle } from '../../actions/profileActions';

class Profile extends Component {
	componentDidMount() {
		// check thru URI endpoint
		if (this.props.match.params.handle) {
			this.props.getProfileByHandle(this.props.match.params.handle);
		}
	}

	render() {
		return <div />;
	}
}

Profile.propTypes = {
	getProfileByHandle: PropTypes.func.isRequired,
	profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	profile: state.profile
});
// need getProfileByHandle or else will say not a function
export default connect(mapStateToProps, { getProfileByHandle })(Profile);
