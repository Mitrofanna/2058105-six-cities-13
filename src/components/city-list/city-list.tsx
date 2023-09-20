import { useState } from "react";
import { CITIES } from "../../const";

function CityList(): JSX.Element {


    const [selectedCity, setSelectedCity] = useState<string>(CITIES[0]);
    return (
        <section className="locations container">
						<ul className="locations__list tabs__list">
							{CITIES.map((city) => (
								<li key={city} className="locations__item">
									<a className={`locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`}
										onClick={() => setSelectedCity(city)} href={`#${city.toLocaleLowerCase()}`}
									>
										<span>{city}</span>
									</a>
								</li>
							))}
						</ul>
					</section>
    )
}

export default CityList;