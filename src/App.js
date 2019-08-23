import React from 'react';
import { Search } from './Search';
import { Results } from './Results';

import './App.css';

class App extends React.Component {
	state = {
		searchResults: []
	};

	updateResults(data) {
		this.setState({
			searchResults: [data]
		});
	}

	render() {
		return (
			<>
				<header>
					<Search updateResults={data => this.updateResults(data)} />
				</header>
				<main>
					<Results searchResults={this.state.searchResults} />
				</main>
				<footer>
					<button className="back-to-top">
						<img
							src="https://img.icons8.com/color/48/000000/circled-chevron-up.png"
							alt="Back to Top"
						/>
					</button>
					<span>
						<a
							href="https://icons8.com/icon/7695/search-filled"
							title="Search icon at Icons8.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							Icons by Icons8
						</a>
						• Photo by Ria Puskas on Unsplash • Built by
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
