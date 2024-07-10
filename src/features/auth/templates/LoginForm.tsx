import React from 'react';
import LoginField from "../../auth/components/LoginField";
import PasswordField from "../../auth/components/PasswordField";
import ConfirmCheckbox from "../../auth/components/ConfirmCheckbox";
import LoginButtons from "../../auth/components/LoginButtons";

function LoginForm() {
    return (
        <form>
            <LoginField/>
            <PasswordField/>
            <ConfirmCheckbox/>
            <LoginButtons/>
        </form>
    );
}

export default LoginForm;