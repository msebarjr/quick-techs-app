import { Text, View } from "react-native";
import KeyboardAvoidingComponent from "../KeyboardAvoidingComponent";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

// navigator.geolocation = require("@react-native-community/geolocation");
navigator.geolocation = require("react-native-geolocation-service");

function GooglePlacesInput() {
    return (
        <View style={{ width: "90%", alignSelf: "center" }}>
            <GooglePlacesAutocomplete
                currentLocation={true}
                currentLocationLabel="Current location"
                minLength={2}
                placeholder="Enter your address"
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: GOOGLE_MAPS_API_KEY,
                    language: "en",
                }}
            />
        </View>
    );
}

export default GooglePlacesInput;
