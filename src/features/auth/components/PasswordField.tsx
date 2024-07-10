import React from 'react';
import {useAppDispatch} from "../../../app/hooks";
import {changePassword} from "../../auth/redux/LoginSlice";

function PasswordField() {

    const dispatch = useAppDispatch();

    return (
        <div className="row mb-3">
            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input type="password"
                       className="form-control"
                       id="inputPassword3"
                       onChange={(event)=>{
                           dispatch(changePassword(event.target.value))
                       }}/>
            </div>
        </div>
    );
}

export default PasswordField;