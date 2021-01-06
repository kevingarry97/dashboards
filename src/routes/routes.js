import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardAdmin from '../components/pages/dashboardAdmin';
import Home from '../components/pages/home';
import SignIn from '../components/pages/signIn';
import Logout from '../components/common/logout';
import SignUp from '../components/pages/signUp';
import { getCurrentUser } from '../services/auth';

const Routes = () => {
    const user = getCurrentUser();

    return ( 
        <Switch>
            <Route path="/signUp" component={SignUp} />
            {user && <Route path="/logout" component={Logout} />}
            <Route path="/admin" render={(props) => {
                if(!user) return <Redirect to="/signIn" />
                if(user.role === 'Customer') return <Redirect to="/home" />
                return <DashboardAdmin {...props} />
            }} />
            {!user && <Route path="/signIn" component={SignIn} />}
            {user && user.role === 'Customer' && <Route path="/home" component={Home} />}
            {user && user.role === 'Administrator' && <Redirect to="/admin" />}
            <Redirect from="/" exact to="/signIn" />
            <Redirect to="/signIn" />
        </Switch>
    );
}
 
export default Routes;