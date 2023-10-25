import Header from '../../components/header/header';
import { CardProps } from '../../types/card';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CITIES } from '../../const';
import EmptyCardList from '../../components/empty-card-list/empty-card-list';
import CardList from '../../components/card-list/card-list';
import {getOffersSorted} from '../../utils/utils';

export type MainPageProps = {
	cards: CardProps[];
}

function MainPage(props: MainPageProps): JSX.Element {
	const {cards} = props;
	  
	const [id, setId] = useState<null | string>(null);
	const [selectedCity, setSelectedCity] = useState<string>(CITIES[0]);
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
						<ul className="locations__list tabs__list">
							{CITIES.map((city) => (
								<li key={city} className="locations__item">
									<a className={`locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`}
										onClick={() => setSelectedCity(city)} href={`#${city.toLocaleLowerCase()}`}
									>
										<span>{city}</span>
									</a>
								</li>
							))}
						</ul>
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