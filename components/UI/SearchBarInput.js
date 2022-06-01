import { TextInput, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// Styles
import styles from "../../styles/styles";
import GlobalStyles from "../../styles/globals";

function SearchBarInput({ children, style }) {
    return (
        <View style={style}>
            <View style={styles.searchBar}>
                <FontAwesome5
                    name="search"
                    size={16}
                    color={GlobalStyles.colors.faded}
                />
                <TextInput
                    style={[styles.searchBarText, { marginLeft: 8 }]}
                    placeholder={children}
                ></TextInput>
            </View>
        </View>
    );
}

export default SearchBarInput;
