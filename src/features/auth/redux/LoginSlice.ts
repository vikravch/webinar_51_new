import {createSlice} from "@reduxjs/toolkit";
import {asyncLoginAction} from "../../auth/redux/asyncActions";
import {loginFormValidator} from "../../auth/validators/loginFormValidator";

const initialState = {
    login: '',
    password: '',
    token: '',
    error: '',
    isPrivacyPolicyConfirmed: false,
    isDisabled: true,
}

const LoginSlice = createSlice(
    {
        initialState: initialState,
        name: 'login',
        reducers: {
            setIsPrivacyPolicyConfirmed: (state, action) =>{
                state.isPrivacyPolicyConfirmed = action.payload;
                state.isDisabled = !loginFormValidator(
                    state.login, state.password, state.isPrivacyPolicyConfirmed);
            },
            changeLogin: (state, action)=>{
                state.login = action.payload;
                state.isDisabled = !loginFormValidator(
                    state.login, state.password, state.isPrivacyPolicyConfirmed);
            },
            changePassword: (state, action)=>{
                state.password = action.payload;
                state.isDisabled = !loginFormValidator(
                    state.login, state.password, state.isPrivacyPolicyConfirmed);
            },
            setLoggedIn: (state, action) => {
                state.token = action.payload;
            },
            setLoginError: (state, action) => {
                state.error = action.payload;
            }
        },
        extraReducers: builder =>
            builder.addCase(asyncLoginAction.fulfilled,
                (state, action)=>{
                    state.token = action.payload;
            }).addCase(asyncLoginAction.rejected,
                (state, error)=>{
                    state.error = 'Error';
                })
    }
);

export const {changeLogin,
    changePassword,
    setLoggedIn,
    setLoginError,
    setIsPrivacyPolicyConfirmed
} = LoginSlice.actions;
export default LoginSlice.reducer;