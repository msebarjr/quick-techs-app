import { StyleSheet } from "react-native";
import GlobalStyles from "./globals";

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        padding: GlobalStyles.size.small,
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
        paddingHorizontal: GlobalStyles.spacing.large,
    },
    disabled: {
        backgroundColor: GlobalStyles.colors.primary,
        opacity: 0.5,
    },
    disabledText: {
        color: "rgba(255, 255, 255, .5)",
    },
    formContainer: { marginHorizontal: GlobalStyles.spacing.large },
    formWrapper: {
        marginTop: GlobalStyles.spacing.large,
    },
    heading: {
        fontSize: GlobalStyles.size.xxl,
        marginTop: -75,
        fontWeight: "bold",
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
        marginVertical: 10,
    },
    logo: {
        alignSelf: "center",
        marginVertical: GlobalStyles.spacing.xl,
    },
    removetext: {
        backgroundColor: GlobalStyles.colors.delete,
    },
    subContainer: {
        flex: 1,
    },
    textWrapper: {
        marginTop: GlobalStyles.spacing.large,
    },
});

export default styles;
