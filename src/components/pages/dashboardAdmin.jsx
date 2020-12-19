import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Menu, Business, LocalAtm, ImportantDevices, SupervisedUserCircle, ViewQuilt, Dashboard } from '@material-ui/icons';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import DashboardNavbar from '../common/dashboardNavbar';
import DashboardCard from '../common/dashboardCard';
import DashboardBreadCrumb from '../common/dashboardBreadCrumb';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Overview from '../overview';
import Products from '../products';
import Branches from '../branches';

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
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: '#313A46',
      color: '#fff'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);


const DashboardAdmin = (props) => {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <List>
                
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
                <NavLink to="/admin/expenses" className="nav-link">
                    <ListItem>
                        <ListItemIcon>
                            <ViewQuilt style={{ color: '#fff', fontSize: 30}} />
                        </ListItemIcon>
                        <ListItemText primary="Orders" style={{ color: '#F4F5F6'}} />
                    </ListItem>
                </NavLink>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
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
                    <div style={{ flexGrow: 1}}>
                        
                    </div>
                    <div>
                        <DashboardNavbar path="/adminBM" />
                    </div>
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
                <DashboardBreadCrumb />
                <div className="row my-3">
                    <div className="col-xl-3 my-2 col-sm-6">
                        <DashboardCard title="Branches" symbol={<Business style={{ color: '#727CF5'}} />} />
                    </div>
                    <div className="col-xl-3 my-2 col-sm-6">
                        <DashboardCard title="Expenses" symbol={<LocalAtm style={{ color: '#727CF5'}} />} />
                    </div>
                    <div className="col-xl-3 my-2 col-sm-6">
                        <DashboardCard title="Users" symbol={<SupervisedUserCircle style={{ color: '#727CF5'}} />} />
                    </div>
                    <div className="col-xl-3 my-2 col-sm-6">
                        <DashboardCard title="Products" symbol={<ImportantDevices style={{ color: '#727CF5'}} />} />
                    </div>
                </div>
                <Switch>
                    <Route path="/admin/overview" component={Overview} />
                    <Route path="/admin/products" component={Products} />
                    <Route path="/admin/branches" component={Branches} />
                    <Redirect from="/admin" exact to="/admin/overview" />
                </Switch>
            </main>
        </div>
    );
}
export default DashboardAdmin;
