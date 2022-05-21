import { Pressable, View, Text } from "react-native";

// Styles
import styles from "../styles/styles";

function Button({ children, onPress, disabled, remove, transparent, style }) {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.iosPressed}
                android_ripple
            >
                <View
                    style={[
                        styles.button,
                        disabled && styles.disabled,
                        remove && styles.remove,
                        transparent && styles.transparent,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            disabled && styles.disabledText,
                            transparent && styles.transparentText,
                        ]}
                    >
                        {children}
                    </Text>
                </View>
            </Pressable>
        </View>
    );
}

export default Button;
