import React, { useState, useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    // console.log(login);
    const handleLogin = async (e) => {
        console.log('hi');
        e.preventDefault();
        setLoading(true);
        try {
            console.log('Logging in user')
            let res = await login(email, password);
            let uid = res.user.uid;
            console.log(uid);
            setLoading(false);
        } catch (error) {
            setError(error);
            setTimeout(() => {
                setError('');
            }, 2000);
            setLoading(false);
        }
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' disabled={loading}>Login</button>
            </form>
        </div>
    )
}

export default Login
