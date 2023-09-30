type RatingProps = {
    rating: number;
}

function Rating({rating}: RatingProps): JSX.Element {
    return (
        <div className="reviews__rating rating">
			<div className="reviews__stars rating__stars">
				<span style={{ width: `${Math.round(rating) * 20}%` }}></span>
				<span className="visually-hidden">Rating</span>
			</div>
		</div>
    )
}

export default Rating;