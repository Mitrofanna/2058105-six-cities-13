import { createReducer } from "@reduxjs/toolkit";
import { getOffers, getReviews, selectCity } from "./action";
import { CITIES } from "../const";
import cards from "../mocks/offer-mocks";
import { InitialState } from "../types/state";
import { reviews } from "../mocks/review-mocks";

const initialState: InitialState = {
    cards,
    selectedCity: CITIES[0],
    reviews: reviews
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
  });
  
  export {reducer};