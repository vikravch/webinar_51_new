import React from 'react';
import {useAppDispatch} from "../../../app/hooks";
import {setIsPrivacyPolicyConfirmed} from "../../auth/redux/LoginSlice";

function ConfirmCheckbox() {
    const dispatch = useAppDispatch();
    return (
        <div className="row mb-3">
            <div className="col-sm-10 offset-sm-2">
                <div className="form-check">
                    <input className="form-check-input"
                           type="checkbox"
                           id="gridCheck1"
                           onChange={(event)=>{
                               dispatch(setIsPrivacyPolicyConfirmed(event.target.checked));
                           }}
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                        Example checkbox
                    </label>
                </div>
            </div>
        </div>
    );
}

export default ConfirmCheckbox;