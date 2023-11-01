import { createReducer } from "@reduxjs/toolkit";
import { getOffers, getReviews, selectCity, requireAuthorization } from "./action";
import { AuthorizationStatus, CITIES } from "../const";
import cards from "../mocks/offer-mocks";
import { reviews } from "../mocks/review-mocks";

const initialState = {
    cards,
    selectedCity: CITIES[0] as string,
    reviews: reviews,
    authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
    builder
    .addCase(getOffers, (state) => {
      state.cards = cards;
    })
    .addCase(selectCity, (state, action) => {
      state.selectedCity = action.payload;
    })
    .addCase(getReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
  });
  
  export {reducer};