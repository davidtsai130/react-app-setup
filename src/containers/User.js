import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux'
import { Button } from 'react-toolbox/lib/button';
import { Avatar } from 'react-toolbox/lib/avatar';
import { Input } from 'react-toolbox/lib/input';

import { updateInput } from '../actions'
import { retrieveRepos } from '../thunks'

class User extends PureComponent {

	constructor(props) {
		super(props)

		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(value) {
		this.props.updateInput(value)
	}

	render() {
		return(
			<div>
				<Avatar title="Javier" image={this.props.user.avatar_url}/>
				<Input type='text' hint='Enter Github Username' name='username' value={this.props.input} onChange={this.handleChange} />
				<Button label='Submit' accent onClick={() => this.props.retrieveRepos(this.props.input)}/>
			</div>
		)
	}
}

User.propTypes = {
	user: PropTypes.object,
	input: PropTypes.string,
	updateInput: PropTypes.func,
	retrieveRepos: PropTypes.func,
}

export default connect(
	state => {
		return {
			user: state.contributors_info,
			input: state.input,
		}
	},
	{ updateInput, retrieveRepos }
)(User)
