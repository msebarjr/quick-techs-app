import { ScrollView, View } from "react-native";

// Components
import SearchBarInput from "../../components/UI/SearchBarInput";
import TechSearchItem from "../../components/Client/TechSearchItem";

// Data
import { jobs } from "../../data/techJobsData";

// Styles
import styles from "../../styles/styles";

function SearchBarScreen({ navigation }) {
    function searchHandler() {}
    
    return (
        <View>
            <SearchBarInput style={styles.clientSearchWrapper}>
                Find Technician
            </SearchBarInput>
            <ScrollView>
                {jobs.map((job) => (
                    <TechSearchItem
                        key={job.id}
                        service={job.title}
                        onPress={searchHandler}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

export default SearchBarScreen;
