import { Image, useWindowDimensions } from "react-native";

// Styles
import styles from "../styles/styles";

function Logo() {
    const { height, width } = useWindowDimensions();

    let divideLogoBy = 2;

    if (height > 700) {
        divideLogoBy = 1.5;
    }

    return (
        <Image
            source={require("../assets/images/logo_transparent.png")}
            style={[
                {
                    width: width / divideLogoBy,
                    height: width / divideLogoBy,
                },
                styles.logo,
            ]}
        />
    );
}

export default Logo;
