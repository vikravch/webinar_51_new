import React, {SyntheticEvent} from 'react';
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {RootState, store} from "../../../app/store";
import {asyncLoginAction} from "../../auth/redux/asyncActions";

function LoginButtons() {
    const dispatch = useAppDispatch()
    const {isDisabled,login,password,isPrivacyPolicyConfirmed} =
        useAppSelector((store: RootState) => store.login);

    const loginClickHandler = (event: SyntheticEvent) => {
        event.preventDefault();
      dispatch(asyncLoginAction({login, password,
          isPrivacyConfirmed:isPrivacyPolicyConfirmed}));
    }

    return (
        <>
            <button
                className="btn btn-primary"
                disabled={isDisabled}
                onClick={ loginClickHandler }
            >
                Sign in
            </button>
        </>
    );
}

export default LoginButtons;