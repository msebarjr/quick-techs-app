import { View, Text } from "react-native";

// Components
import Input from "../UI/Input";

import styles from "../styles/styles";

function LoginForm() {
    function emailChangeHandler() {}
    function passwordChangeHandler() {}

    return (
        <View style={styles.formWrapper}>
            <Input
                label="Email"
                config={{
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: false,
                    keyboardType: "email-address",
                    placeholder: "Email",
                    onChangeText: emailChangeHandler,
                }}
            />
            <Input
                label="Password"
                config={{
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: false,
                    placeholder: "Password",
                    onChangeText: passwordChangeHandler,
                }}
            />
        </View>
    );
}

export default LoginForm;
