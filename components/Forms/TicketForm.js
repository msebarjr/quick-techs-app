import { View, Text } from "react-native";
import KeyboardAvoidingComponent from "../KeyboardAvoidingComponent";

import GooglePlacesInput from "./GooglePlacesInput";

function TicketForm() {
    return (
        <KeyboardAvoidingComponent>
            <GooglePlacesInput />
        </KeyboardAvoidingComponent>
    );
}

export default TicketForm;
