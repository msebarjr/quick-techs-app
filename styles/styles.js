import { StyleSheet } from "react-native";
import GlobalStyles from "./globals";

const styles = StyleSheet.create({
    backgroundImageWrapper: {
        width: "100%",
        position: "relative",
        zIndex: -1,
    },
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
    category: {
        marginHorizontal: GlobalStyles.spacing.xs,
        width: 150,
        height: 200,
        borderRadius: 6,
        backgroundColor: "white",
        shadowColor: "#333",
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 1,
        shadowRadius: 6,
        elevation: 2,
        overflow: "hidden",
    },
    centerText: {
        textAlign: "center",
        marginTop: GlobalStyles.spacing.xs,
    },
    clientGreeting: {
        paddingVertical: GlobalStyles.spacing.small,
        paddingHorizontal: GlobalStyles.spacing.medium,
        backgroundColor: GlobalStyles.colors.secondary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    clientName: {
        color: "white",
        fontWeight: "bold",
    },
    clientSearchWrapper: {
        width: "90%",
        alignSelf: "center",
        marginVertical: GlobalStyles.spacing.medium,
    },
    clientWelcomeText: {
        flex: 1,
        marginLeft: GlobalStyles.spacing.small,
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
    flexCenter: {
        justifyContent: "center",
        alignItems: "center",
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
    jobItem: {
        width: "100%",
        paddingHorizontal: GlobalStyles.spacing.medium,
        marginVertical: GlobalStyles.spacing.small,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    jobTextWrapper: {
        height: "30%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
    },
    logo: {
        alignSelf: "center",
    },
    message: {
        fontSize: GlobalStyles.size.large,
    },
    profileImage: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
    },
    removetext: {
        backgroundColor: GlobalStyles.colors.delete,
    },
    rootContainer: {
        flex: 1,
        justifyContent: "center",
    },
    searchBar: {
        backgroundColor: "white",
        borderRadius: 30,
        width: "100%",
        height: 45,
        alignSelf: "center",
        elevation: 3,
        shadowColor: "black",
        shadowOffset: 3,
        shadowOpacity: 0.25,
        shadowRadius: 1,
        justifyContent: "center",
        paddingHorizontal: GlobalStyles.spacing.large,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    searchBarText: {
        color: GlobalStyles.colors.faded,
    },
    searchBarWrapper: {
        width: "80%",
        position: "absolute",
        alignSelf: "center",
        bottom: 30,
    },
    techHomeGreeting: {
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        paddingVertical: GlobalStyles.spacing.large,
        borderBottomWidth: 1,
        borderBottomColor: GlobalStyles.colors.faded,
    },
    techName: {
        color: GlobalStyles.colors.primary,
        fontWeight: "bold",
        fontSize: GlobalStyles.size.large,
    },
    techNotifications: {
        margin: GlobalStyles.spacing.medium,
        paddingVertical: GlobalStyles.spacing.small,
        backgroundColor: GlobalStyles.colors.secondary,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    techNotificationsText: {
        color: GlobalStyles.colors.errorText,
        fontWeight: "bold",
    },
    techWelcomeText: {
        marginTop: GlobalStyles.spacing.small,
        flexDirection: "row",
    },
    title: {
        fontSize: GlobalStyles.size.xl,
        fontWeight: "bold",
        marginVertical: GlobalStyles.spacing.large,
        marginHorizontal: GlobalStyles.spacing.small,
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
