import { View, Text, TextInput } from "react-native";
import styles from "../../styles/styles";

function Input({ config, isInvalid, onUpdateValue, value }) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, isInvalid && styles.inputInvalid]}
                {...config}
                onChangeText={onUpdateValue}
                value={value}
            />
        </View>
    );
}

export default Input;
