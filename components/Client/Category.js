import { Image, View, Text } from "react-native";

// Styles
import styles from "../../styles/styles";

function Category({ title, source }) {
    return (
        <View style={styles.category}>
            <Image
                style={{ width: "100%", height: "70%", overflow: "hidden" }}
                source={source}
                resizeMode="cover"
            />
            <View style={styles.jobTextWrapper}>
                <Text style={styles.jobText}>{title}</Text>
            </View>
        </View>
    );
}

export default Category;
