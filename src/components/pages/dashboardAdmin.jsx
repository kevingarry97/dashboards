import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Apartment, Ballot, MonetizationOn, MoreHoriz, Add, InsertDriveFile, AssignmentTurnedIn, ExpandLess, ExpandMore, Menu, Business, LocalAtm, ImportantDevices, SupervisedUserCircle, ViewQuilt, Dashboard, Person, Assessment, ArrowDownward, ArrowUpward, ExitToApp, AccountBalance, AllInbox, DirectionsBoat } from '@material-ui/icons';
import Toolbar from '@material-ui/core/Toolbar';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles, useTheme, createStyles } from '@material-ui/core/styles';
import DashboardCard from '../common/dashboardCard';
import DashboardBreadCrumb from '../common/dashboardBreadCrumb';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Overview from '../overview';
import Products from '../products';
import Branches from '../branches';
import Users from '../users';
import Reports from '../reports';
import Order from '../order';
import ImportsReports from '../importsReports';
import DistributionsReports from '../distributionsReport';
import { getCurrentUser } from '../../services/auth';
import Charts from '../common/chart';
import BmOverview from '../bmOverview';
import BmOrders from '../bmOrders';
import BmExpenses from '../bmExpenses';

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: '#fff',
        color: '#98A6AD',
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#313A46',
      color: '#fff'
    },
    content: {
      flexGrow: 1,
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    },
  }),
);


const DashboardAdmin = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const user = getCurrentUser();

    const handleClick = () => {
        setOpen(!open);
    };
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                {user.role === 'BranchManager' && <>
                    <NavLink to="/admin/branchOverview" className="nav-link">
                        <ListItem>
                            <ListItemIcon>
                                <Dashboard style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" style={{ color: '#F4F5F6'}} />
                        </ListItem>
                    </NavLink>   
                    <NavLink to="/admin/branchOrders" className="nav-link">
                        <ListItem>
                            <ListItemIcon>
                                <ImportantDevices style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Orders" style={{ color: '#F4F5F6'}} />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/admin/branchExpenses" className="nav-link">
                        <ListItem>
                            <ListItemIcon>
                                <ImportantDevices style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Expenses" style={{ color: '#F4F5F6'}} />
                        </ListItem>
                    </NavLink>
                    <div className="nav-link">
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <Assessment style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Reports" style={{ color: '#F4F5F6'}} />
                            {open ? <ExpandLess style={{ color: '#F4F5F6'}} /> : <ExpandMore style={{ color: '#F4F5F6'}} />}
                        </ListItem>
                    </div> 
                    <Collapse in={open} timeout="auto" unmountOnExit style={{ backgroundColor: "#232931"}}>
                        <NavLink to="/admin/reports" className="nav-link">
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AccountBalance style={{ color: '#fff', fontSize: 25}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Sales" style={{ color: '#F4F5F6'}} />
                                </ListItem>
                            </List>
                        </NavLink>
                        <NavLink to="/admin/imports"  className="nav-link">
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <DirectionsBoat style={{ color: '#fff', fontSize: 25}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Imports" style={{ color: '#F4F5F6'}} />
                                </ListItem>
                            </List>
                        </NavLink>
                        <NavLink to="/admin/distributions"  className="nav-link">
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AllInbox style={{ color: '#fff', fontSize: 25}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Distributions" style={{ color: '#F4F5F6'}} />
                                </ListItem>
                            </List>
                        </NavLink>   
                    </Collapse>
                </>}
                {user.role === 'Administrator' && <> 
                    <NavLink to="/admin/overview" className="nav-link">
                        <ListItem>
                            <ListItemIcon>
                                <Dashboard style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" style={{ color: '#F4F5F6'}} />
                        </ListItem>
                    </NavLink>   
                    <NavLink to="/admin/products" className="nav-link">
                        <ListItem>
                            <ListItemIcon>
                                <ImportantDevices style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Products" style={{ color: '#F4F5F6'}} />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/admin/branches" className="nav-link">
                        <ListItem>
                            <ListItemIcon>
                                <Business style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Branches" style={{ color: '#F4F5F6'}} />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/admin/orders" className="nav-link">
                        <ListItem>
                            <ListItemIcon>
                                <ViewQuilt style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Orders" style={{ color: '#F4F5F6'}} />
                        </ListItem>
                    </NavLink>
                    <div className="nav-link">
                        <ListItem button onClick={handleClick}>
                            <ListItemIcon>
                                <Assessment style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Reports" style={{ color: '#F4F5F6'}} />
                            {open ? <ExpandLess style={{ color: '#F4F5F6'}} /> : <ExpandMore style={{ color: '#F4F5F6'}} />}
                        </ListItem>
                    </div> 
                    <Collapse in={open} timeout="auto" unmountOnExit style={{ backgroundColor: "#232931"}}>
                        <NavLink to="/admin/reports" className="nav-link">
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AccountBalance style={{ color: '#fff', fontSize: 25}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Sales" style={{ color: '#F4F5F6'}} />
                                </ListItem>
                            </List>
                        </NavLink>
                        <NavLink to="/admin/imports"  className="nav-link">
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <DirectionsBoat style={{ color: '#fff', fontSize: 25}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Imports" style={{ color: '#F4F5F6'}} />
                                </ListItem>
                            </List>
                        </NavLink>
                        <NavLink to="/admin/distributions"  className="nav-link">
                            <List component="div" disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemIcon>
                                        <AllInbox style={{ color: '#fff', fontSize: 25}} />
                                    </ListItemIcon>
                                    <ListItemText primary="Distributions" style={{ color: '#F4F5F6'}} />
                                </ListItem>
                            </List>
                        </NavLink>   
                    </Collapse>
                    <NavLink to="/admin/users" className="nav-link">
                        <ListItem>
                            <ListItemIcon>
                                <Person style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Users" style={{ color: '#F4F5F6'}} />
                        </ListItem>
                    </NavLink> 
                </>}
                <div style={{ position: 'fixed', bottom: '0%', width: "100%"}}>
                    <NavLink to="/logout" className="nav-link d-flex">
                        <ListItem>
                            <ListItemIcon>
                                <ExitToApp style={{ color: '#fff', fontSize: 30}} />
                            </ListItemIcon>
                            <ListItemText primary="Log Out" style={{ color: '#F4F5F6'}} />
                        </ListItem>
                    </NavLink>
                </div>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
                <meta name="description" content="Awesome description" />
            </Helmet>
            <div className={classes.root}>
                <CssBaseline />
                <AppBar position="fixed" className="d-md-none">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            className={classes.menuButton}
                        >
                            <Menu />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label="mailbox folders">
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Hidden smUp implementation="css">
                        <Drawer
                            container={container}
                            variant="temporary"
                            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true, // Better open performance on mobile.
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <Drawer
                            classes={{
                            paper: classes.drawerPaper,
                            }}
                            variant="permanent"
                            open
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                </nav>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {user.role === 'BranchManager' && <>
                        <div className="row my-3">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-sm-6 my-2">
                                        <DashboardCard 
                                            average={36}
                                            title="Branches"
                                            symbol={<Apartment style={{ color: '#727CF5'}} />}
                                            percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                            color="#0adf97"
                                        />
                                    </div>
                                    <div className="col-sm-6 my-2">
                                        <DashboardCard 
                                            average={5}
                                            title="Products"
                                            symbol={<Ballot style={{ color: '#727CF5'}} />}
                                            percentage={<ArrowDownward style={{ fontSize: 18, color: '#fa5c7c', marginTop: 3}} />}
                                            color="#fa5c7c"
                                        />
                                    </div>
                                    <div className="col-sm-6 my-2">
                                        <DashboardCard 
                                            average={23}
                                            title="Expenses"
                                            symbol={<MonetizationOn style={{ color: '#727CF5'}} />}
                                            percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                            color="#0adf97"
                                        />
                                    </div>
                                    <div className="col-sm-6 my-2">
                                        <DashboardCard 
                                            average={12}
                                            title="Users"
                                            symbol={<Person style={{ color: '#727CF5'}} />}
                                            percentage={<ArrowUpward style={{ fontSize: 18, color: '#0adf97', marginTop: 3}} />}
                                            color="#0adf97"
                                        />
                                    </div>
                                </div>
                            </div> 
                            <div className="col-lg-6">
                                <div className="card border-0 my-2">
                                    <div className="card-body">
                                        <div className="clearfix mb-4">
                                            <aside className="float-left">
                                                <h6 className="mb-0" style={{ color: '#6c757d'}}>PROJECTIONS VS ACTUALS</h6>
                                                <small style={{ color: '#B5B6C5', fontSize: 12}}>
                                                </small>
                                            </aside>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <Charts width={600} height={230} />
                                        </div>      
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <Switch>
                            <Route path="/admin/branchOverview" component={BmOverview} />
                            <Route path="/admin/branchOrders" component={BmOrders} />
                            <Route path="/admin/branchExpenses" component={BmExpenses} />
                            <Route path="/admin/reports" component={Reports} />
                            <Route path="/admin/imports" component={ImportsReports} />
                            <Route path="/admin/distributions" component={DistributionsReports} />
                            <Redirect from="/admin" exact to="/admin/branchOverview" />
                        </Switch>
                    </>}
                    {user.role === 'Administrator' && <>
                        <DashboardBreadCrumb />
                        <Switch>
                            <Route path="/admin/overview" component={Overview} />
                            <Route path="/admin/products" component={Products} />
                            <Route path="/admin/branches" component={Branches} />
                            <Route path="/admin/orders" component={Order} />
                            <Route path="/admin/users" component={Users} />
                            <Route path="/admin/reports" component={Reports} />
                            <Route path="/admin/imports" component={ImportsReports} />
                            <Route path="/admin/distributions" component={DistributionsReports} />
                            <Redirect from="/admin" exact to="/admin/overview" />
                        </Switch>
                    </>}
                </main>
            </div>
        </>
    );
}
export default DashboardAdmin;
