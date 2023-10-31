import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { CardProps } from '../../types/card';
import Map from '../../components/map/map';
import { useParams } from 'react-router-dom';
import NearCardList from '../../components/near-cards-list/near-card-list';
import ReviewList from '../../components/reviews-list/review-list';
import { useAppSelector } from '../../hooks/use-state';

function OfferPage(): JSX.Element {
	const {id} = useParams();
	const cards = useAppSelector((state) => state.cards);
	const fullCard = cards.find((item) => item.id === id) as CardProps;

	return (
		<div className="page">
			<Helmet>
				<title>Offer details</title>
			</Helmet>
			<Header />
			<main className="page__main page__main--offer">
				<section className="offer">
					<div className="offer__gallery-container container">
						<div className="offer__gallery">
							{fullCard.images.map((image) =>
								(<div key={image} className="offer__image-wrapper"><img className="offer__image" src={image} alt="Photo studio"/></div>))}
						</div>
					</div>
					<div className="offer__container container">
						<div className="offer__wrapper">
							{fullCard.isPremium && <div className="offer__mark"><span>Premium</span></div>}
							<div className="offer__name-wrapper">
								<h1 className="offer__name">
									{fullCard.title}
								</h1>
								<button className={`offer__bookmark-button button ${fullCard.isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
									<svg className="offer__bookmark-icon" width="31" height="33">
										<use xlinkHref="#icon-bookmark"></use>
									</svg>
									<span className="visually-hidden">To bookmarks</span>
								</button>
							</div>
							<div className="offer__rating rating">
								<div className="offer__stars rating__stars">
									<span style={{width: '80%'}}></span>
									<span className="visually-hidden">Rating</span>
								</div>
								<span className="offer__rating-value rating__value">{fullCard.rating}</span>
							</div>
							<ul className="offer__features">
								<li className="offer__feature offer__feature--entire">
									{fullCard.type}
								</li>
								<li className="offer__feature offer__feature--bedrooms">
									{fullCard.bedrooms} Bedrooms
								</li>
								<li className="offer__feature offer__feature--adults">
									Max {fullCard.maxAdults} adults
								</li>
							</ul>
							<div className="offer__price">
								<b className="offer__price-value">&euro;{fullCard.price}</b>
								<span className="offer__price-text">&nbsp;night</span>
							</div>
							<div className="offer__inside">
								<h2 className="offer__inside-title">What&apos;s inside</h2>
								<ul className="offer__inside-list">
									{fullCard.goods.map((item) =>
										(<li key={item} className="offer__inside-item">
											{item}
										</li>)
									)}
								</ul>
							</div>
							<div className="offer__host">
								<h2 className="offer__host-title">Meet the host</h2>
								<div className="offer__host-user user">
									<div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
										<img className="offer__avatar user__avatar" src={fullCard.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
									</div>
									<span className="offer__user-name">
										{fullCard.host.name}
									</span>
									<span className="offer__user-status">
										{fullCard.host.isPro}
									</span>
								</div>
								<div className="offer__description">
									<p className="offer__text">
										{fullCard.description}
									</p>
								</div>
							</div>
							<ReviewList />
						</div>
					</div>
					<Map city={fullCard} points={cards} selectedPoint={fullCard.city.name} isMainPage={false}/>
				</section>
				<div className="container">
					<section className="near-places places">
						<h2 className="near-places__title">Other places in the neighbourhood</h2>
						<NearCardList />
					</section>
				</div>
			</main>
		</div>
	);
}

export default OfferPage;
