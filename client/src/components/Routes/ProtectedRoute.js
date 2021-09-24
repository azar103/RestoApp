import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <Route
            {...restOfProps}
            render={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/login"/>
            }
        />
    )
}

export default ProtectedRoute;