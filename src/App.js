import React from 'react';
import { Search } from './Search';
import { Results } from './Results';
import { BackToTop } from './BackToTop';

import './App.css';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.ref_SearchForm = React.createRef();
		this.ref_SearchResults = React.createRef();
		this.ref_BackToTop = React.createRef();
	}

	state = {
		searchResults: []
	};

	updateResults = data => {
		this.setState({
			searchResults: [data]
		});

		// go to searchResults
		this.scrollToRef(this.ref_SearchResults);
	};

	// General scroll to element function
	scrollToRef = el => {
		window.scrollTo({
			top: el.current.offsetTop,
			behavior: 'smooth'
		});

		// localName=main
		// console.log('el.current.localName = ', el.current.localName);
		// id=main
		// console.log('el.current.id = ', el.current.id);

		if (el.current.localName === 'header') {
			// went to top
			// hide back to top button
			const btnBackToTop = document.getElementById('back-to-top');
			btnBackToTop.style.display = '';
		}

		if (el.current.localName === 'main') {
			// went to searchResults
			// show back to top button
			const btnBackToTop = document.getElementById('back-to-top');
			btnBackToTop.style.display = 'block';
		}
	};

	/*
	goBackToTop = () => {
		window.scrollTo({
			top: 0
		});
		// hide back to top button
		const btnBackToTop = document.getElementById('back-to-top');
		btnBackToTop.style.display = '';
	};
	*/

	render() {
		return (
			<>
				<header id="head" ref={this.ref_SearchForm}>
					<Search updateResults={data => this.updateResults(data)} />
				</header>

				<main id="main" ref={this.ref_SearchResults}>
					{this.state.searchResults.length > 0 ? (
						<Results searchResults={this.state.searchResults} />
					) : null}
				</main>

				<footer>
					{this.state.searchResults.length > 0 ? (
						<BackToTop
							goBackToTop={() => this.scrollToRef(this.ref_SearchForm)}
						/>
					) : null}
					<span>
						<a
							href="https://icons8.com/icon/7695/search-filled"
							title="Search icon at Icons8.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Icons by Icons8
						</a>{' '}
						• Photo by Ria Puskas on Unsplash • Built by{' '}
						<a
							href="http://www.asktami.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Tami Williams
						</a>
					</span>
				</footer>
			</>
		);
	}
}
export default App;
