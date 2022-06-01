import { View, Text } from "react-native";
import { useSelector } from "react-redux";

// Components
import ProfileImage from "../../components/ProfileImage";
import TechNotifications from "../../components/Tech/TechNotifications";

// Styles
import styles from "../../styles/styles";

function TechHomeScreen() {
    const { name } = useSelector((state) => state.user);

    return (
        <View>
            <View style={styles.techHomeGreeting}>
                <ProfileImage style={{ width: 100, height: 100 }} />
                <View style={styles.techWelcomeText}>
                    <Text style={{ fontSize: 16 }}>Welcome, </Text>
                    <Text style={styles.techName}>{name}</Text>
                </View>
            </View>
            <TechNotifications />
        </View>
    );
}

export default TechHomeScreen;
