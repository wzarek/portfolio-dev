import '../css/admin.css';
import React, { useState, useEffect } from 'react';
import Admin from '../components/admin/Admin';
import Login from '../components/admin/Login';
import { app } from '../firebase/Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function AdminRoute() {
    const [isSignedIn, setSignedIn] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const auth = getAuth(app);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) setSignedIn(true);
            else setSignedIn(false);
            setLoading(false);
        })
    }, [auth]);

    return (
    <section id='admin-page'>
        <h1>Admin page</h1>
        {
            isLoading ? 
                <div>Loading...</div>
            : (isSignedIn ? <Admin /> : <Login />) 
        }
    </section>
    )
}

export default AdminRoute
