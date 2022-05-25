import { View, Text } from "react-native";
import ProfileImage from "../../components/ProfileImage";
import TechNotifications from "../../components/Tech/TechNotifications";
import styles from "../../styles/styles";

function TechHomeScreen() {
    return (
        <View>
            <View style={styles.techHomeGreeting}>
                <ProfileImage style={{ width: 100, height: 100 }} />
                <View style={styles.techWelcomeText}>
                    <Text style={{ fontSize: 16 }}>Welcome, </Text>
                    <Text style={styles.techName}>Michael</Text>
                </View>
            </View>
            <TechNotifications />
        </View>
    );
}

export default TechHomeScreen;
