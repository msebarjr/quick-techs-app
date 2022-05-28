import { Pressable, View, Text } from "react-native";

// Styles
import styles from "../../styles/styles";

function CustomDisabledButton({
    children,
    disabled,
    remove,
    transparent,
    style,
}) {
    return (
        <View style={style}>
            <Pressable disabled={true}>
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

export default CustomDisabledButton;
