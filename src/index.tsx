import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import cards from './mocks/offer-mocks';
import { reviews } from './mocks/review-mocks';
import { Provider } from 'react-redux';
import { store } from './store';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
		<App cards={cards} reviews={reviews}/>
		</Provider>
	</React.StrictMode>
);
