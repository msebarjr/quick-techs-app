import { useState } from "react";
import { Alert, Text, useWindowDimensions, View } from "react-native";

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

function LoginScreen({ navigation }) {
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
        await loginUser(email, password);
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
