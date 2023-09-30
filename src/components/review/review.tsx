import { ReviewProps } from "../../types/review";
import Rating from "../rating/rating";

type Reviewprops = {
    review: ReviewProps;
}

function Review({review}: Reviewprops): JSX.Element {
    return (
        <li className="reviews__item">
			<div className="reviews__user user">
				<div className="reviews__avatar-wrapper user__avatar-wrapper">
					<img className="reviews__avatar user__avatar" src={review.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
				</div>
				<span className="reviews__user-name">
					{review.name}
				</span>
			</div>
			<div className="reviews__info">
				<Rating rating={review.rating} />
				<p className="reviews__text">
					{review.comment}
				</p>
				<time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
			</div>
		</li>							
    );
}

export default Review;