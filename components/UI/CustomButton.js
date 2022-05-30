import { Pressable, View, Text } from "react-native";

// Styles
import styles from "../../styles/styles";

function CustomButton({
    children,
    onPress,
    disabled,
    disableStyle,
    remove,
    transparent,
    style,
}) {
    return (
        <View style={style}>
            <Pressable
                disabled={disabled}
                onPress={onPress}
                style={({ pressed }) => pressed && styles.iosPressed}
                android_ripple
            >
                <View
                    style={[
                        styles.button,
                        disableStyle && styles.disabled,
                        remove && styles.remove,
                        transparent && styles.transparent,
                    ]}
                >
                    <Text
                        style={[
                            styles.buttonText,
                            disableStyle && styles.disabledText,
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

export default CustomButton;
