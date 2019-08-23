import React from 'react';

const printTypes = ['all', 'books', 'magazines'];
const bookTypes = ['partial', 'full', 'free-ebooks', 'paid-ebooks', 'ebooks'];

const apiKey = 'AIzaSyCIxIIcpTwWrV5HmCj_q4AWZRAqD7y6CFI';
const apiURL = 'https://www.googleapis.com/books/v1/volumes';

export class Search extends React.Component {
	state = {
		searchTerm: '',
		printType: 'all',
		bookType: 'full'
	};

	// QUESTION - WHY DOESN'T THIS WORK?
	// const {searchTerm, printType, bookType} = this.state;

	handleChange = event => {
		const {
			target: { name, value }
		} = event;
		this.setState({ [name]: value });

		// QUESTION - WHY DOESN'T THIS WORK?
		// console.log({this.state.searchTerm});
	};

	handleSubmit(e) {
		e.preventDefault();
		this.fetchBooks();
	}

	fetchBooks = () => {
		const getURL = `${apiURL}?key=${apiKey}&langRestrict=en&maxResults=40&orderBy=relevance&q=${
			this.state.searchTerm
		}&filter=${this.state.bookType}&printType=${this.state.printType}`;

		console.log(getURL);
		/*
		QUESTION: THIS DOES NOT WORK - WHY ?
		const getURL = 'https://www.googleapis.com/books/v1/volumes';
		const options = {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				key: apiKey,
				langRestrict: 'en',
				maxResults: '40',
				orderBy: 'relevance',
				q: this.state.searchTerm,
				filter: this.state.bookType,
				printType: this.state.printType
			})
		};
		*/

		fetch(getURL)
			.then(res => {
				if (!res.ok) {
					throw new Error('Something went wrong, please try again later.');
				}
				return res;
			})
			.then(res => res.json())
			.then(data => {
				this.props.updateResults(data);
				this.setState({
					error: null
				});
			})
			.catch(err => {
				this.setState({
					error: err.message
				});
			});
	};

	render() {
		const bookTypeOptions = bookTypes.map((bookTypeOption, i) => (
			<option value={bookTypeOption} key={bookTypeOption}>
				{bookTypeOption}
			</option>
		));
		const printTypeOptions = printTypes.map((printTypeOption, i) => (
			<option value={printTypeOption} key={printTypeOption}>
				{printTypeOption}
			</option>
		));

		return (
			<div className="header_content">
				<h1>Google Book Search</h1>

				<form id="form" onSubmit={e => this.handleSubmit(e)}>
					<legend />

					<label htmlFor="searchTerm">
						<input
							type="text"
							name="searchTerm"
							id="searchTerm"
							required
							aria-required="true"
							placeholder=""
							value={this.state.searchTerm}
							onChange={this.handleChange}
						/>
					</label>
					<button id="search">search</button>

					<div className="select-container">
						<label htmlFor="printType">
							Print Type{' '}
							<select
								id="printType"
								name="printType"
								value={this.state.printType}
								onChange={this.handleChange}
							>
								{printTypeOptions}
							</select>
						</label>
						<label htmlFor="bookType">
							<select
								id="bookType"
								name="bookType"
								value={this.state.bookType}
								onChange={this.handleChange}
							>
								{bookTypeOptions}
							</select>
						</label>
					</div>
				</form>

				<p id="error-message" className="error-message">
					{this.state.error}
				</p>
			</div>
		);
	}
}
