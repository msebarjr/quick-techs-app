import { useState } from "react";
import { View } from "react-native";

// Components
import CustomButton from "../UI/CustomButton";
import Input from "../UI/Input";

function SignupForm({ onSubmit, credentialsInvalid }) {
    const [enteredName, setEnteredName] = useState("");
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const { nameInvalid, emailInvalid, passwordInvalid } = credentialsInvalid;

    function nameInputHandler(enteredValue) {
        setEnteredName(enteredValue);
    }

    function emailInputHandler(enteredValue) {
        setEnteredEmail(enteredValue);
    }

    function passwordInputHandler(enteredValue) {
        setEnteredPassword(enteredValue);
    }

    function signupHandler() {
        onSubmit({
            name: enteredName,
            email: enteredEmail,
            password: enteredPassword,
        });
    }

    return (
        <View>
            <Input
                config={{
                    autoCapitalize: "words",
                    autoComplete: "off",
                    placeholder: "Name",
                }}
                value={enteredName}
                isInvalid={nameInvalid}
                onUpdateValue={nameInputHandler}
            />
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
            <CustomButton style={{ marginTop: 30 }} onPress={signupHandler}>
                Create Account
            </CustomButton>
        </View>
    );
}

export default SignupForm;
