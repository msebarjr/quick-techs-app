import { View, Image, useWindowDimensions } from "react-native";

// Styles
import styles from "../styles/styles";

function BackgroundImage({ children, source, home }) {
    const { height } = useWindowDimensions();

    let windowHeight = height * 0.3;

    return (
        <View style={[{ height: windowHeight }, styles.backgroundImageWrapper]}>
            <Image
                style={{ width: "100%", height: "100%" }}
                source={
                    home
                        ? require("../assets/images/clientHomeBackgroundImage.jpg")
                        : source
                }
                resizeMode="cover"
            />
            {children}
        </View>
    );
}

export default BackgroundImage;
