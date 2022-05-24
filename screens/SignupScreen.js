import { useState } from "react";
import { Alert } from "react-native";

// Components
import CustomButton from "../components/UI/CustomButton";
import Logo from "../components/Logo";
import SignupForm from "../components/Forms/SignupForm";

// Styles
import styles from "../styles/styles";
import KeyboardAvoidingComponent from "../components/KeyboardAvoidingComponent";
import {
    validateName,
    validateEmail,
    validatePassword,
} from "../utils/validate";

function SignupScreen({ navigation }) {
    const [credentialsInvalid, setCredentialsInvalid] = useState({
        nameInvalid: false,
        emailInvalid: false,
        passwordInvalid: false,
    });

    function loginHandler() {
        navigation.replace("Login");
    }

    function submitCreateAccountHandler({ name, email, password }) {
        const nameIsValid = validateName(name);
        const emailIsValid = validateEmail(email);
        const passwordIsValid = validatePassword(password);

        if (!nameIsValid || !emailIsValid || !passwordIsValid) {
            Alert.alert(
                "Invalid Input",
                "Name can't be empy. Email must be valid. Password > 6 characters."
            );

            setCredentialsInvalid({
                nameInvalid: !nameIsValid,
                emailInvalid: !emailIsValid,
                passwordInvalid: !passwordIsValid,
            });

            return;
        }

        navigation.navigate("Create Profile", {
            email: email,
            password: password,
        });
    }

    return (
        // <AuthContent onAuthenticate={signupHandler} />;
        <KeyboardAvoidingComponent style={styles.flexContainer}>
            <Logo />

            <SignupForm
                onSubmit={submitCreateAccountHandler}
                credentialsInvalid={credentialsInvalid}
            />

            <CustomButton
                style={{ marginTop: 15 }}
                transparent
                onPress={loginHandler}
            >
                Login
            </CustomButton>
        </KeyboardAvoidingComponent>
    );
}

export default SignupScreen;
