import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks/use-state';
import { getOffersSorted } from '../../utils/utils';
import Card from '../../components/card/card';

function FavoritesPage(): JSX.Element {
	const allCards = useAppSelector((state) => state.cards);
	const cards = allCards.filter((card) => card.isFavorite)
	const offersSorted = getOffersSorted(cards);

	return (
		<div className="page">
			<Helmet>
				<title>favorites offers</title>
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
												<span>{city}</span>
											</a>
										</div>
									</div>
									<div className="favorites__places">
										{offersSorted.map((card) => <Card card={card} key={card.id} />)}
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
