import { Alert, Text, Pressable } from "react-native";

// Styles
import styles from "../../styles/styles";

function Address({ description, fetchDetails, place_id }) {
    async function handlePress() {
        const res = await fetchDetails(place_id);

        Alert.alert(JSON.stringify(res));
    }
    return (
        <Pressable
            style={({ pressed }) => [
                styles.address,
                pressed && styles.iosPressed,
            ]}
            android_ripple
            onPress={handlePress}
        >
            <Text>{description}</Text>
        </Pressable>
    );
}

export default Address;
