import { Image, useWindowDimensions } from "react-native";

// Styles
import styles from "../styles/styles";

function Logo() {
    const { width } = useWindowDimensions();

    return (
        <Image
            source={require("../assets/images/logo_transparent.png")}
            style={[
                {
                    width: width / 1.5,
                    height: width / 1.5,
                },
                styles.logo,
            ]}
        />
    );
}

export default Logo;
