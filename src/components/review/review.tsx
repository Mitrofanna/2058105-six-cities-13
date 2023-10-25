import { ReviewProps } from "../../types/review";
import Rating from "../rating/rating";
import { dateOptions } from '../../utils/utils';

type Reviewprops = {
    review: ReviewProps;
}

function Review({review}: Reviewprops): JSX.Element {
	const date = new Date(review.date);
	
	const formattedDate = (new Intl.DateTimeFormat('en-US', dateOptions).format(date));

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
				<time className="reviews__time" dateTime={formattedDate}>{formattedDate}</time>
			</div>
		</li>							
    );
}

export default Review;