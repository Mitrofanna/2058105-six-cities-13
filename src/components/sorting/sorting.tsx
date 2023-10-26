import { useState } from "react";
import classNames from "classnames";
import { SortingOptions } from "../../const";

type SortingType = keyof typeof SortingOptions;

type SortingProps = {
    currentList: SortingType;
    onChange: (sortedList: SortingType) => void;
}

function Sorting({currentList, onChange} : SortingProps): JSX.Element {
    const [active, setActive] = useState(false);

	function onChangeSorting(type: SortingType) {
		onChange(type);
		setActive(false);
	}

    return (
        <form 
        className="places__sorting" 
        action="#" 
        method="get"
        onClick={() => setActive(!active)}
        >
            <span className="places__sorting-caption">Sort by</span>{' '}
            <span className="places__sorting-type" tabIndex={0}>
            {SortingOptions[currentList]}
                <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                </svg>
            </span>
            <ul className={
                classNames("places__options places__options--custom",
                {"places__options--opened": active})
            } >
                {(Object.entries(SortingOptions)).map(([type, label]) => (
                    <li
                    key={type}
                    className={classNames('places__option', {
                        'places__option--active': currentList === type,
                    })}
                    tabIndex={0}
                    onClick={() => onChangeSorting(type as SortingType)}
                >
                    {label}
                </li>
                ))}
            </ul>
		</form>
    )
}

export default Sorting;