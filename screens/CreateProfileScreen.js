import { useState } from "react";
import { Alert, Pressable, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Components
import CustomButton from "../components/UI/CustomButton";
import IconImage from "../components/IconImage";
import LoadingOverlay from "../components/UI/LoadingOverlay";

// Reducers
import { authenticate, setProfile } from "../redux/reducers/authSlice";
import { createUserProfile } from "../redux/reducers/usersSlice";

// Styles
import styles from "../styles/styles";

// Utils
import { createUser } from "../utils/auth";
import { createTech, createClient } from "../utils/http";

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
            const token = await createUser(email, password);
            let profileType = "";

            if (disableClientButton) {
                profileType = "tech";
                createTech({ name, email, isLoggedIn: true });
            } else {
                profileType = "client";
                createClient({ name, email });
            }

            dispatch(
                createUserProfile({
                    name,
                    email,
                    type: profileType,
                    isLoggedIn: true,
                })
            );

            await AsyncStorage.setItem("token", token);
            await AsyncStorage.setItem("user", profileType);
            dispatch(authenticate({ token, profileType }));
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
