import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { CardProps, FullCardProps } from '../card/type';


type AppOfferProps = {
	cards: CardProps[];
	fullCards: FullCardProps[];
}

function App({cards, fullCards}: AppOfferProps): JSX.Element {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoute.Main} element={<MainPage cards={cards} />} />
					<Route path={AppRoute.Login} element={<LoginPage />} />
					<Route path={AppRoute.Offer} element={<OfferPage fullCards={fullCards} cards={cards}/>} />
					<Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesPage cards={cards}/></PrivateRoute>} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
