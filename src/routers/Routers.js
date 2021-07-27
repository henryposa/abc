import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { App } from '../App'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import { NavBar } from '../components/NavBar'
import { AuthRouter } from './AuthRouter'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRouter'

export const Routers = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <PublicRoute
                        path="/"
                        component={AuthRouter}
                        //isLooggedIn
                        isAuthenticated={false}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={App}
                        isAuthenticated={false}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </BrowserRouter>

    )
}
