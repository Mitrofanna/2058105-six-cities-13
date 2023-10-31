import { useAppSelector } from "../../hooks/use-state";
import { FormReview } from "../form-review/form-review";
import Review from "../review/review";

function ReviewList(): JSX.Element {
	const reviews = useAppSelector((state) => state.reviews);
	const unsortedReviews = reviews.map((review) => <Review review={review} />).slice(0, 10);

    return (
        <section className="offer__reviews reviews">
			<h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
			<ul className="reviews__list">
				{unsortedReviews}					
			</ul>
			<FormReview />
		</section>
    )
}

export default ReviewList;