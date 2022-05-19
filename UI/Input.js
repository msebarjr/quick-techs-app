import { View, Text, TextInput } from "react-native";
import styles from "../styles/styles";

function Input({ config }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} {...config} />
        </View>
    );
}

export default Input;
