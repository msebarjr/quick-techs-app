import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";

// Components
import CustomButton from "../components/UI/CustomButton";
import CustomDisabledButton from "../components/UI/CustomDisabledButton";
import IconImage from "../components/IconImage";
import LoadingOverlay from "../components/UI/LoadingOverlay";

// Utils
import { createUser } from "../utils/auth";
import { authenticate } from "../redux/reducers/authSlice";

// Styles
import styles from "../styles/styles";

function CreateProfileScreen({ route }) {
    const dispatch = useDispatch();

    const [disableClientButton, setDisableClientButton] = useState(true);
    const [disableTechButton, setDisableTechButton] = useState(true);
    const [disableButton, setDisableButton] = useState(true);
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    const { name, email, password } = route.params;

    async function authenticateUser(name, email, password) {
        setIsAuthenticating(true);

        try {
            const token = await createUser(
                name,
                email,
                password,
                disableClientButton
            );
            dispatch(authenticate(token));
        } catch (error) {
            Alert.alert("Authentication Failed", "Could not create account.");
            setIsAuthenticating(false);
        }
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
        setDisableButton(false);
    }

    function techSelectHandler() {
        setDisableTechButton(false);
        setDisableClientButton(true);
        setDisableButton(false);
    }

    return (
        <View style={styles.container}>
            <Pressable android_ripple onPress={uploadPhotoHandler}>
                <IconImage />
            </Pressable>
            <Text style={styles.centerText}>Upload Photo</Text>
            <Text style={styles.heading}>Choose Account Type:</Text>
            <CustomButton
                disableStyle={disableClientButton}
                onPress={clientSelectHandler}
            >
                Client
            </CustomButton>
            <CustomButton
                style={{ marginTop: 15 }}
                disableStyle={disableTechButton}
                onPress={techSelectHandler}
            >
                Technician
            </CustomButton>
            {/* {disableButton ? (
                <CustomDisabledButton style={{ marginTop: 100 }} disabled>
                    Create Account
                </CustomDisabledButton>
            ) : (
                <CustomButton
                    style={{ marginTop: 100 }}
                    disabled={disableClientButton && disableTechButton}
                    onPress={authenticateUser.bind(this, name, email, password)}
                >
                    Create Account
                </CustomButton>
            )} */}
            <CustomButton
                style={{ marginTop: 100 }}
                disabled={disableButton}
                disableStyle={disableClientButton && disableTechButton}
                onPress={authenticateUser.bind(this, name, email, password)}
            >
                Create Account
            </CustomButton>
        </View>
    );
}

export default CreateProfileScreen;
