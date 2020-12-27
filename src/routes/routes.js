import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import DashboardAdmin from '../components/pages/dashboardAdmin';
import DashboardBM from '../components/pages/dashboardBM';
import SignIn from '../components/pages/signIn';
import { getCurrentUser } from '../services/auth';

const Routes = () => {
    const user = getCurrentUser();

    return ( 
        <Switch>
            {!user && <Route path="/signIn" component={SignIn} />}
            <Route path="/admin" render={(props) => {
                if(!user) return <Redirect to="/signIn" />
                // if(user.role !== 'BM' || user.role !== 'Administrator') return <Redirect to="/adminBM" />
                if(user.role !== 'Administrator') return <Redirect to="/adminBM" />
                if(user.role === 'Administrator') return <DashboardAdmin {...props} />
            }} />
            {user && user.role === 'BM' && <Route path="/adminBM" component={DashboardBM} />}
            {user && user.role === 'Administrator' && <Redirect to="/admin" />}
            <Redirect from="/" exact to="/signIn" />
            <Redirect to="/signIn" />
        </Switch>
    );
}
 
export default Routes;