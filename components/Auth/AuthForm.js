import { useState } from "react";
import { View } from "react-native";

// Components
import Button from "../UI/Button";
import Input from "../UI/Input";

function AuthForm({ isLogin, onSubmit, credentialsInvalid }) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");

    const {
        email: emailIsInvalid,
        password: passwordIsInvalid,
        confirmPassword: passwordsDontMatch,
    } = credentialsInvalid;

    function emailInputHandler(enteredValue) {
        setEnteredEmail(enteredValue);
    }

    function passwordInputHandler(enteredValue) {
        setEnteredPassword(enteredValue);
    }

    function confirmPasswordInputHandler(enteredValue) {
        setEnteredConfirmPassword(enteredValue);
    }

    function submitHandler() {
        onSubmit({
            email: enteredEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
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

            {!isLogin && (
                <Input
                    config={{
                        autoCapitalize: "none",
                        autoComplete: "off",
                        autoCorrect: false,
                        placeholder: "Confirm Password",
                        secureTextEntry: true,
                    }}
                    value={enteredConfirmPassword}
                    isInValid={passwordsDontMatch}
                    onUpdateValue={confirmPasswordInputHandler}
                />
            )}
            <Button onPress={submitHandler} style={{ marginTop: 30 }}>
                {isLogin ? "Login" : "Sign Up"}
            </Button>
        </View>
    );
}

export default AuthForm;
