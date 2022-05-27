import { View, Text, ActivityIndicator } from "react-native";

// Styles
import styles from "../../styles/styles";

function LoadingOverlay({ message }) {
    return (
        <View style={[styles.flexContainer, { alignItems: "center" }]}>
            <ActivityIndicator size="large" />
            <Text style={styles.message}>{message}</Text>
        </View>
    );
}

export default LoadingOverlay;
