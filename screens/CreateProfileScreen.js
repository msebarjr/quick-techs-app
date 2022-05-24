import { useState } from "react";
import { Pressable, Text, View } from "react-native";

// Components
import CustomButton from "../components/UI/CustomButton";
import IconImage from "../components/IconImage";
import LoadingOverlay from "../components/UI/LoadingOverlay";

// Styles
import styles from "../styles/styles";

// Utils
import { createUser } from "../utils/auth";

function CreateProfileScreen({ route }) {
    const [disableClientButton, setDisableClientButton] = useState(true);
    const [disableTechButton, setDisableTechButton] = useState(true);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const { email, password } = route.params;

    async function authenticateUser(email, password) {
        setIsAuthenticating(true);
        await createUser(email, password);
        setIsAuthenticating(false);
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Creating Account..." />;
    }

    function uploadPhotoHandler() {
        console.log("Photo uploaded!");
    }

    function clientSelectHandler() {
        setDisableClientButton(false);
        setDisableTechButton(true);
    }

    function techSelectHandler() {
        setDisableTechButton(false);
        setDisableClientButton(true);
    }

    return (
        <View style={styles.container}>
            <Pressable android_ripple onPress={uploadPhotoHandler}>
                <IconImage />
            </Pressable>
            <Text style={styles.centerText}>Upload Photo</Text>
            <Text style={styles.heading}>Choose Account Type:</Text>
            <CustomButton
                disabled={disableClientButton}
                onPress={clientSelectHandler}
            >
                Client
            </CustomButton>
            <CustomButton
                style={{ marginTop: 15 }}
                disabled={disableTechButton}
                onPress={techSelectHandler}
            >
                Technician
            </CustomButton>
            <CustomButton
                style={{ marginTop: 100 }}
                disabled={disableClientButton && disableTechButton}
                onPress={authenticateUser.bind(this, email, password)}
            >
                Create Account
            </CustomButton>
        </View>
    );
}

export default CreateProfileScreen;
