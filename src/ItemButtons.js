import React from 'react';

export class ItemButtons extends React.Component {
	render() {
		return (
			<div className="item-buttons">
				<a href={this.props.link} target="_blank">
					view
				</a>
			</div>
		);
	}
}
