import { View, ScrollView, Text } from "react-native";

// Components
import Category from "./Category";

// Data
import { jobs } from "../../data/techJobsData";

// Styles
import styles from "../../styles/styles";

function BrowseCategories() {
    return (
        <View style={{ marginHorizontal: 10 }}>
            <Text style={styles.title}>Browse By Category</Text>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {jobs.map((job) => (
                    <Category
                        key={job.id}
                        title={job.title}
                        source={job.source}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

export default BrowseCategories;
