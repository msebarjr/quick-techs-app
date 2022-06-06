import { ScrollView, Text } from "react-native";

// Components
import BackgroundImage from "../../components/BackgroundImage";
import TicketForm from "../../components/Forms/TicketForm";

// Styles
import styles from "../../styles/styles";

function CreateTicketScreen({ route }) {
    const { job, formattedAddress } = route.params;

    return (
        <ScrollView>
            <BackgroundImage source={job.source} />
            <Text style={styles.jobTitle}>{job.title}</Text>
            <Text style={styles.centerText}>{formattedAddress}</Text>
            <TicketForm />
        </ScrollView>
    );
}

export default CreateTicketScreen;
