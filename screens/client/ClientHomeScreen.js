import { ScrollView } from "react-native";
import { getImageSourceProperties } from "react-native/Libraries/Image/ImageSource";

// Components
import BackgroundImage from "../../components/BackgroundImage";
import BrowseCategories from "../../components/Client/BrowseCategories";
import ClientGreeting from "../../components/Client/ClientGreeting";
import SearchBar from "../../components/UI/SearchBar";

// Styles
import styles from "../../styles/styles";

function ClientHomeScreen({ navigation }) {
    function searchBarHandler() {
        navigation.navigate("SearchBarScreen");
    }

    return (
        <ScrollView alwaysBounceVertical={false}>
            <BackgroundImage home>
                <SearchBar
                    onPress={searchBarHandler}
                    style={styles.searchBarWrapper}
                >
                    Find a Tech Quick...
                </SearchBar>
            </BackgroundImage>

            <ClientGreeting />
            <BrowseCategories />
        </ScrollView>
    );
}

export default ClientHomeScreen;
