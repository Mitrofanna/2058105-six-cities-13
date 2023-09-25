import Card from "../card/card";
import { CardProps } from "../card/type";

type NearCardListProps = {
    cards: CardProps[];
}

function NearCardList({cards}: NearCardListProps): JSX.Element {
    return (
        <div className="near-places__list places__list">
		{cards.map((card) => (
        <Card
        card={card}
        key={card.id}      
        />)).slice(0, 3)}
	</div>
    )
}

export default NearCardList;