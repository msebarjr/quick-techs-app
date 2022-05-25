import { useState } from "react";
import { Alert, Text, useWindowDimensions, View } from "react-native";
import { useDispatch } from "react-redux";

// Components
import CustomButton from "../components/UI/CustomButton";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import Logo from "../components/Logo";

// Utils
import { loginUser } from "../utils/auth";
import { validateEmail, validatePassword } from "../utils/validate";

// Styles
import styles from "../styles/styles";
import LoginForm from "../components/Forms/LoginForm";
import KeyboardAvoidingComponent from "../components/KeyboardAvoidingComponent";
import { authenticate } from "../redux/reducers/authSlice";

function LoginScreen({ navigation }) {
    const dispatch = useDispatch();

    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const { height } = useWindowDimensions;
    let marginTop = 40;

    if (height > 700) marginTop = 80;

    const [credentialsInvalid, setCredentialsInvalid] = useState({
        emailInvalid: false,
        passwordInvalid: false,
    });

    async function authenticateUser({ email, password }) {
        setIsAuthenticating(true);

        try {
            const token = await loginUser(email, password);
        } catch (error) {
            let errorMessage = "";

            if (error.response.data.error.message === "EMAIL_NOT_FOUND")
                errorMessage =
                    "There is no user record corresponding to this email";
            if (error.response.data.error.message === "INVALID_PASSWORD")
                errorMessage = "The password is invalid";
            if (error.response.data.error.message === "USER_DISABLED")
                errorMessage =
                    "The user account has been disabled by an administrator.";

            Alert.alert("Authentication failed!", errorMessage);
        }

        dispatch(authenticate(token));

        setIsAuthenticating(false);
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Logging in..." />;
    }

    function createAccountHandler() {
        navigation.replace("Signup");
    }

    function submitLoginHandler({ email, password }) {
        const emailIsValid = validateEmail(email);
        const passwordIsValid = validatePassword(password);

        if (!emailIsValid || !passwordIsValid) {
            Alert.alert(
                "Invalid Crendentials",
                "Please check your credentials"
            );

            setCredentialsInvalid({
                emailInvalid: !emailIsValid,
                passwordInvalid: !passwordIsValid,
            });

            return;
        }

        authenticateUser({ email, password });
    }

    return (
        <KeyboardAvoidingComponent style={styles.flexContainer}>
            <Logo />

            <LoginForm
                onSubmit={submitLoginHandler}
                credentialsInvalid={credentialsInvalid}
            />

            <CustomButton
                style={{ marginTop: 15 }}
                transparent
                onPress={createAccountHandler}
            >
                Create Account
            </CustomButton>
            <View style={{ marginTop: marginTop }}>
                <Text style={styles.centerText}>Sign in as Client</Text>
                <Text style={styles.centerText}>Sign in as Technician</Text>
            </View>
        </KeyboardAvoidingComponent>
    );
}

export default LoginScreen;
