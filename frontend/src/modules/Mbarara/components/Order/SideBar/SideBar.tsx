import List from '@mui/material/List';
import { ShoppingBag } from '@mui/icons-material';
import OrderItem from '../OrderItem/OrderItem';
import Button from '@mui/material/Button';
import { useAppSelector } from '../../../../../hooks/hook';
import { orderItemsSelector } from '../../../../../redux';
import { GET_PRODUCTS_BY_IDS } from '../../../../../redux/requests/orderRequest';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { Box, Drawer } from '@mui/material';

interface OrderMenuArgs {
  orderAnchorEl: Element | ((element: Element) => Element) | null | undefined;
  isOrderMenuOpen: boolean;
  handleOrderMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
}

interface orderItemsArgs {
  productId: number;
  orderedPrice: number;
  quantity: number;
}
interface getProductsByArrayIdsArgs {
  id: number;
  name: string;
  image: string;
  price: number;
}

const Sidebar = ({
  orderAnchorEl,
  isOrderMenuOpen,
  handleOrderMenuClose,
}: OrderMenuArgs) => {
  const orderItems = useAppSelector(orderItemsSelector);
  const [orderMappedItems, setOrderMappedItems] = useState<any>();

  const handleMapOrderItems = (action: string) => {
    const tmpArrIds = [];
    let sum = 0;
    for (const obj of orderItems) {
      tmpArrIds.push(obj.productId);
      sum += obj.orderedPrice * obj.quantity;
    }
    if (action === 'ids') {
      return tmpArrIds;
    }
    if (action === 'sum') {
      return sum;
    }
  };

  const handleCheckout = () => {
    console.log(orderMappedItems);
  };

  const sum = handleMapOrderItems('sum');
  const arrayOfIds = handleMapOrderItems('ids');

  const { data, error, loading } = useQuery(GET_PRODUCTS_BY_IDS, {
    variables: {
      arrayIds: arrayOfIds,
    },
  });

  useEffect(() => {
    if (data) {
      const result = data.getProductsByArrayIds.map(
        (t1: getProductsByArrayIdsArgs) => ({
          ...t1,
          ...orderItems.find((t2: orderItemsArgs) => t2.productId === t1.id),
        })
      );
      setOrderMappedItems(result);
    }
  }, [data]);

  return (
    <Drawer
      anchor='right'
      open={isOrderMenuOpen}
      onClose={handleOrderMenuClose}
    >
      <Box p={2} width='300px' textAlign={'center'} role='presentation'>
        <List component='nav'>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginLeft: '15px',
            }}
          >
            <div>
              <ShoppingBag />
            </div>
            <div>{orderItems.length} item</div>
          </div>

          <div
            style={
              orderItems.length > 4
                ? { height: '250px', overflow: 'scroll' }
                : {}
            }
          >
            {orderMappedItems?.map((orderItem: any) => (
              <OrderItem
                key={orderItem.id}
                id={orderItem.id}
                name={orderItem.name}
                image={orderItem.image}
                orderedPrice={orderItem.orderedPrice}
                quantityInc={orderItem.quantity}
              />
            ))}
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              height: '10vh',
              marginLeft: '15px',
              marginRight: '15px',
            }}
          >
            <div
              style={{
                marginTop: 'auto',
                paddingBottom: '20px',
                height: '50px',
              }}
            >
              <Button
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  background: '#d23f57',
                  color: 'white',
                  fontSize: '12px',
                  marginRight: '15px',
                  '&:hover': {
                    backgroundColor: '#b5384d',
                  },
                }}
                onClick={handleCheckout}
              >
                Checkout Now (${Number(sum).toFixed(2)})
              </Button>
              <Button
                fullWidth
                sx={{
                  mt: 3,
                  mb: 2,
                  background: 'white',
                  border: '1px solid #d23f57',
                  fontSize: '12px',
                  color: '#d23f57',
                  marginTop: '-10px',
                }}
              >
                View Cart
              </Button>
            </div>
          </div>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
