import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import ClientHomeScreen from "../../screens/client/ClientHomeScreen";
import ClientProjectsScreen from "../../screens/client/ClientProjectsScreen";
import ClientSearchScreen from "../../screens/client/ClientSearchScreen";

const Stack = createNativeStackNavigator();

const screenOptionStyles = {
    animation: "slide_from_right",
    headerShown: false,
};

function ClientStackNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles}>
            <Stack.Screen
                name="ClientHomeScreen"
                component={ClientHomeScreen}
            />
        </Stack.Navigator>
    );
}

function ClientSearchNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles}>
            <Stack.Screen
                name="ClientSearchScreen"
                component={ClientSearchScreen}
            />
        </Stack.Navigator>
    );
}

function ClientProjectsNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles}>
            <Stack.Screen
                name="ClientProjectsScreen"
                component={ClientProjectsScreen}
            />
        </Stack.Navigator>
    );
}

export { ClientStackNavigator, ClientSearchNavigator, ClientProjectsNavigator };
