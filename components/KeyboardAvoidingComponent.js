import { KeyboardAvoidingView } from "react-native";
import React from "react";

function KeyboardAvoidingComponent({ children, style }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={style}
        >
            {children}
        </KeyboardAvoidingView>
    );
}

export default KeyboardAvoidingComponent;
