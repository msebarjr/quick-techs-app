import { Platform, SafeAreaView, StatusBar, Text } from "react-native";

function ClientMapScreen() {
    return (
        <SafeAreaView
            style={
                Platform.OS === "android" && {
                    marginTop: StatusBar.currentHeight,
                }
            }
        >
            <Text>ClientMapScreen</Text>
        </SafeAreaView>
    );
}

export default ClientMapScreen;
