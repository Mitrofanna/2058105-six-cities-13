import {createAction} from '@reduxjs/toolkit';

export const selectCity = createAction<string>('selectCity');
export const getOffers = createAction('getOffers');