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
        paddingHorizontal: GlobalStyles.spacing.medium,
    },
    disabled: {
        backgroundColor: GlobalStyles.colors.primary,
        opacity: 0.75,
    },
    disabledText: {
        color: "rgba(255, 255, 255, .5)",
    },
    flexContainer: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: GlobalStyles.spacing.medium,
    },
    formContainer: { marginHorizontal: GlobalStyles.spacing.large },
    heading: {
        marginVertical: GlobalStyles.spacing.large,
        fontSize: GlobalStyles.size.xl,
        // fontWeight: "semi-bold",
        alignSelf: "center",
    },
    iconWrapper: {
        width: GlobalStyles.size.xl * 7,
        height: GlobalStyles.size.xl * 7,
        borderRadius: (GlobalStyles.size.xl * 7) / 2,
        backgroundColor: "rgba(0, 0, 0, .3)",
        alignSelf: "center",
        marginTop: GlobalStyles.spacing.large,
        justifyContent: "center",
        alignItems: "center",
    },
    iosPressed: {
        opacity: 0.75,
    },
    input: {
        fontSize: GlobalStyles.size.large,
        paddingVertical: GlobalStyles.spacing.xs,
    },
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.faded,
        marginVertical: GlobalStyles.spacing.small,
        paddingHorizontal: GlobalStyles.spacing.xs,
    },
    inputInvalid: {
        backgroundColor: GlobalStyles.colors.error,
    },
    logo: {
        alignSelf: "center",
    },
    message: {
        fontSize: GlobalStyles.size.large,
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
