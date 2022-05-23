import { useState } from "react";
import { Alert, View, Text, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Components
import KeyboardAvoidingComponent from "../KeyboardAvoidingComponent";
import Logo from "../Logo";

// Styles
import styles from "../../styles/styles";
import AuthForm from "./AuthForm";
import Button from "../UI/Button";
import { validateEmail, validatePassword } from "../../utils/validate";

function AuthContent({ isLogin, onAuthenticate }) {
    const { height } = useWindowDimensions();
    const navigation = useNavigation();
    let margin = 40;

    if (height > 700) margin = 80;

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        email: false,
        password: false,
    });

    function switchAuthModeHandler() {
        if (isLogin) navigation.replace("Signup");
        else navigation.replace("Login");
    }

    function submitHandler(credentials) {
        let { email, password } = credentials;      

        // Checks validity of inputs
        const emailIsValid = validateEmail(email);
        const passwordIsValid = validatePassword(password); // Firebase requires 6+ characters for password

        // Creates alert if any input is invalid
        if (!emailIsValid || !passwordIsValid) {
            Alert.alert("Invalid Input", "Please check your credentials!");
            setCredentialsInvalid({
                email: !emailIsValid,
                password: !passwordIsValid,
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
