import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router';
import { AuthContext } from '../Context/AuthProvider';
import { storage, database } from '../firebase'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);
    const { signup, currentUser } = useContext(AuthContext);
    const history = useHistory();
    // console.log(signup);

    const handleSignup = async (e) => {
        e.preventDefault(); // event of submission - reload the page - to prevent that
        try {
            setLoading(true);
            let res = await signup(email, password);
            let uid = res.user.uid;
            console.log(uid);
            setLoading(false);
            const uploadTaskListener = storage.ref(`/users/${uid}/profileImage`).put(file);
            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTaskListener.on("state_changed", fn1, fn2, fn3);
            // fn 1 -> progress tracking
            // fn2 -> error
            // fn3 -> succes
            function fn1(snapshot) {
                var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // console.log('Upload is ' + progress + '% done');
                console.log(`Upload is ${progress}% done`);
            }
            function fn2(error) {
                setError(error);
                setTimeout(() => {
                    setError('');
                }, 2000);
                setLoading(false);
                // sign up reverse since profile image to be done self
            }
            async function fn3() {
                // Handle successful uploads on complete
                // Get the download URL
                let downloadUrl = await uploadTaskListener.snapshot.ref.getDownloadURL();
                console.log(downloadUrl);
                await database.users.doc(uid).set({
                    email: email,
                    userId: uid,
                    username: name,
                    createdAt: database.getCurrentTimeStamp(),
                    profileUrl: downloadUrl,
                    postIds: []
                })
                setLoading(false);
                console.log('User has Signed Up.')
                history.push('/');
            }
        }
        catch (err) {
            setError(err);
            setTimeout(() => {
                setError('');
            }, 2000);
            setLoading(false);
        }
    }

    const handleFileSubmit = (e) => {
        let file = e.target.files[0]; // e.target.files gives an array, file is present at 0th index 
        console.log(file);
        if (file != null) {
            setFile(file);
        }
    }

    useEffect(() => {
        if (currentUser) {
            history.push('/')
        }
    }, [])

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
                <div>
                    <label htmlFor='profile'>Profile Image</label>
                    <input type='file' accept='image/*' onChange={handleFileSubmit} />
                </div>
                <button type='submit' disabled={loading}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
