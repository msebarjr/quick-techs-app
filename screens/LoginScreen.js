import { Text, View, Image, useWindowDimensions } from "react-native";

//Components
import Button from "../components/UI/Button";
import LoginForm from "../components/LoginForm";
import KeyboardAvoidingComponent from "../components/KeyboardAvoidingComponent";

// Styles
import styles from "../styles/styles";
import AuthContent from "../components/Auth/AuthContent";

function LoginScreen() {
    const { width } = useWindowDimensions();

    return (
        //     <KeyboardAvoidingComponent
        //         style={[styles.container, { marginBottom: 45 }]}
        //     >
        //         <Image
        //             source={require("../assets/images/logo_transparent.png")}
        //             style={[
        //                 {
        //                     width: width / 1.5,
        //                     height: width / 1.5,
        //                 },
        //                 styles.logo,
        //             ]}
        //         />
        //         <LoginForm />
        //         <View style={{ marginTop: 40 }}>
        //             <Button>Login</Button>
        //             <Button transparent style={{ marginTop: 15 }}>
        //                 Create Account
        //             </Button>
        //         </View>
        //         <View style={styles.textWrapper}>
        //             <Text style={styles.centerText}>Sign in as Client</Text>
        //             <Text style={styles.centerText}>Sign in as Technician</Text>
        //         </View>
        //     </KeyboardAvoidingComponent>

        <AuthContent isLogin />
    );
}

export default LoginScreen;
