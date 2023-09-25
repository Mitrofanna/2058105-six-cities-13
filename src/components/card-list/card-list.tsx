import Card from "../card/card";
import { CardProps } from "../card/type";
import Map from "../map/map";
import { JSX } from "react/jsx-runtime";

type CardListProps = {
    offersSorted: Record<string, CardProps[]>;
	selectedCity: string;
	currentCity: string | null;
	handleMouseEnter: (cardId: string) => void;
	handleMouseLeave: () => void;
}

function CardList({handleMouseEnter, handleMouseLeave, selectedCity, offersSorted, currentCity}: CardListProps): JSX.Element {
    
    return (
        <div className="cities__places-container container">
						<section className="cities__places places">
							<h2 className="visually-hidden">Places</h2>
							<b className="places__found">{offersSorted[selectedCity].length} places to stay in {selectedCity}</b>
							<form className="places__sorting" action="#" method="get">
								<span className="places__sorting-caption">Sort by</span>{' '}
								<span className="places__sorting-type" tabIndex={0}>
									Popular
									<svg className="places__sorting-arrow" width="7" height="4">
										<use xlinkHref="#icon-arrow-select"></use>
									</svg>
								</span>
								<ul className="places__options places__options--custom places__options--opened">
									<li className="places__option places__option--active" tabIndex={0}>Popular</li>
									<li className="places__option" tabIndex={0}>Price: low to high</li>
									<li className="places__option" tabIndex={0}>Price: high to low</li>
									<li className="places__option" tabIndex={0}>Top rated first</li>
								</ul>
							</form>
							<div className="cities__places-list places__list tabs__content">
								{offersSorted[selectedCity].map((card) => <Card
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