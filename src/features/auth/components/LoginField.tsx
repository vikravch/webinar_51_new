import React from 'react';
import {useDispatch} from "react-redux";
import {useAppDispatch} from "../../../app/hooks";
import {changeLogin} from "../../../features/auth/redux/LoginSlice";

function LoginField() {

    const dispatch = useAppDispatch();

    return (
        <div className="row mb-3">
            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input type="email" className="form-control" id="inputEmail3"
                    onChange={(event)=>{
                        dispatch(changeLogin(event.target.value));
                    }}/>
            </div>
        </div>
    );
}

export default LoginField;