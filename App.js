import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

// Components
import CreateProfileScreen from "./screens/CreateProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

// External StyleSheet
import styles from "./styles/styles";
import GlobalStyles from "./styles/globals";

const Stack = createNativeStackNavigator();

// Stack for unauthenticated users
function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                animation: "slide_from_right",
            }}
        >
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Create Profile"
                component={CreateProfileScreen}
                options={{
                    headerStyle: {
                        backgroundColor: GlobalStyles.colors.primary,
                    },
                    headerTintColor: "white",
                }}
            />
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
