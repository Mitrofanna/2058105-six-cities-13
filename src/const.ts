const CITIES = [
	'Paris',
	'Cologne',
	'Brussels',
	'Amsterdam',
	'Hamburg',
	'Dusseldorf'
] as const;

const SortingOptions = {
	Popular: 'Popular',
	LowToHigh: 'Price: low to high',
	HighToLow: 'Price: high to low',
	TopRated: 'Top rated first',
} as const;

const AppRoute = {
	Main: '/',
	Login: '/login',
	Favorites: '/favorites',
	Offer: '/offer/:id',
} as const;

const enum AuthorizationStatus {
	Auth = 'AUTH',
	NoAuth = 'NO_AUTH',
	Unknown = 'UNKNOWN',
}

const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export {CITIES, SortingOptions, AppRoute, AuthorizationStatus, URL_MARKER_CURRENT, URL_MARKER_DEFAULT};
