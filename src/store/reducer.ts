import { createReducer } from "@reduxjs/toolkit";
import { getOffers, getReviews, selectCity, requireAuthorization, loadOffers } from "./action";
import { AuthorizationStatus, CITIES } from "../const";
import { InitialState } from "../types/state";

const initialState: InitialState = {
    cards: [],
    selectedCity: CITIES[0] as string,
    reviews: [],
    authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
    builder
    .addCase(getOffers, (state, action) => {
      state.cards = action.payload;
    })
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.cards = action.payload;
    })
  });
  
  export {reducer};