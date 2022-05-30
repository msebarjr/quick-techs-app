import { View, Image } from "react-native";

// Styles
import styles from "../styles/styles";

function BackgroundImage() {
    return (
        <View style={styles.backgroundImageWrapper}>
            <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/images/clientHomeBackgroundImage.jpg")}
            />
        </View>
    );
}

export default BackgroundImage;
