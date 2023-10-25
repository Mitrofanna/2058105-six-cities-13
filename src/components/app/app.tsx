import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import {AppRoute, AuthorizationStatus} from '../../const';
import PrivateRoute from '../private-route/private-route';
import MainPage from '../../pages/main-page/main-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { CardProps} from '../../types/card';
import { ReviewProps } from '../../types/review';
import { reviews } from '../../mocks/review-mocks';


type AppOfferProps = {
	cards: CardProps[];
	reviews: ReviewProps[];
}

function App({cards}: AppOfferProps): JSX.Element {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<Routes>
					<Route path={AppRoute.Main} element={<MainPage />} />
					<Route path={AppRoute.Login} element={<LoginPage />} />
					<Route path={AppRoute.Offer} element={<OfferPage cards={cards} reviews={reviews}/>} />
					<Route path={AppRoute.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesPage cards={cards}/></PrivateRoute>} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
