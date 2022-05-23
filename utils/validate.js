export function validateEmail(email) {
    return email.trim().includes("@");
}

export function validatePassword(password) {
    return password.trim().length > 6;
}

export function validateaName(name) {
    return name.trim().length > 0;
}
