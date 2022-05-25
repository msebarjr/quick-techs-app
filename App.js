import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./redux/store";

// Components
import CreateProfileScreen from "./screens/CreateProfileScreen";
import IconButton from "./components/UI/IconButton";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import TechHomeScreen from "./screens/tech/TechHomeScreen";

// External StyleSheet
import styles from "./styles/styles";
import GlobalStyles from "./styles/globals";

// Utils
import { logout } from "./redux/reducers/authSlice";

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
    const dispatch = useDispatch();

    return (
        <Stack.Navigator
            screenOptions={{
                animation: "slide_from_right",
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary,
                },
                headerTintColor: "white",
            }}
        >
            <Stack.Screen
                name="TechHome"
                component={TechHomeScreen}
                options={{
                    title: "Welcome",
                    headerRight: ({ tintColor }) => (
                        <IconButton
                            icon="exit"
                            color={tintColor}
                            size={24}
                            onPress={() => dispatch(logout())}
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}

function Navigation() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return (
        <NavigationContainer>
            {isAuthenticated && <AuthenticatedStack />}
            {!isAuthenticated && <AuthStack />}
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.rootContainer}>
                <StatusBar style="auto" />
                <Navigation />
            </View>
        </Provider>
    );
}
