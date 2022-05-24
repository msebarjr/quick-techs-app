import { useState } from "react";
import { Text, useWindowDimensions, View } from "react-native";

// Components
import CustomButton from "../components/UI/CustomButton";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import Logo from "../components/Logo";

// Utils
import { loginUser } from "../utils/auth";

// Styles
import styles from "../styles/styles";
import LoginForm from "../components/Forms/LoginForm";

function LoginScreen({ navigation }) {
    // const [isAuthenticating, setIsAuthenticating] = useState(false);

    // // Since createUser returns a Promise, async await here as well to have ability to add Loading Overlay
    // async function loginHandler({ email, password }) {
    //     setIsAuthenticating(true); // True since user will be authenticating
    //     await loginUser(email, password);
    //     setIsAuthenticating(false); // False since user is created and no longer being authenticated
    // }

    // if (isAuthenticating) {
    //     return <LoadingOverlay message="Logging In..." />;
    // }

    const { height } = useWindowDimensions;
    let marginTop = 40;

    if (height > 700) marginTop = 80;

    function createAccountHandler() {
        navigation.replace("Signup");
    }

    return (
        // <AuthContent isLogin onAuthenticate={loginHandler} />;
        <View style={styles.flexContainer}>
            <Logo />

            {/* <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
            /> */}
            {/* <Text style={styles.heading}>Login</Text> */}
            <LoginForm />
            <CustomButton style={{ marginTop: 30 }}>Login</CustomButton>
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
        </View>
    );
}

export default LoginScreen;
