import { useState } from "react";
import { View } from "react-native";

// Components
import CustomButton from "../components/UI/CustomButton";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import Logo from "../components/Logo";
import SignupForm from "../components/Forms/SignupForm";

// Utils
import { createUser } from "../utils/auth";

// Styles
import styles from "../styles/styles";

function SignupScreen({ navigation }) {
    // const [isAuthenticating, setIsAuthenticating] = useState(false);

    // // Since createUser returns a Promise, async await here as well to have ability to add Loading Overlay
    // async function signupHandler({ email, password }) {
    //     setIsAuthenticating(true); // True since user will be authenticating
    //     await createUser(email, password);
    //     setIsAuthenticating(false); // False since user is created and no longer being authenticated
    // }

    // if (isAuthenticating) {
    //     return <LoadingOverlay message="Creating Account..." />;
    // }

    function loginHandler() {
        navigation.replace("Login");
    }

    function createAccountHandler() {
        navigation.navigate("Create Profile");
    }

    return (
        // <AuthContent onAuthenticate={signupHandler} />;
        <View style={styles.flexContainer}>
            <Logo />

            {/* <AuthForm
                isLogin={isLogin}
                onSubmit={submitHandler}
                credentialsInvalid={credentialsInvalid}
            /> */}
            <SignupForm />
            <CustomButton
                style={{ marginTop: 30 }}
                onPress={createAccountHandler}
            >
                Create Account
            </CustomButton>
            <CustomButton
                style={{ marginTop: 15 }}
                transparent
                onPress={loginHandler}
            >
                Login
            </CustomButton>
        </View>
    );
}

export default SignupScreen;
