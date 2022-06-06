import { View, TextInput } from "react-native";

// Styles
import styles from "../../styles/styles";

function Input({ config, isInvalid, onUpdateValue, value, style, children }) {
    return (
        <View
            style={[
                styles.inputContainer,
                isInvalid && styles.inputInvalid,
                style,
            ]}
        >
            <TextInput
                style={styles.input}
                {...config}
                onChangeText={onUpdateValue}
                placeholderTextColor={isInvalid && "rgba(198, 40, 40, 1)"}
                value={value}
            />
            {children}
        </View>
    );
}

export default Input;
