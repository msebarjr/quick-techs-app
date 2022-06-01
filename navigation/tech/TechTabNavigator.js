import { useDispatch } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";

// Navigators
import {
    TechStackNavigator,
    TechOrdersNavigator,
    TechProfileNavigator,
} from "./TechStackNavigator";

// Components
import IconButton from "../../components/UI/IconButton";

// Styles
import GlobalStyles from "../../styles/globals";

// Utils
import { logout } from "../../redux/reducers/authSlice";

const Tab = createBottomTabNavigator();

function TechTabNavigator() {
    const dispatch = useDispatch();

    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: GlobalStyles.colors.primary },
                headerTintColor: "white",
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary,
                    height: 55,
                    paddingBottom: 5,
                    paddingTop: 5,
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: GlobalStyles.colors.faded,
                headerRight: ({ tintColor }) => (
                    <IconButton
                        icon="exit"
                        color={tintColor}
                        size={24}
                        onPress={() => dispatch(logout())}
                        style={{ marginRight: 16, marginTop: 8 }}
                    />
                ),
            }}
        >
            <Tab.Screen
                name="TechHomeTab"
                component={TechStackNavigator}
                options={{
                    title: "Home",
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="TechOrdersTab"
                component={TechOrdersNavigator}
                options={{
                    title: "Orders",
                    tabBarLabel: "Orders",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="clipboard-text-search"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="TechProfileTab"
                component={TechProfileNavigator}
                options={{
                    title: "Profile",
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5
                            name="user-alt"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default TechTabNavigator;
