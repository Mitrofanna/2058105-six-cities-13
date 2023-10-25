import { CITIES } from "../../const";
import { selectCity } from '../../store/action';
import { useAppDispatch, useAppSelector } from '../../hooks/use-state';

function Locations(): JSX.Element {
    const selectedCity = useAppSelector((state) => state.selectedCity);
	const dispatch = useAppDispatch();

    return (
        <ul className="locations__list tabs__list">
            {CITIES.map((city) => (
                <li key={city} className="locations__item">
                    <a className={`locations__item-link tabs__item ${city === selectedCity ? 'tabs__item--active' : ''}`}
                        onClick={() => {dispatch(selectCity(city));
                    }}
                    >
                        <span>{city}</span>
                    </a>
                </li>
            ))}  
        </ul>
    )
}

export default Locations;