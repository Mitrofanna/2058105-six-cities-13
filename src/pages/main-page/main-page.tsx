import Card from '../../components/card/card';
import Header from '../../components/header/header';
import { CardProps } from '../../components/card/type';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { cities } from '../../const';

export type MainPageProps = {
	cards: CardProps[];
}

function MainPage({cards}: MainPageProps): JSX.Element {
	const offersSorted : Record<string, CardProps[]> = {};

	for(const card of cards) {
		const city = card.city.name;
		if(city in offersSorted) {
			offersSorted[city].push(card);
			continue;
		}
		offersSorted[city] = [card];
		continue;
	}

	const [selectedCity, setCity] = useState<string>(cities[0]);

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
							{cities.map((city) => (
								<li key={city} className="locations__item">
									<a className={`locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`}
										onClick={() => setCity(city)} href={`#${city.toLocaleLowerCase()}`}
									>
										<span>{city}</span>
									</a>
								</li>
							))}
						</ul>
					</section>
				</div>
				{offersSorted[selectedCity] !== undefined ? <div className="cities">
					<div className="cities__places-container container">
						<section className="cities__places places">
							<h2 className="visually-hidden">Places</h2>
							<b className="places__found">{offersSorted[selectedCity].length} places to stay in {selectedCity}</b>
							<form className="places__sorting" action="#" method="get">
								<span className="places__sorting-caption">Sort by</span>{' '}
								<span className="places__sorting-type" tabIndex={0}>
									Popular
									<svg className="places__sorting-arrow" width="7" height="4">
										<use xlinkHref="#icon-arrow-select"></use>
									</svg>
								</span>
								<ul className="places__options places__options--custom places__options--opened">
									<li className="places__option places__option--active" tabIndex={0}>Popular</li>
									<li className="places__option" tabIndex={0}>Price: low to high</li>
									<li className="places__option" tabIndex={0}>Price: high to low</li>
									<li className="places__option" tabIndex={0}>Top rated first</li>
								</ul>
							</form>
							<div className="cities__places-list places__list tabs__content">
								{offersSorted[selectedCity].map((card) => <Card {...card} key={card.id} />)}
							</div>
						</section>
						<div className="cities__right-section">
							<section className="cities__map map"></section>
						</div>
					</div>
				</div> : <div className="cities">
					<div className="cities__places-container cities__places-container--empty container">
						<section className="cities__no-places">
							<div className="cities__status-wrapper tabs__content">
								<b className="cities__status">No places to stay available</b>
								<p className="cities__status-description">We could not find any property available at the moment in {selectedCity}</p>
							</div>
						</section>
						<div className="cities__right-section"></div>
					</div>
                                                         </div>}

			</main>
		</div>
	);
}

export default MainPage;
