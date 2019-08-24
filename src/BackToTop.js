import React from 'react';

export class BackToTop extends React.Component {
	render() {
		return (
			<button
				id="back-to-top"
				className="back-to-top"
				onClick={this.props.goBackToTop}
			>
				back to top
			</button>
		);
	}
}
