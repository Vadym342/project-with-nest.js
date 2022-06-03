import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';

const SidebarBox = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '360px',
  backgroundColor: theme.palette.background.paper,
}));

interface OrderMenuArgs {
  orderAnchorEl: Element | ((element: Element) => Element) | null | undefined;
  isOrderMenuOpen: boolean;
  handleOrderMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
}
const Sidebar = ({ orderAnchorEl, isOrderMenuOpen, handleOrderMenuClose }: OrderMenuArgs) => {
  return (
    <SidebarBox style={{ width: '300px' }}>
      <Menu
        anchorEl={orderAnchorEl}
        open={isOrderMenuOpen}
        onClose={handleOrderMenuClose}
      >
        <List component="nav">
          <ListItem button onClick={() => { }}>
            <div>
              fdfldfF
            </div>
          </ListItem>
        </List>
      </Menu>
    </SidebarBox>
  );
}

export default Sidebar;