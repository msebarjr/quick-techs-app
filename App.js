import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

// Components
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

// External StyleSheet
import styles from "./styles/styles";

const Stack = createNativeStackNavigator();

// Stack for unauthenticated users
function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
        </Stack.Navigator>
    );
}

// Stack for authenticated users
function AuthenticatedStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
        </Stack.Navigator>
    );
}

function Navigation() {
    return (
        <NavigationContainer>
            <AuthStack />
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <View style={styles.rootContainer}>
            <StatusBar style="auto" />
            <Navigation />
        </View>
    );
}
