import {
    Text,
    View,
    Image,
    TextInput,
    useWindowDimensions,
} from "react-native";

//Components
import Button from "../UI/Button";
import LoginForm from "../components/LoginForm";

// Styles
import styles from "../styles/styles";

const LoginScreen = () => {
    const { width } = useWindowDimensions();

    return (
        <View style={styles.subContainer}>
            <Image
                source={require("../assets/images/logo_transparent.png")}
                style={[
                    {
                        width: width / 1.5,
                        height: width / 1.5,
                    },
                    styles.logo,
                ]}
            />

            <Text style={[, styles.centerText, styles.heading]}>Login</Text>
            <LoginForm />
            <Button style={{ marginTop: 30 }}>Login</Button>
            <View style={styles.textWrapper}>
                <Text style={styles.centerText}>Sign in as Client</Text>
                <Text style={styles.centerText}>Sign in as Technician</Text>
            </View>
        </View>
    );
};

export default LoginScreen;
