import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardAdmin from '../components/pages/dashboardAdmin';
import DashboardBM from '../components/pages/dashboardBM';
import SignIn from '../components/pages/signIn';
import SignUp from '../components/pages/signUp';

const Routes = () => {
    return ( 
        <Switch>
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/adminBM" component={DashboardBM} />
            <Route path="/admin" component={DashboardAdmin} />
            <Redirect from="/" exact to="/signUp" />
        </Switch>
    );
}
 
export default Routes;