import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase"
export default function Signin() {
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

        </div>
    )
}