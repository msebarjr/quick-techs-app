import { View, Image, useWindowDimensions } from "react-native";

// Styles
import styles from "../styles/styles";

function BackgroundImage({ children }) {
    const { height } = useWindowDimensions();

    let windowHeight = height * 0.3;

    return (
        <View style={[{ height: windowHeight }, styles.backgroundImageWrapper]}>
            <Image
                style={{ width: "100%", height: "100%" }}
                source={require("../assets/images/clientHomeBackgroundImage.jpg")}
                resizeMode="cover"
            />
            {children}
        </View>
    );
}

export default BackgroundImage;
