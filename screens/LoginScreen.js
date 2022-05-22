import { useState } from "react";

// Components
import AuthContent from "../components/Auth/AuthContent";
import LoadingOverlay from "../components/UI/LoadingOverlay";

// Utils
import { loginUser } from "../utils/auth";

function LoginScreen() {
    const [isAuthenticating, setIsAuthenticating] = useState(false);

    // Since createUser returns a Promise, async await here as well to have ability to add Loading Overlay
    async function loginHandler({ email, password }) {
        setIsAuthenticating(true); // True since user will be authenticating
        await loginUser(email, password);
        setIsAuthenticating(false); // False since user is created and no longer being authenticated
    }

    if (isAuthenticating) {
        return <LoadingOverlay message="Logging In..." />;
    }

    return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
