import { View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

// Styles
import styles from "../../styles/styles";
import GlobalStyles from "../../styles/globals";

function TechNotifications() {
    return (
        <View style={styles.techNotifications}>
            <Entypo
                name="new"
                size={32}
                color={GlobalStyles.colors.errorText}
                style={{ marginRight: 16 }}
            />
            <Text style={styles.techNotificationsText}>
                1 New work order available
            </Text>
        </View>
    );
}

export default TechNotifications;
