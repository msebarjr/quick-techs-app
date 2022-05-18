import { View, Text, TextInput } from "react-native";
import styles from "../styles/styles";

function Input({ label, config }) {
    return (
        <View style={styles.inputContainer}>
            {/* <Text style={styles.label}>{label}</Text> */}
            <TextInput style={styles.input} {...config} />
        </View>
    );
}

export default Input;
