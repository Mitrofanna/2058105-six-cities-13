import Card from "../card/card";
import { useAppSelector } from "../../hooks/use-state";

function NearCardList(): JSX.Element {
    const cards = useAppSelector((state) => state.cards);

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