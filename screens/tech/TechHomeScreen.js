import { useEffect } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

// Components
import ProfileImage from "../../components/ProfileImage";
import TechNotifications from "../../components/Tech/TechNotifications";

// Styles
import styles from "../../styles/styles";

// Utils
// import { fetchTechProfile } from "../../utils/http";

function TechHomeScreen() {
    // const { token } = useSelector((state) => state.auth);

    // useEffect(() => {
    //     fetchTechProfile(token);
    // }, []);

    const { name } = useSelector((state) => state.tech);

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
