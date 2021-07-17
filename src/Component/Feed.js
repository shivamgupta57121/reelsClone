import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../Context/AuthProvider'
import { database } from '../firebase'
import Header from './Header'
import UploadFile from './UploadFile'
import CircularProgress from '@material-ui/core/CircularProgress';
import './Feed.css'

function Feed() {
    const { currentUser } = useContext(AuthContext);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const unsub = database.users.doc(currentUser.uid).onSnapshot((doc) => {
            // console.log(doc.data());
            setUserData(doc.data());
        })
    }, [currentUser])
    return (
        <>
            {
                userData == null ? <CircularProgress /> : <>
                    <Header userData={userData} />
                    <div style={{ height: '12.5vh' }} />
                    <div className='feed-container'>
                        <div className='center'>
                            <UploadFile userData={userData} />
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Feed
