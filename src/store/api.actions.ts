import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/state";
import { AxiosInstance } from "axios";
import { Cards } from "../types/card";
import { APIRoute, AuthorizationStatus } from "../const";
import { loadOffers, requireAuthorization } from "./action";
import { dropToken, saveToken } from "../services/token";
import { AuthData } from "../types/auth-data";
import { UserData } from "../types/user-data";

export const fetchCards = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}> (
    'loadOffers',
    async (_arg, { dispatch, extra: api }) => {
        const { data } = await api.get<Cards>(APIRoute.Cards);
        dispatch(loadOffers(data));
    },
);

export const checkAuthorization = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}> (
    'user/checkAuth',
    async (_arg, { dispatch, extra: api }) => {
        try {
            await api.get(APIRoute.Login);
            dispatch(requireAuthorization(AuthorizationStatus.Auth));
        } catch {
            dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
        }
    }
);

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance; 
}> (
    'user/login',
    async ({login: email, password}, {dispatch, extra: api}) => {
        const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
        saveToken(token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
    }
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance; 
}> (
    'user/logout',
    async (_arg, { dispatch, extra: api }) => {
        await api.delete(APIRoute.Logout);
        dropToken();
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
);