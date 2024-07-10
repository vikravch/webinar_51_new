import {createAsyncThunk} from "@reduxjs/toolkit";

type LoginData = {
    login:string,
    password: string,
    isPrivacyConfirmed: boolean
}

type LoginResult = 'failed' | 'access_denied' |
    'not_confirmed_privacy' | string;

export const asyncLoginAction =
    createAsyncThunk<LoginResult, LoginData>('weather/fetchWeather',
    ({login, password,isPrivacyConfirmed}) => {
        if (!isPrivacyConfirmed) throw 'not_confirmed_privacy';

        if (login === 'user@gmail.com' && password === '1234567890'){
            return '12345test';
        }
        throw 'access_denied';
    })