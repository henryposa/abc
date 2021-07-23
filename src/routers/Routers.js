import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { NavBar } from '../components/NavBar'

export const Routers = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path="/auth/login" component={LoginScreen} />
                <Route exact path="/auth/register" component={RegisterScreen} />
                <Redirect to="/" />
            </Switch>
        </BrowserRouter>

    )
}
