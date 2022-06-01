import { Pressable, Text, View } from "react-native";

// Styles
import styles from "../../styles/styles";

function SearchBar({ children, onPress, style }) {
    return (
        <View style={style}>
            <Pressable
                onPress={onPress}
                style={({ pressed }) => pressed && styles.iosPressed}
                android_ripple
            >
                <View style={styles.searchBar}>
                    <Text style={styles.searchBarText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );
}

export default SearchBar;
