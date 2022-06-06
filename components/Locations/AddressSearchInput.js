import { ActivityIndicator, ScrollView, View } from "react-native";
import { GoogleAutoComplete } from "react-native-google-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { Entypo } from "@expo/vector-icons";

// Components
import Input from "../UI/Input";
import Address from "./Address";

// Styles
import GlobalStyles from "../../styles/globals";

function AddressSearchInput({ job }) {
    return (
        <View style={{ width: "90%", alignSelf: "center" }}>
            <GoogleAutoComplete
                apiKey={GOOGLE_MAPS_API_KEY}
                debounce={500}
                minLength={3}
                components="country:us"
            >
                {({
                    handleTextChange,
                    locationResults,
                    fetchDetails,
                    inputValue,
                    isSearching,
                    clearSearch,
                }) => (
                    <>
                        <Input
                            config={{
                                autoCapitalize: "none",
                                autoComplete: "off",
                                autoCorrect: false,
                                placeholder: "Enter your address...",
                            }}
                            onUpdateValue={handleTextChange}
                            value={inputValue}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Entypo
                                name="cross"
                                size={20}
                                color={GlobalStyles.colors.faded}
                                onPress={clearSearch}
                            />
                        </Input>
                        {isSearching && (
                            <ActivityIndicator
                                size="large"
                                color={GlobalStyles.colors.primary}
                            />
                        )}
                        <ScrollView>
                            {locationResults.map((el, i) => (
                                <Address
                                    {...el}
                                    key={String(i)}
                                    fetchDetails={fetchDetails}
                                    job={job}
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
