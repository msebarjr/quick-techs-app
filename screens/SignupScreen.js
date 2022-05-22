import { useState } from "react";

// Components
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";

// Utils
import { createUser } from "../utils/auth";

function SignupScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    // Since createUser returns a Promise, async await here as well to have ability to add Loading Overlay
    async function signupHandler({ email, password }) {
        setIsAuthenticating(true); // True since user will be authenticating
        await createUser(email, password);
        setIsAuthenticating(false); // False since user is created and no longer being authenticated
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Creating Account..." />;
    }

    return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
