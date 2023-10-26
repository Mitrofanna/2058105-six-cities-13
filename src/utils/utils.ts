import { CardProps } from "../types/card";

const dateOptions: Intl.DateTimeFormatOptions = {
	month: 'long',
	year: 'numeric'
}

function getOffersSorted(cards: CardProps[]) {
	const offersSorted: Record<string, CardProps[]> = {};

	for (const card of cards) {
		const city = card.city.name;

		if (city in offersSorted) {
			offersSorted[city].push(card);
			continue;
		}
		offersSorted[city] = [card];
		continue;
	}

	return offersSorted;
}

function sortByRating(a: CardProps, b: CardProps) {
	return b.rating - a.rating;
}

function sortPriceLowToHigh(a: CardProps, b: CardProps) {
	return a.price - b.price;
}

function sortPriceHighToLow(a: CardProps, b: CardProps) {
	return b.price - a.price;
}

const sortByOptions = {
	Popular: (cards: CardProps[]) => cards.slice(),
	HighToLow: (cards: CardProps[]) => cards.slice().sort(sortPriceHighToLow),
	LowToHigh: (cards: CardProps[]) => cards.slice().sort(sortPriceLowToHigh),
	TopRated: (cards: CardProps[]) => cards.slice().sort(sortByRating)
};

export {getOffersSorted, dateOptions, sortByOptions};