import React, { useState } from 'react'
import { app } from '../../firebase/Firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

function Login() {
    const auth = getAuth(app);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill out the fields');
            return;
        }
        signInWithEmailAndPassword(auth, email, password)
    };

    return (
    <section className='admin-login' onSubmit={signIn}>
        <form>
            <p>sign in</p>
            <input 
                type="email"
                aria-label='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input 
                type="password"
                aria-label='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
            />
            <div>
                <button type="submit">login</button>
            </div>
        </form>
    </section>
    )
}

export default Login
