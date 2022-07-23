import { async } from "@firebase/util";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, auth, signInWithGoogleRedirect } from "../../utils/firebase/firebase"
export default function Signin() {

    useEffect(() => {
        getRedirectResult(auth).then(async (response) => {
            if (response) {
                await createUserDocumentFromAuth(response.user)
            }
        })

    }, [])

    const logGoogleUser = async () => {
        const { user } = signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }
    return (
        <div>
            <h1>I'm the Signin</h1>
            <button onClick={logGoogleUser}>
                Log In with Google
            </button>
            <button onClick={signInWithGoogleRedirect}>
                Log In with Google Redirect
            </button>
        </div>
    )
}