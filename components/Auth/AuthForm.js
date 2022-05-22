import { useState } from "react";
import { View } from "react-native";

// Components
import Button from "../UI/Button";
import Input from "../UI/Input";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    // Desconstruct object and rename keys
    const { email: emailIsInvalid, password: passwordIsInvalid } =
        credentialsInvalid;

    function emailInputHandler(enteredValue) {
        setEnteredEmail(enteredValue);
    }

    function passwordInputHandler(enteredValue) {
        setEnteredPassword(enteredValue);
    }

    function submitHandler() {
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
                isInValid={emailIsInvalid}
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
                isInValid={passwordIsInvalid}
                onUpdateValue={passwordInputHandler}
            />
            <Button onPress={submitHandler} style={{ marginTop: 30 }}>
                {isLogin ? "Login" : "Sign Up"}
            </Button>
        </View>
    );
}

export default AuthForm;
