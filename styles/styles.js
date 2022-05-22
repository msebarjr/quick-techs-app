import { StyleSheet } from "react-native";
import GlobalStyles from "./globals";

const styles = StyleSheet.create({
    button: {
        borderRadius: 5,
        padding: GlobalStyles.spacing.xs * 1.5,
        backgroundColor: GlobalStyles.colors.primary,
    },
    buttonText: {
        color: "rgba(255, 255, 255, 1)",
        textAlign: "center",
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    centerText: {
        textAlign: "center",
        marginTop: GlobalStyles.spacing.xs,
    },
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: GlobalStyles.spacing.medium,
    },
    disabled: {
        backgroundColor: GlobalStyles.colors.primary,
        opacity: 0.5,
    },
    disabledText: {
        color: "rgba(255, 255, 255, .5)",
    },
    formContainer: { marginHorizontal: GlobalStyles.spacing.large },
    heading: {
        fontSize: GlobalStyles.size.xxl,
    },
    iosPressed: {
        opacity: 0.75,
    },
    input: {
        fontSize: GlobalStyles.size.large,
        paddingBottom: GlobalStyles.spacing.xs,
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.faded,
        marginVertical: GlobalStyles.spacing.small,
    },
    inputInvalid: {
        borderBottomColor: GlobalStyles.colors.delete,
    },
    logo: {
        alignSelf: "center",        
    },
    removetext: {
        backgroundColor: GlobalStyles.colors.delete,
    },
    rootContainer: {
        flex: 1,
        justifyContent: "center",
    },   
    transparent: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: GlobalStyles.colors.primary,
    },
    transparentText: {
        color: GlobalStyles.colors.primary,
    },
});

export default styles;
