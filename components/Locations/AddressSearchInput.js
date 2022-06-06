import { ScrollView, View } from "react-native";
import { GoogleAutoComplete } from "react-native-google-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

// Components
import Input from "../UI/Input";
import Address from "./Address";

function AddressSearchInput() {
    return (
        <View style={{ width: "90%", alignSelf: "center" }}>
            <GoogleAutoComplete
                apiKey={GOOGLE_MAPS_API_KEY}
                debounce={500}
                minLength={3}
            >
                {({
                    handleTextChange,
                    locationResults,
                    fetchDetails,
                    inputValue,
                }) => (
                    <>
                        {console.log("locationResults", locationResults)}
                        <Input
                            config={{
                                autoCapitalize: "none",
                                autoComplete: "off",
                                autoCorrect: false,
                                placeholder: "Enter your address...",
                            }}
                            onUpdateValue={handleTextChange}
                            value={inputValue}
                        />
                        <ScrollView>
                            {locationResults.map((el) => (
                                <Address
                                    {...el}
                                    key={el.id}
                                    fetchDetails={fetchDetails}
                                />
                            ))}
                        </ScrollView>
                    </>
                )}
            </GoogleAutoComplete>
        </View>
    );
}

export default AddressSearchInput;
