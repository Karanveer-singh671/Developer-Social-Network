import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProfileGithub extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientId: '29ac5ca6ca0a4105825a',
			clientSecret: '169e1c2f2eac37054a4214db34d4332d613595b3',
			count: 5,
			sort: 'created: asc',
			repos: []
		};
	}
	// request to github api use fetch api to make the request to url
	componentDidMount() {
		const { username } = this.props;
		const { count, sort, clientId, clientSecret } = this.state;

		fetch(
			`https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientId}&client_secret=${clientSecret}`
		)
			// with fetch need to map to json and then can map that data
			.then((res) => res.json())
			.then((data) => {
				// need if statement with myRef to stop memoryLeak
				if (this.refs.myRef) {
					this.setState({ repos: data });
				}
			})
			.catch((err) => console.log(err));
	}

	render() {
		const { repos } = this.state;
		// map thru the repos for each add a link to them and discription, stars, watchers, and forks
		const repoItems = repos.map((repo) => (
			<div key={repo.id} className="card card-body mb-2">
				<div className="row">
					<div className="col-md-6">
						<h4>
							<Link to={repo.html_url} className="text-info" target="_blank">
								{repo.name}
							</Link>
						</h4>
						<p>{repo.description}</p>
					</div>
					<div className="col-md-6">
						<span className="badge badge-info mr-1">Stars: {repo.stargazers_count}</span>
						<span className="badge badge-secondary mr-1">Watchers: {repo.watchers_count}</span>
						<span className="badge badge-success">Forks: {repo.forks_count}</span>
					</div>
				</div>
			</div>
		));
		return (
			// set myRef else will cause memory leak
			<div ref="myRef">
				<hr />
				<h3 className="mb-4">Latest Github Repos</h3>
				{/* return all array of repos to render */}
				{repoItems}
			</div>
		);
	}
}

ProfileGithub.propTypes = {
	username: PropTypes.string.isRequired
};

export default ProfileGithub;
