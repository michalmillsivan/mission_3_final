import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from 'react-router-dom';
import { routes } from '../../App';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (

    <div >
      <Drawer
        sx={{
          width: drawerWidth,
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar><h3>menu</h3></Toolbar>


        <Divider />
        <List>
          {routes.map((route) => (
            <ListItem key={route.lable} disablePadding>
              <Link style={{ color: "black", textDecoration: "none" }} to={route.path}>
                <ListItemButton>
                  <ListItemText primary={route.lable} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}

        </List>

      </Drawer>

      <main style={{ marginLeft: 100 }}>
        <Outlet />
      </main>
    </div>

  );
}