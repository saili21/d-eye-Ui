import React from 'react';

class CustomToggle extends React.Component {
	constructor(props, context) {
		super(props, context);

	}

	handleClick = (e) => {
		e.preventDefault();

		this.props.onClick(e);
	}

	render() {
		return (
			<a onClick={this.handleClick}>
				{this.props.children}
			</a>
		);
	}
}

export default CustomToggle
