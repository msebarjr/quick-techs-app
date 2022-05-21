import { View } from "react-native";

// Components
import Input from "./UI/Input";

function LoginForm() {
    function emailChangeHandler() {}
    function passwordChangeHandler() {}

    return (
        <View>
            <Input
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
                config={{
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: false,
                    placeholder: "Password",
                    secureTextEntry: true,
                    onChangeText: passwordChangeHandler,
                }}
            />
        </View>
    );
}

export default LoginForm;
