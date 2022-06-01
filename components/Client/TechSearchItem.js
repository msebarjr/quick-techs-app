import { Pressable, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import styles from "../../styles/styles";

function TechSearchItem({ service, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => pressed && styles.iosPressed}
            android_ripple
            onPress={onPress}
        >
            <View style={styles.jobItem}>
                <Text>{service}</Text>
                <MaterialIcons
                    name="arrow-forward-ios"
                    size={16}
                    color="black"
                />
            </View>
        </Pressable>
    );
}

export default TechSearchItem;
