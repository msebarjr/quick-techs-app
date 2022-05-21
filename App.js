import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";

// Components
import LoginScreen from "./screens/LoginScreen";

// External StyleSheet
import styles from "./styles/styles";

export default function App() {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <StatusBar style="auto" />
            <LoginScreen />
        </SafeAreaView>
    );
}
