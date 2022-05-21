import { useState } from "react";
import { Alert } from "react-native";
import KeyboardAvoidingComponent from "../KeyboardAvoidingComponent";
import Logo from "../Logo";

// Styles
import styles from "../../styles/styles";
import AuthForm from "./AuthForm";
import Button from "../UI/Button";

function AuthContent({ isLogin, onAuthenticate }) {
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
        confirmPassword: false,
    });

    function switchAuthModeHandler() {
        //Todo
    }

    function submitHandler(credentials) {
        let { email, password, confirmPassword } = credentials;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes("@");
        const passwordIsValid = password.length > 6;
        const passwordsAreEqual = password === confirmPassword;

        if (
            !emailIsValid ||
            !passwordIsValid ||
            (!isLogin && !passwordsAreEqual)
        ) {
            Alert.alert("Invalid Input", "Please check your credentials!");
            setCredentialsInvalid({
                email: !emailIsValid,
                password: !passwordIsValid,
                confirmPassword: !passwordIsValid || !passwordsAreEqual,
            });
            return;
        }

        onAuthenticate({ email, password });
    }

    return (
        <KeyboardAvoidingComponent style={styles.container}>
            <Logo />
            <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
            />
            <Button
                style={{ marginTop: 15 }}
                transparent
                onPress={switchAuthModeHandler}
            >
                {isLogin ? "Create Account" : "Login"}
            </Button>
        </KeyboardAvoidingComponent>
    );
}

export default AuthContent;
