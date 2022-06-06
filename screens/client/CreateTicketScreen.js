import { ScrollView, Text, FlatList } from "react-native";
import { useRoute } from "@react-navigation/native";

// Components
import BackgroundImage from "../../components/BackgroundImage";
import TicketForm from "../../components/Forms/TicketForm";

// Styles
import styles from "../../styles/styles";

// function Header() {
//     const route = useRoute();
//     const { job } = route.params;
//     return (
//         <View>
//             <BackgroundImage source={job.source} />
//             <Text style={styles.jobTitle}>{job.title}</Text>
//         </View>
//     );
// }

function CreateTicketScreen() {
    const route = useRoute();
    const { job } = route.params;

    return (
        <ScrollView>
            <BackgroundImage source={job.source} />
            <Text style={styles.jobTitle}>{job.title}</Text>
            <TicketForm />
        </ScrollView>
    );
}

export default CreateTicketScreen;
