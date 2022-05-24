import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import IconImage from "../components/IconImage";
import CustomButton from "../components/UI/CustomButton";

// Styles
import styles from "../styles/styles";

function CreateProfileScreen() {
    const [disableClientButton, setDisableClientButton] = useState(true);
    const [disableTechButton, setDisableTechButton] = useState(true);

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
            >
                Create Account
            </CustomButton>
        </View>
    );
}

export default CreateProfileScreen;
