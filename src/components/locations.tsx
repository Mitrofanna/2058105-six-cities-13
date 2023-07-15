import { CITIES } from "../const";
//type LocationProps = ['Paris' | 'Cologne' | 'Brussels' | 'Amsterdam' | 'Hamburg' | 'Dusseldorf']

function Locations () : JSX.Element {
	return (
	    <div className="tabs">
					<section className="locations container">
						<ul className="locations__list tabs__list">
							{CITIES.map((name) => (

							<li key={name} className="locations__item">
								<a className={`locations__item-link tabs__item ${name === 'Amsterdam' ? 'tabs__item--active' : ''}`} href="#">
									<span>{name}</span>
								</a>
							</li>
							))}
							
						</ul>
					</section>
				</div>
	);
}

export default Locations;