import React from 'react';
import { ItemButtons } from './ItemButtons';

export class Item extends React.Component {
	render() {
		const { book } = this.props;

		const imgPlaceholderURL = 'https://via.placeholder.com/150';

		const authorList = getAuthorList(book);
		const smallThumbnail = getSmallThumbnail(book);
		const price = getPrice(book);

		function getAuthorList(book) {
			let authorList = book.volumeInfo && book.volumeInfo.authors;

			let authors = [];
			if (!authorList) {
				return 'N/A';
			}
			authorList.map((author, index) => authors.push(author));

			return authors.join(', ');
		}

		function getPrice(book) {
			let price = book.saleInfo.retailPrice && book.saleInfo.retailPrice.amount;

			let currency =
				book.saleInfo.retailPrice && book.saleInfo.retailPrice.currencyCode;

			if (!price) {
				return 'N/A';
			}

			return `${price} ${currency}`;
		}

		function getSmallThumbnail(book) {
			let smallThumbnailURL =
				book.volumeInfo &&
				book.volumeInfo.imageLinks &&
				book.volumeInfo.imageLinks.smallThumbnail;
			return smallThumbnailURL ? smallThumbnailURL : imgPlaceholderURL;
		}

		return (
			<li className="item">
				<div className="item-header">
					<div className="item-subhead">
						{book.volumeInfo.title}
						<br />
						Author: {authorList}
						<br />
						Price: {price}
					</div>
					<ItemButtons />
				</div>
				<div className="item-description">
					<img
						src={smallThumbnail}
						alt={smallThumbnail ? book.volumeInfo.title : 'no-image'}
					/>
					{book.volumeInfo.description}
				</div>
			</li>
		);
	}
}
