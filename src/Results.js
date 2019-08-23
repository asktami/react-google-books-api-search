import React from 'react';
import { Item } from './Item';

export class Results extends React.Component {
	// QUESTION - IS THIS THE CORRECT PLACE FOR THIS?
	componentDidMount() {
		this.props.goToResults();
	}

	render() {
		const { searchResults } = this.props;

		let bookList = [];

		console.log(searchResults[0].totalItems);

		if (
			searchResults[0] &&
			searchResults[0].totalItems &&
			searchResults[0].items
		) {
			bookList = searchResults[0].items.map((book, index) => {
				return <Item key={index} book={book} />;
			});
		}

		return (
			<section id="results">
				<h2>Search Results</h2>
				<ul id="results-list" className="item-list">
					{!bookList.length ? 'No books found!' : <>{bookList}</>}
				</ul>
			</section>
		);
	}
}

/*
//
WORKS:
<section id="results">
				{bookList ? <h2>Search Results</h2> : null}
				<ul id="results-list" className="item-list">
					{bookList.length > 0 ? <>{bookList}</> : <li>No books found!</li>}
				</ul>
			</section>

//
WORKS:
			return !bookList.length ? (
			'No books found!'
		) : (
			<section id="results">
				<h2>Search Results</h2>
				<ul id="results-list" className="item-list">
					{bookList}
				</ul>
			</section>
		);
 */
