import { View, Text, TextInput } from "react-native";
import styles from "../../styles/styles";

function Input({ config, isInvalid, onUpdateValue, value }) {
    return (
        <View style={[styles.inputContainer, isInvalid && styles.inputInvalid]}>
            <TextInput
                style={styles.input}
                {...config}
                onChangeText={onUpdateValue}
                placeholderTextColor={isInvalid && "white"}
                value={value}
            />
        </View>
    );
}

export default Input;
