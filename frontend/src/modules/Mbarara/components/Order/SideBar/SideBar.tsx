import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';

const SidebarBox = styled('div')(({ theme }) => ({
  width: '100%',
  background: 'white',
  height: '100vh',
  right: 0,
  position: 'absolute',
  boxShadow: '-5px 0px 5px 0px #aaaaaa',
  zIndex: 10
}));

interface OrderMenuArgs {
  orderAnchorEl: Element | ((element: Element) => Element) | null | undefined;
  isOrderMenuOpen: boolean;
  handleOrderMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
}
const Sidebar = ({ orderAnchorEl, isOrderMenuOpen, handleOrderMenuClose }: OrderMenuArgs) => {
  return (
    <SidebarBox style={{ width: '300px' }} >
      <List component="nav">
        <ListItem button onClick={() => { }}>
          <div>
            fdfldfF
          </div>
        </ListItem>
      </List>

    </SidebarBox>
  );
}

export default Sidebar;