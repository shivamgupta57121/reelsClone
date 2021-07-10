import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup } = useContext(AuthContext);
    // console.log(signup);
    const handleSignup = async (e) => {
        e.preventDefault(); // event of submission - reload the page - to prevent that
        setLoading(true);
        let res = await signup(email,password);
        let uid = res.user.uid;
        console.log(uid);
        setLoading(false);
    }
    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor=''>UserName</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=''>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor=''>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' disabled={loading}>Submit</button>
            </form>
        </div>
    )
}

export default SignUp
