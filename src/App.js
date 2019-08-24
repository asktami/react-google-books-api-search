import React from 'react';
import { Search } from './Search';
import { Results } from './Results';

import './App.css';

function scrollTo(element) {
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: element.offsetTop
	});
}

class App extends React.Component {
	state = {
		searchResults: []
	};

	updateResults = data => {
		this.setState({
			searchResults: [data]
		});
	};

	backToTop = event => {
		scrollTo(document.getElementById('head'));
		// hide back to top button
		const btnBackToTop = document.getElementById('back-to-top');
		btnBackToTop.style.display = '';
	};

	goToResults = event => {
		scrollTo(document.getElementById('results'));
		// show the back to top button, hidden by default via stylesheet
		const btnBackToTop = document.getElementById('back-to-top');
		btnBackToTop.style.display = 'block';
	};

	render() {
		return (
			<>
				<header id="head">
					<Search updateResults={data => this.updateResults(data)} />
				</header>

				<main>
					{this.state.searchResults.length > 0 ? (
						<Results
							searchResults={this.state.searchResults}
							goToResults={this.goToResults}
						/>
					) : null}
				</main>

				<footer>
					{this.state.searchResults.length > 0 ? (
						<button
							id="back-to-top"
							className="back-to-top"
							onClick={this.backToTop}
						>
							<img
								src="https://img.icons8.com/color/48/000000/circled-chevron-up.png"
								alt="Back to Top"
							/>
						</button>
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
