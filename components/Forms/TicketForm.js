import { useState } from "react";

// Components
import Input from "../UI/Input";
import KeyboardAvoidingComponent from "../KeyboardAvoidingComponent";
import CustomButton from "../UI/CustomButton";

// Styles
import styles from "../../styles/styles";
import AddressSearchInput from "../Locations/AddressSearchInput";

function TicketForm() {
    const [enteredIssue, setEnteredIssue] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);

    function issueInputHandler(enteredValue) {
        setEnteredIssue(enteredValue);
    }

    return (
        <KeyboardAvoidingComponent style={{ paddingBottom: 30 }}>
            <AddressSearchInput />
            <Input
                config={{
                    autoCapitalize: "sentences",
                    autoComplete: "off",
                    autoCorrect: true,
                    keyboardType: "default",
                    placeholder: "Describe Issue",
                    multiline: true,
                    numberOfLines: 3,
                    textAlignVertical: "top",
                }}
                value={enteredIssue}
                onUpdateValue={issueInputHandler}
                style={[styles.center, { marginVertical: 50 }]}
            />
            <CustomButton style={[styles.center, { marginVertical: 25 }]}>
                Get Service
            </CustomButton>
        </KeyboardAvoidingComponent>
    );
}

export default TicketForm;
