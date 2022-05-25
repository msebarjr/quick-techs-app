import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Styles
import styles from "../styles/styles";
import GlobalStyles from "../styles/globals";

function IconImage() {
    return (
        <View style={styles.iconWrapper}>
            <MaterialIcons
                name="add-a-photo"
                size={72}
                color={GlobalStyles.colors.faded}
            />
        </View>
    );
}

export default IconImage;
