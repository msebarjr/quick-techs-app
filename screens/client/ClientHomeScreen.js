import { ScrollView } from "react-native";

import BackgroundImage from "../../components/BackgroundImage";
import BrowseCategories from "../../components/Client/BrowseCategories";
import ClientGreeting from "../../components/Client/ClientGreeting";
import SearchBar from "../../components/UI/SearchBar";

function ClientHomeScreen({ navigation }) {
    function searchBarHandler() {
        navigation.navigate("SearchBarScreen");
    }

    return (
        <ScrollView alwaysBounceVertical={false}>
            <BackgroundImage>
                <SearchBar onPress={searchBarHandler}>
                    Find a Tech Quick...
                </SearchBar>
            </BackgroundImage>

            <ClientGreeting />
            <BrowseCategories />
        </ScrollView>
    );
}

export default ClientHomeScreen;
