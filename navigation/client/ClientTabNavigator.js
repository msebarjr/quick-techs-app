import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

// Navigators
import {
    ClientStackNavigator,
    ClientProjectsNavigator,
    ClientSearchNavigator,
} from "./ClientStackNavigator";

// Styles
import GlobalStyles from "../../styles/globals";

const Tab = createBottomTabNavigator();

function ClientTabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary,
                    height: 55,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: GlobalStyles.colors.faded,
            }}
        >
            <Tab.Screen
                name="ClientHomeTab"
                component={ClientStackNavigator}
                options={{
                    title: "Home",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ClientSearchTab"
                component={ClientSearchNavigator}
                options={{
                    title: "Search",
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="search" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="ClientProjectsTab"
                component={ClientProjectsNavigator}
                options={{
                    title: "Projects",
                    tabBarLabel: "Projects",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="clipboard-text-search"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default ClientTabNavigator;
