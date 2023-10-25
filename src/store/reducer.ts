import { createReducer } from "@reduxjs/toolkit";
import {selectCity} from './action';
import { getOffers } from "./action";
import { CITIES } from "../const";
import cards from "../mocks/offer-mocks";
import { InitialState } from "../types/state";

const initialState: InitialState = {
    selectedCity: CITIES[0],
    cards: cards
};

const reducer = createReducer(initialState, (builder) => {
    builder
      .addCase(selectCity, (state, action) => {
        state.selectedCity = action.payload;
      })
      .addCase(getOffers, (state) => {
        state.cards = cards;
      });
  });
  
  export {reducer};