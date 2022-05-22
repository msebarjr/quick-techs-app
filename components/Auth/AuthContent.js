import { useState } from "react";
import { Alert, View, Text, useWindowDimensions } from "react-native";

// Components
import KeyboardAvoidingComponent from "../KeyboardAvoidingComponent";
import Logo from "../Logo";

// Styles
import styles from "../../styles/styles";
import AuthForm from "./AuthForm";
import Button from "../UI/Button";

function AuthContent({ isLogin, onAuthenticate }) {
    const { height } = useWindowDimensions();
    let margin = 40;

    if (height > 700) margin = 100;

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

        // Removes all whitespaces from input
        email = email.trim();
        password = password.trim();

        // Checks validity of inputs
        const emailIsValid = email.includes("@");
        const passwordIsValid = password.length > 6; // Firebase requires 6+ characters for password
        const passwordsAreEqual = password === confirmPassword;

        // Creates alert if any input is invalid
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
            <View style={{ marginTop: margin }}>
                <Text style={styles.centerText}>Sign in as Client</Text>
                <Text style={styles.centerText}>Sign in as Technician</Text>
            </View>
        </KeyboardAvoidingComponent>
    );
}

export default AuthContent;
