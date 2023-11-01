import {createAction} from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';

export const selectCity = createAction<string>('selectCity');
export const getOffers = createAction('getOffers');
export const getReviews = createAction('getReviews');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
