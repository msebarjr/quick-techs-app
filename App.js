import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

// Components
import LoginScreen from "./screens/LoginScreen";

// External StyleSheet
import styles from "./styles/styles";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <LoginScreen />
        </View>
    );
}
