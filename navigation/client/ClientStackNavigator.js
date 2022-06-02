import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import ClientHomeScreen from "../../screens/client/ClientHomeScreen";
import ClientProjectsScreen from "../../screens/client/ClientProjectsScreen";
import ClientSearchScreen from "../../screens/client/ClientSearchScreen";
import CreateTicketScreen from "../../screens/client/CreateTicketScreen";
import SearchBarScreen from "../../screens/client/SearchBarScreen";

// Styles
import GlobalStyles from "../../styles/globals";

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
            <Stack.Screen
                name="SearchBarScreen"
                component={SearchBarScreen}
                options={{
                    headerShown: true,
                    headerTitle: "Search Technician",
                    headerStyle: {
                        backgroundColor: GlobalStyles.colors.primary,
                    },
                    headerTintColor: "white",
                }}
            />
            <Stack.Screen
                name="CreateTicket"
                component={CreateTicketScreen}
                options={{
                    headerShown: true,
                    headerTitle: "Create Ticket",
                    headerStyle: {
                        backgroundColor: GlobalStyles.colors.primary,
                    },
                    headerTintColor: "white",
                }}
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
