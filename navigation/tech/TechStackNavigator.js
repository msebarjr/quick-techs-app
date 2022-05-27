import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import TechHomeScreen from "../../screens/tech/TechHomeScreen";
import TechOrdersScreen from "../../screens/tech/TechOrdersScreen";
import TechProfileScreen from "../../screens/tech/TechProfileScreen";

const Stack = createNativeStackNavigator();

const screenOptionStyles = {
    animation: "slide_from_right",
    headerShown: false,
};

function TechStackNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles}>
            <Stack.Screen name="TechHomeScreen" component={TechHomeScreen} />
        </Stack.Navigator>
    );
}

function TechOrdersNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles}>
            <Stack.Screen
                name="TechOrdersScreen"
                component={TechOrdersScreen}
            />
        </Stack.Navigator>
    );
}

function TechProfileNavigator() {
    return (
        <Stack.Navigator screenOptions={screenOptionStyles}>
            <Stack.Screen
                name="TechProfileScreen"
                component={TechProfileScreen}
            />
        </Stack.Navigator>
    );
}

export { TechStackNavigator, TechOrdersNavigator, TechProfileNavigator };
