import { StyleSheet } from "react-native";
import GlobalStyles from "./globals";

const styles = StyleSheet.create({
    formContainer: { marginHorizontal: GlobalStyles.spacing.large },
    formWrapper: {
        marginTop: GlobalStyles.spacing.xs,
    },
    heading: {
        fontSize: GlobalStyles.size.xxl,
        marginTop: -75,
        fontWeight: "bold",
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
});

export default styles;
