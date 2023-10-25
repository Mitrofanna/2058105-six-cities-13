import Header from '../../components/header/header';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import EmptyCardList from '../../components/empty-card-list/empty-card-list';
import CardList from '../../components/card-list/card-list';
import { getOffersSorted } from '../../utils/utils';
import Locations from '../../components/locations/locations';
import { useAppSelector } from '../../hooks/use-state';

function MainPage(): JSX.Element {
	const cards = useAppSelector((state) => state.cards);
	const selectedCity = useAppSelector((state) => state.selectedCity);

	const [id, setId] = useState<null | string>(null);
	
	const offersSorted = getOffersSorted(cards);

	function handleMouseEnter(cardId: string): void {
		setId(cardId);
	};

	function handleMouseLeave(): void {
		setId(null);
	};
	
	return (
		<div className="page page--gray page--main">
			<Helmet>
				<title>6 Cities</title>
			</Helmet>
			<Header />
			<main className={`page__main page__main--index ${!offersSorted[selectedCity] ? 'page__main--index-empty' : ''}`}>
				<h1 className="visually-hidden">Cities</h1>
				<div className="tabs">
					<section className="locations container">
						<Locations />
					</section>
				</div>
				{offersSorted[selectedCity] !== undefined ? <div className="cities">
					<CardList
					offersSorted={offersSorted}
					selectedCity={selectedCity}
					currentCity={id}
					handleMouseEnter={handleMouseEnter}
					handleMouseLeave={handleMouseLeave}
					/>
				</div> : <EmptyCardList />
        		}

			</main>
		</div>
	);
}

export default MainPage;