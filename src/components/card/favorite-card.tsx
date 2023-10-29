import { CardProps } from '../../types/card';
import { Link } from 'react-router-dom';

function FavoriteCard(card: CardProps): JSX.Element {
	const href = `/offer/${card.id}`;
	return (
		<article className="favorites__card place-card">

			{card.isPremium && <div className="place-card__mark"><span>Premium</span></div>}

			<div className="favorites__image-wrapper place-card__image-wrapper">
				<Link to={href}>
					<img className="place-card__image" src={card.previewImage} width="150" height="110" alt="Place image" />
				</Link>
			</div>
			<div className="favorites__card-info place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">&euro;{card.price}</b>
						<span className="place-card__price-text">&#47;&nbsp;night</span>
					</div>
					<button className={`place-card__bookmark-button button ${card.isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
						<svg className="place-card__bookmark-icon" width="18" height="19">
							<use xlinkHref="#icon-bookmark"></use>
						</svg>
						<span className="visually-hidden">In bookmarks</span>
					</button>
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{width: `${card.rating * 20}%`}}></span>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<Link to={href}>{card.title}</Link>
				</h2>
				<p className="place-card__type">{card.type}</p>
			</div>
		</article>
	);
}

export default FavoriteCard;
