import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import { ShoppingBag } from '@mui/icons-material';
import OrderItem from '../OrderItem/OrderItem';

const SidebarBox = styled('div')(({ theme }) => ({
  width: '100%',
  background: '#F6F9FC',
  height: '100vh',
  color: '#0f3460',
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
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginLeft: '15px' }}>
            <ShoppingBag />
          </div>
          <div>
            3 item
          </div>
        </div>
        <div>
          <OrderItem />
          <OrderItem />
        </div>
      </List>

    </SidebarBox>
  );
}

export default Sidebar;