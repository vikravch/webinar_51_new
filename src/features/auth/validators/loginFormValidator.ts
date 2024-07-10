export function loginFormValidator(
    login: string,
    password: string,
    isPrivacyConfirmed: boolean,
): boolean {
    return isPrivacyConfirmed && isLogin(login.trim()) && isPassword(password.trim())
}

export function isLogin(login: string,):boolean {
    return login.length > 4 && login.length < 20;
}

export function isPassword(password: string,):boolean {
    return password.length > 7 && password.length < 16;
}
