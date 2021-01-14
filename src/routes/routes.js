import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardAdmin from '../components/pages/dashboardAdmin';
import Home from '../components/pages/home';
import SignIn from '../components/pages/signIn';
import Logout from '../components/common/logout';
import SignUp from '../components/pages/signUp';
import { getCurrentUser } from '../services/auth';
import Product from '../components/pages/product';
import Contact from '../components/pages/contact';

const Routes = () => {
    const user = getCurrentUser();

    return ( 
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/product" component={Product} />
            <Route path="/contact" component={Contact} />
            {user && <Route path="/logout" component={Logout} />}
            <Route path="/admin" render={(props) => {
                if(!user) return <Redirect to="/signIn" />
                if(user.role === 'Customer') return <Redirect to="/home" />
                return <DashboardAdmin {...props} />
            }} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            {user && user.role === 'Administrator' && <Redirect to="/admin" />}
            <Redirect from="/" exact to="/home" />
            <Redirect to="/home" />
        </Switch>
    );
}
 
export default Routes;