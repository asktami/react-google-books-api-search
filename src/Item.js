import React from 'react';
// import { ItemButtons } from './ItemButtons';

/*
					title = book.volumeInfo.title;
					subtitle = book.volumeInfo.subtitle;
					description = book.volumeInfo.description;
					price = book.saleInfo.retailPrice.amount;
					currency = book.saleInfo.retailPrice.currencyCode;
					smallThumbnail = book.volumeInfo.imageLinks.smallThumbnail;
					thumbnail = book.volumeInfo.imageLinks.thumbnail;

if (book.volumeInfo.authors !== undefined) {
						for (let a = 0; a <= book.volumeInfo.authors.length; a++) {
							console.log(book.volumeInfo.authors[a]);
							authors.push(book.volumeInfo.authors[a]);
						}
					}
					*/

export class Item extends React.Component {
	render() {
		console.log('inITEM');
		console.log(JSON.stringify(this.props.book.volumeInfo.title));

		const { book } = this.props;
		const authorList = getAuthorList(book);
		const smallThumbnail = getSmallThumbnail(book);
		const imgPlaceholderURL = 'https://via.placeholder.com/150';

		function getAuthorList(book) {
			let authorList = book.volumeInfo && book.volumeInfo.authors;
			if (!authorList) {
				return <span>No authors to display</span>;
			}
			return authorList.map((author, index) => {
				return <span key={index}>{author}</span>;
			});
		}

		function getSmallThumbnail(book) {
			let smallThumbnailURL =
				book.volumeInfo &&
				book.volumeInfo.imageLinks &&
				book.volumeInfo.imageLinks.smallThumbnail;
			return smallThumbnailURL ? smallThumbnailURL : imgPlaceholderURL;
		}

		return (
			<li>
				{book.volumeInfo.title}
				<br />
				{authorList}
				<br />
				<img
					src={smallThumbnail}
					alt={smallThumbnail ? book.volumeInfo.title : 'no-image'}
				/>
			</li>

			/*
			<li className="item">
				<div className="item-header">
					<div className="item-subhead">
						{book.volumeInfo.title}
						<br />
						{book.volumeInfo.subtitle}
						<br />
						Author: this.props.authors.join(', ')
						<br />
						Price: {this.props.saleInfo.retailPrice.amount}{' '}
						{this.props.saleInfo.retailPrice.currencyCode}
					</div>

					<ItemButtons />
				</div>

				<div className="item-description">
					<img src="https://via.placeholder.com/150" alt="imageName" />
					{this.props.volumeInfo.description}
				</div>
			</li>
		*/
		);
	}
}
