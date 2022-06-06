import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import { ShoppingBag } from '@mui/icons-material';
import OrderItem from '../OrderItem/OrderItem';
import Button from '@mui/material/Button';

const SidebarBox = styled('div')(({ theme }) => ({
  width: '100%',
  background: '#F6F9FC',
  height: '86vh',
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
      <List component='nav'>
        <div style={{ display: 'flex', flexDirection: 'row', marginLeft: '15px' }}>
          <div>
            <ShoppingBag />
          </div>
          <div>
            3 item
          </div>
        </div>
        <div style={{ height: '250px', overflow: 'scroll' }}>
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '10vh',
          marginLeft: '15px',
          marginRight: '15px'
        }}>
          <div style={{
            marginTop: 'auto',
            paddingBottom: '20px',
            height: '50px'
          }}>
            <Button
              fullWidth
              sx={{
                mt: 3, mb: 2, background: '#d23f57',
                color: 'white',
                fontSize: '12px',
                marginRight: '15px',
                '&:hover': {
                  backgroundColor: '#b5384d'
                },
              }}
            >
              Checkout Now ($1234)
            </Button>
            <Button
              fullWidth
              sx={{
                mt: 3, mb: 2, background: 'white',
                border: '1px solid #d23f57',
                fontSize: '12px',
                color: '#d23f57', marginTop: '-10px'
              }}
            >
              View Cart
            </Button>
          </div>
        </div>
      </List>
    </SidebarBox >
  );
}

export default Sidebar;