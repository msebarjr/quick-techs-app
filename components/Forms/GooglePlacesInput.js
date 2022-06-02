import { Text } from "react-native";
import KeyboardAvoidingComponent from "../KeyboardAvoidingComponent";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

function GooglePlacesInput() {
    return (
        <KeyboardAvoidingComponent>
            <Text>GooglePlacesInput</Text>
            <GooglePlacesAutocomplete
                placeholder="Search"
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: "en",
                }}
            />
        </KeyboardAvoidingComponent>
    );
}

export default GooglePlacesInput;
