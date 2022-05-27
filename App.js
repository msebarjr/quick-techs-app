import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Provider, useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import IconButton from "./components/UI/IconButton";
import LoadingOverlay from "./components/UI/LoadingOverlay";

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
import TechTabNavigator from "./navigation/tech/TechTabNavigator";

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

// function TechStackNavigator() {
//     const dispatch = useDispatch();

//     return (
//         <Stack.Navigator
//             screenOptions={{
//                 animation: "slide_from_right",
//                 headerStyle: {
//                     backgroundColor: GlobalStyles.colors.primary,
//                 },
//                 headerTintColor: "white",
//                 headerRight: ({ tintColor }) => (
//                     <IconButton
//                         icon="exit"
//                         color={tintColor}
//                         size={24}
//                         onPress={() => dispatch(logout())}
//                     />
//                 ),
//             }}
//         >
//             <Stack.Screen
//                 name="TechHome"
//                 component={TechHomeScreen}
//                 options={{
//                     title: "Welcome",
//                 }}
//             />
//         </Stack.Navigator>
//     );
// }

function Navigation() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return (
        <NavigationContainer>
            {!isAuthenticated && <UnauthenticatedStack />}
            {isAuthenticated && <TechTabNavigator />}
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
                <StatusBar style="light" />
                <Root />
            </View>
        </Provider>
    );
}
