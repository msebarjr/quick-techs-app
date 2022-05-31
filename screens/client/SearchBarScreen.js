import { useEffect } from "react";
import { View, Text } from "react-native";

function SearchBarScreen({ navigation }) {
    useEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions: {
                autoFocus: true,
                hideWhenScrolling: false,
                placeholder: "Find Technician",
                textColor: "white",
                headerIconColor: "white",
                barTintColor: "white",
            },
        });
    }, [navigation]);

    return (
        <View>
            <Text>SearchBarScreen</Text>
        </View>
    );
}

export default SearchBarScreen;
