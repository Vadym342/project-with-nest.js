import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import { NavLink } from 'react-router-dom';
import routes from '../../../../routes/routesPath';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

interface MenuDrawerArgs {
  isDrawerOpen: boolean,
  handleCloseDrawer: () => void,
  handleOpenDrawer: () => void,
}

const MenuDrawer = ({ isDrawerOpen, handleCloseDrawer, handleOpenDrawer }: MenuDrawerArgs) => {
  return (
    <Drawer anchor='left' open={isDrawerOpen} onClose={handleCloseDrawer}>
      <Box p={2} width='250px' textAlign={'center'} role='presentation'>
        <Typography variant='h6' component='div'>
          Menu
        </Typography>
        <List>
          <NavLink to={routes.AuthRoutes.pathToAdmin} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button key={'Dashboard'}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary={'Dashboard'} />
            </ListItem>
          </NavLink>
          <NavLink to={routes.AuthRoutes.pathToCreateProduct} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button key={'Create Product'}>
              <ListItemIcon>
                <CreateIcon />
              </ListItemIcon>
              <ListItemText primary={'Create Product'} />
            </ListItem>
          </NavLink>
          <NavLink to={routes.AuthRoutes.pathToCreateProduct} style={{ textDecoration: 'none', color: 'black' }}>
            <ListItem button key={'Users'}>
              <ListItemIcon>
                <SupervisedUserCircleIcon />
              </ListItemIcon>
              <ListItemText primary={'Users'} />
            </ListItem>
          </NavLink>
        </List>
      </Box>
    </Drawer>
  )
}

export default MenuDrawer;