import React from 'react';
import LoginForm from "../../auth/templates/LoginForm";

function LoginPage() {
    return (
        <div className={"container pt-4"}>
            <div className={"offset-3 col-6 card p-4"}>
                <LoginForm/>
            </div>
        </div>
    );
}

export default LoginPage;