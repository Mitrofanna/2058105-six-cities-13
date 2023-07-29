import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { CardProps } from '../../components/card/type';
import FavoriteCard from '../../components/card/favorite-card';

type FavoritesProps = {
	cards: CardProps[];
}

function FavoritesPage({cards}: FavoritesProps): JSX.Element {
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

	return (
		<div className="page">
			<Helmet>
				<title>6 Cities</title>
			</Helmet>
			<Header />

			<main className="page__main page__main--favorites">
				<div className="page__favorites-container container">
					<section className="favorites">
						<h1 className="favorites__title">Saved listing</h1>
						<ul className="favorites__list">
							{Object.entries(offersSorted).map(([city, offersSorted]) => (

							<li key={city} className="favorites__locations-items">
								<div className="favorites__locations locations locations--current">
									<div className="locations__item">
										<a className="locations__item-link" href={`#${city.toLocaleLowerCase()}`}>
											<span>Amsterdam</span>
										</a>
									</div>
								</div>
								<div className="favorites__places">
								
								{offersSorted.map((card) => <FavoriteCard {...card} key={card.id} />)}
								</div>
							</li>
							))}

							
						</ul>
					</section>
				</div>
			</main>
			<footer className="footer container">
				<a className="footer__logo-link" href="main.html">
					<img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
				</a>
			</footer>
		</div>
	);
}

export default FavoritesPage;
