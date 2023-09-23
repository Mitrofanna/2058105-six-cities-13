import { Link } from 'react-router-dom';
import { CardProps } from './type';
import { useState } from 'react';


function Card ({id, title, price, type, previewImage, isFavorite, isPremium, rating}: CardProps): JSX.Element {

	const href = `/offer/${id}`;

	const [activeCard, setActiveCard] = useState(id);

	function handleMouseEnter() {
		setActiveCard(activeCard);
		console.log(id);
	}


	return (
		<article className="cities__card place-card" onMouseEnter={handleMouseEnter} >
			{isPremium && <div className="place-card__mark"><span>Premium</span></div>}
			<div className="cities__image-wrapper place-card__image-wrapper">
				<Link to={href}>
					<img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
				</Link>
			</div>
			<div className="place-card__info">
				<div className="place-card__price-wrapper">
					<div className="place-card__price">
						<b className="place-card__price-value">&euro;{price}</b>
						<span className="place-card__price-text">&#47;&nbsp;night</span>
					</div>
					<button className={`place-card__bookmark-button button ${isFavorite ? 'place-card__bookmark-button--active' : ''}`} type="button">
						<svg className="place-card__bookmark-icon" width="18" height="19">
							<use xlinkHref="#icon-bookmark"></use>
						</svg>
						<span className="visually-hidden">To bookmarks</span>
					</button>
				</div>
				<div className="place-card__rating rating">
					<div className="place-card__stars rating__stars">
						<span style={{width: `${rating * 20}%`}}></span>
						<span className="visually-hidden">Rating</span>
					</div>
				</div>
				<h2 className="place-card__name">
					<Link to={href}>{title}</Link>
				</h2>
				<p className="place-card__type">{type}</p>
			</div>
		</article>
	);
}

export default Card;
