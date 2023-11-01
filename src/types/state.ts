import { Cards } from "./card";
import { store } from '../store/index.ts';
import { Reviews} from "./review.ts";
import { AuthorizationStatus } from "../const.ts";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialState = {
	cards: Cards | undefined;
	selectedCity: string;
	reviews: Reviews | undefined;
	authorizationStatus: AuthorizationStatus;
	error: string | null;
};