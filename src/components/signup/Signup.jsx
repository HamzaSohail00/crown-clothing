import { useState } from "react"
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase'
import FormInput from "../formInput/FormInput";
import Button from '../button/Button';
import './signup.scss';

const defaultSignupFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
export default function Signup() {
    const [formFields, setFormFields] = useState(defaultSignupFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => setFormFields(defaultSignupFormFields)
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Password don't match")
            return;
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const response = await createUserDocumentFromAuth(user, { displayName })
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log("Cannot create user, email already exists")
            }
            console.log({ error })
        }
        resetFormFields();
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })
    }
    return (
        <div className="sign-up-container">
            <h2>Don't have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display Name" type="text" required name='displayName' value={displayName} onChange={handleChange} />
                <FormInput label="Email" type="email" required name='email' value={email} onChange={handleChange} />
                <FormInput label="Password" type="password" required name='password' value={password} onChange={handleChange} />
                <FormInput label="Confirm Password" type="password" required name='confirmPassword' value={confirmPassword} onChange={handleChange} />
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}