// Components
import Input from "../UI/Input";
import KeyboardAvoidingComponent from "../KeyboardAvoidingComponent";

function LoginForm() {
    return (
        <KeyboardAvoidingComponent>
            <Input
                config={{
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: false,
                    keyboardType: "email-address",
                    placeholder: "Email",
                }}
                // value={enteredEmail}
                // isInvalid={emailIsInvalid}
                // onUpdateValue={emailInputHandler}
            />
            <Input
                config={{
                    autoCapitalize: "none",
                    autoComplete: "off",
                    autoCorrect: false,
                    placeholder: "Password",
                    secureTextEntry: true,
                }}
                // value={enteredPassword}
                // isInvalid={passwordIsInvalid}
                // onUpdateValue={passwordInputHandler}
            />
        </KeyboardAvoidingComponent>
    );
}

export default LoginForm;
