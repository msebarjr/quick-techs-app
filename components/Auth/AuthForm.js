import { useState } from "react";
import { View } from "react-native";

// Components
import CustomButton from "../UI/CustomButton";
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
                isInvalid={emailIsInvalid}
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
                isInvalid={passwordIsInvalid}
                onUpdateValue={passwordInputHandler}
            />
            <CustomButton onPress={submitHandler} style={{ marginTop: 30 }}>
                {isLogin ? "Login" : "Sign Up"}
            </CustomButton>
        </View>
    );
}

export default AuthForm;
