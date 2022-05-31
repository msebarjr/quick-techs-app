import { View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

// Components
import IconButton from "../UI/IconButton";
import ProfileImage from "../ProfileImage";

// Styles
import styles from "../../styles/styles";

// Utils
import { logout } from "../../redux/reducers/authSlice";

function ClientGreeting() {
    const dispatch = useDispatch();
    const { name } = useSelector((state) => state.user);

    function logoutHandler() {
        dispatch(logout());
    }

    return (
        <View style={styles.clientGreeting}>
            <ProfileImage style={{ width: 60, height: 60 }} />

            <View style={styles.clientWelcomeText}>
                <Text style={{ fontSize: 16 }}>Welcome, </Text>
                <Text style={styles.clientName}>Michael</Text>
            </View>
            <View style={styles.flexCenter}>
                <IconButton
                    icon="exit"
                    color="black"
                    size={24}
                    onPress={logoutHandler}
                />
                <Text>Logout</Text>
            </View>
        </View>
    );
}

export default ClientGreeting;
