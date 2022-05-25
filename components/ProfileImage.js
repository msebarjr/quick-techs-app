import { Image, View } from "react-native";

// Styles
import styles from "../styles/styles";

function ProfileImage({ style }) {
    return (
        <View style={style}>
            <Image
                style={styles.profileImage}
                source={require("../assets/images/profile.jpg")}
            />
        </View>
    );
}

export default ProfileImage;
