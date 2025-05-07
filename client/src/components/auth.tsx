import { useState, type FormEvent, type ChangeEvent} from 'react';
import { supabase } from '../../utils/supabase';

const Auth = () => {
    const [isSignUp, setIsSignUp] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPsassword] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(isSignUp) {
            const { error: signUpError } = await supabase.auth.signUp({ email, password });
            if (signUpError) {
                console.error(`Error signing up: ${signUpError.message}`);
                return;
            }
        } else {
            const { error: signInError } = await supabase.auth.signInWithPassword({ email, password });

            if (signInError) {
                console.error(`Error signing up: ${signInError.message}`);
                return;
            }
        }
    }

    return (
        <div style={{ margin: '0 auto', width: '100%'}}>
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" id="email" value={email} onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
                <input type="password" id="password" value={password} onChange={(e: ChangeEvent<HTMLInputElement>) => setPsassword(e.target.value)} />
                <button type="submit" style={{ padding: "0.5rem 1rem", marginRight: "0.5rem" }}>{isSignUp ? 'Sign Up' : 'Sign In'}</button>
            </form>
            <button onClick={() => setIsSignUp(!isSignUp)} style={{padding: "0.5rem 1rem"}}>{isSignUp ? 'Switch to Sign Up' : 'Switch to Sign In'}</button>
        </div>
    )
}

export default Auth;