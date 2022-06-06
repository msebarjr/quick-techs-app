import { ScrollView, Text, View } from "react-native";

// Components
import BackgroundImage from "../../components/BackgroundImage";
import TicketForm from "../../components/Forms/TicketForm";

// Styles
import styles from "../../styles/styles";

function CreateTicketScreen({ navigation, route }) {
    const { job, formattedAddress, addressLatitude, addressLongitude } =
        route.params;

    function confirmTicketHandler() {
        navigation.navigate("ClientMapScreen", {
            job,
            addressLatitude,
            addressLongitude,
        });
    }

    return (
        <ScrollView>
            <BackgroundImage source={job.source} />
            <Text style={styles.jobTitle}>{job.title}</Text>
            <View style={{ width: "90%", alignSelf: "center" }}>
                <Text style={styles.centerText}>{formattedAddress}</Text>
            </View>
            <TicketForm onPress={confirmTicketHandler} />
        </ScrollView>
    );
}

export default CreateTicketScreen;
