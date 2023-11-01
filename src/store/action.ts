import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Cards } from '../types/card';
import { Reviews } from '../types/review';

export const selectCity = createAction<string>('selectCity');
export const getOffers = createAction<Cards>('getOffers');
export const getReviews = createAction<Reviews>('getReviews');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const loadOffers = createAction<Cards>('loadOffers');
export const setError = createAction<string | null>('setError');
