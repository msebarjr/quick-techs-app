import { View, Text, ActivityIndicator } from "react-native";

// Styles
import styles from "../../styles/styles";

function LoadingOverlay({ message }) {
    return (
        <View style={[styles.flexContainer, { alignItems: "center" }]}>
            <Text style={styles.message}>{message}</Text>
            <ActivityIndicator size="large" />
        </View>
    );
}

export default LoadingOverlay;
