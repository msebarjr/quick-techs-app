import { Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Styles
import styles from "../../styles/styles";

function Address({ description, fetchDetails, place_id, job }) {
    const navigation = useNavigation();

    async function handlePress() {
        const res = await fetchDetails(place_id);

        console.log(res.formatted_address);

        const formattedAddress = res.formatted_address;

        navigation.navigate("CreateTicketScreen", { job, formattedAddress });
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
