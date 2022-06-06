import { View } from "react-native";

// Components
import AddressSearchInput from "../../components/Locations/AddressSearchInput";

function GetAddressScreen({ route }) {
    const { job } = route.params;

    return (
        <View style={{ marginTop: 10 }}>
            <AddressSearchInput job={job} />
        </View>
    );
}

export default GetAddressScreen;
