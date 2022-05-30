import { View } from "react-native";

import BackgroundImage from "../../components/BackgroundImage";
import ClientGreeting from "../../components/Client/ClientGreeting";
import SearchBar from "../../components/UI/SearchBar";

function ClientHomeScreen({ navigation }) {
    function searchBarHandler() {
        navigation.navigate("SearchBarScreen");
    }

    return (
        <View>
            <BackgroundImage>
                <SearchBar onPress={searchBarHandler}>
                    Find a Tech Quick...
                </SearchBar>
            </BackgroundImage>

            <ClientGreeting />
        </View>
    );
}

export default ClientHomeScreen;
