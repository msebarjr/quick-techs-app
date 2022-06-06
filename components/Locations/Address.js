import { Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Styles
import styles from "../../styles/styles";

function Address({ description, fetchDetails, place_id, job }) {
    const navigation = useNavigation();

    async function handlePress() {
        const res = await fetchDetails(place_id);

        console.log(res.geometry.location.lat, res.geometry.location.lng);

        let formattedAddress = res.formatted_address;
        let addressLatitude = res.geometry.location.lat;
        let addressLongitude = res.geometry.location.lng;

        navigation.navigate("CreateTicketScreen", {
            job,
            formattedAddress,
            addressLatitude,
            addressLongitude,
        });
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
