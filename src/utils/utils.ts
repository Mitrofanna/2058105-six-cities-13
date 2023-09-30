import { CardProps } from "../types/card";

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

export default getOffersSorted;