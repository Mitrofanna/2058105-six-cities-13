import { Cards } from "./card";
import { store } from '../store/index.ts';
import { ReviewProps } from "./review.ts";
import { AuthorizationStatus } from "../const.ts";

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type InitialState = {
	cards: Cards | undefined;
	selectedCity: string;
	reviews: ReviewProps[] | undefined;
	authorizationStatus: AuthorizationStatus;
};