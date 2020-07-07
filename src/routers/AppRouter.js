import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}> 
        <div>
            <Switch>
            <PublicRoute path="/" component={LoginPage} exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <PublicRoute path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
            </Switch> 
        </div> 
    </Router>
)

export default AppRouter

//by default browser router will default history but we can use history everywhere with some changes