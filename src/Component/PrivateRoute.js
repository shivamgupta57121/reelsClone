import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../Context/AuthProvider'

// PrivateRoute can be used for private pages
// i.e. pages only for logged in user
function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useContext(AuthContext);
    return (
        <Route {...rest} render={props => {
            return currentUser ? <Component {...props} /> : <Redirect to='/login' />
        }} />
    )
}

export default PrivateRoute
