import { useState } from "react";
import { View } from "react-native";

// Components
import CustomButton from "../UI/CustomButton";
import Input from "../UI/Input";

function LoginForm({ onSubmit, credentialsInvalid }) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const { emailInvalid, passwordInvalid } = credentialsInvalid;

    function emailInputHandler(enteredValue) {
        setEnteredEmail(enteredValue);
    }

    function passwordInputHandler(enteredValue) {
        setEnteredPassword(enteredValue);
    }

    function loginHandler() {
        onSubmit({
            email: enteredEmail,
            password: enteredPassword,
        });
    }

    return (
        <View>
            <Input
                config={{
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: false,
                    keyboardType: "email-address",
                    placeholder: "Email",
                }}
                value={enteredEmail}
                isInvalid={emailInvalid}
                onUpdateValue={emailInputHandler}
            />
            <Input
                config={{
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: false,
                    placeholder: "Password",
                    secureTextEntry: true,
                }}
                value={enteredPassword}
                isInvalid={passwordInvalid}
                onUpdateValue={passwordInputHandler}
            />
            <CustomButton style={{ marginTop: 30 }} onPress={loginHandler}>
                Login
            </CustomButton>
        </View>
    );
}

export default LoginForm;
