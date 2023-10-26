import Card from "../card/card";
import { CardProps } from "../../types/card";
import Map from "../map/map";
import { JSX } from "react/jsx-runtime";
import { SortingOptions } from "../../const";
import { useState } from "react";
import { sortByOptions} from "../../utils/utils";
import Sorting from "../sorting/sorting";

type CardListProps = {
    offersSorted: Record<string, CardProps[]>;
	selectedCity: string;
	currentCity: string | null;
	handleMouseEnter: (cardId: string) => void;
	handleMouseLeave: () => void;
}

function CardList({handleMouseEnter, handleMouseLeave, selectedCity, offersSorted, currentCity}: CardListProps): JSX.Element { 
	const [currentList, setCurrentList] = useState(SortingOptions.Popular);
	const sortedList = sortByOptions[currentList](offersSorted[selectedCity]);
	 
    return (
        <div className="cities__places-container container">
			<section className="cities__places places">
				<h2 className="visually-hidden">Places</h2>
				<b className="places__found">{offersSorted[selectedCity].length} places to stay in {selectedCity}</b>
				<Sorting currentList={currentList} onChange={setCurrentList}/>
				<div className="cities__places-list places__list tabs__content">
					{sortedList.map((card) => <Card
					card={card}
					key={card.id}
					onMouseEnter={() => handleMouseEnter(card.id)}
					onMouseLeave={handleMouseLeave}
					/>)}
				</div>
			</section>
			<div className="cities__right-section">
			<Map
				city={offersSorted[selectedCity][0]}
				points={offersSorted[selectedCity]}
				selectedPoint={currentCity}
				isMainPage
			/>
			</div>
		</div>
    );
}

export default CardList;