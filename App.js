import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import LoadingOverlay from "./components/UI/LoadingOverlay";

// Navigation
import ClientTabNavigator from "./navigation/client/ClientTabNavigator";
import TechTabNavigator from "./navigation/tech/TechTabNavigator";

// Screens
import CreateProfileScreen from "./screens/CreateProfileScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";

// Styles
import GlobalStyles from "./styles/globals";
import styles from "./styles/styles";

// Utils
import { login } from "./redux/reducers/authSlice";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

function UnauthenticatedStack() {
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

function Navigation() {
    const { isAuthenticated } = useSelector((state) => state.auth);

    // const techProfile = isAuthenticated && profileType === "tech";
    // const clientProfile = isAuthenticated && profileType === "client";

    return (
        <NavigationContainer>
            {!isAuthenticated && <UnauthenticatedStack />}
            {/* {techProfile && <TechTabNavigator />} */}
            {isAuthenticated && <ClientTabNavigator />}
        </NavigationContainer>
    );
}

function Root() {
    const [isTryingLogin, setIsTryingLogin] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchToken() {
            const storedToken = await AsyncStorage.getItem("token");
            if (storedToken) dispatch(login(storedToken));
            setIsTryingLogin(false);
        }

        fetchToken();
    }, []);

    if (isTryingLogin) return <LoadingOverlay message="Loggin in..." />;

    return <Navigation />;
}

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.rootContainer}>
                <StatusBar style="auto" />
                <Root />
            </View>
        </Provider>
    );
}
