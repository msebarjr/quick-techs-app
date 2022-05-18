import {
    Text,
    View,
    Image,
    TextInput,
    useWindowDimensions,
} from "react-native";
import LoginForm from "../components/LoginForm";
import styles from "../styles/styles";

const LoginScreen = () => {
    const { width } = useWindowDimensions();

    return (
        <View>
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
            <View style={styles.formContainer}>
                <Text style={styles.heading}>Login</Text>
                <LoginForm />
                <Text>Button</Text>
            </View>
            <Text>Sign in as Client</Text>
            <Text>Sign in as Technician</Text>
        </View>
    );
};

export default LoginScreen;
