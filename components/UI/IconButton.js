import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Styles
import styles from "../../styles/styles";

function IconButton({ icon, color, size, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => [
                { marginRight: 16, marginTop: 8 },
                pressed && styles.iosPressed,
            ]}
            onPress={onPress}
        >
            <Ionicons name={icon} color={color} size={size} />
        </Pressable>
    );
}

export default IconButton;
