import { useState } from "react";
import { ScrollView, View } from "react-native";

// Components
import SearchBarInput from "../../components/UI/SearchBarInput";
import TechSearchItem from "../../components/Client/TechSearchItem";

// Data
import { jobs } from "../../data/techJobsData";

// Styles
import styles from "../../styles/styles";

function SearchBarScreen({ navigation }) {
    const [enteredValue, setEnteredValue] = useState("");
    const [allJobs, setAllJobs] = useState(jobs);
    const [filteredJobs, setFilteredJobs] = useState(jobs);

    function searchFilter(text) {
        if (text) {
            const newData = allJobs.filter((job) => {
                const jobData = job.title
                    ? job.title.toLowerCase()
                    : "".toLowerCase();
                const textData = text.toLowerCase();
                return jobData.indexOf(textData) > -1;
            });
            setFilteredJobs(newData);
            setEnteredValue(text);
        } else {
            setFilteredJobs(allJobs);
            setEnteredValue(text);
        }
    }

    function searchHandler(job) {
        navigation.navigate("GetAddressScreen", { job });
    }

    return (
        <View>
            <SearchBarInput
                value={enteredValue}
                onChangeText={searchFilter}
                style={styles.clientSearchWrapper}
            >
                Find Technician
            </SearchBarInput>
            <ScrollView>
                {filteredJobs.map((job) => (
                    <TechSearchItem
                        key={job.id}
                        service={job.title}
                        onPress={searchHandler.bind(this, job)}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

export default SearchBarScreen;
