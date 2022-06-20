import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { consts } from '../../../../../consts/consts';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hook';
import {
  deleteOrderItem,
  orderItemsSelector,
  setOrderItems,
  updateOrderItem,
} from '../../../../../redux';
import Quantity from '../../../../../shared/Buttons/Quantity';

interface OrderItemArgs {
  id: number;
  name: string;
  orderedPrice: number;
  quantityInc: number;
  image: string;
}
const OrderItem = ({
  id,
  name,
  image,
  orderedPrice,
  quantityInc,
}: OrderItemArgs) => {
  const dispatch = useAppDispatch();
  const orderItems = useAppSelector(orderItemsSelector);
  const [quantity, setQuantity] = useState<number>(quantityInc);

  const handleDeleteItem = () => {
    dispatch(deleteOrderItem(id));
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
    if (orderItems.length === 0) {
      dispatch(
        setOrderItems({
          productId: id,
          orderedPrice,
          quantity: quantity + 1,
        })
      );
    } else {
      for (let obj of orderItems) {
        if (obj.productId === id) {
          dispatch(
            updateOrderItem({
              productId: id,
              orderedPrice,
              quantity: quantity + 1,
            })
          );
        }
        if (obj.productId !== id) {
          dispatch(deleteOrderItem(id));
          dispatch(
            setOrderItems({
              productId: id,
              orderedPrice,
              quantity: quantity + 1,
            })
          );
        }
      }
    }
  };
  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      for (let obj of orderItems) {
        if (obj.productId === id) {
          if (obj.quantity > 1) {
            dispatch(
              updateOrderItem({
                productId: id,
                orderedPrice,
                quantity: quantity - 1,
              })
            );
          } else {
            dispatch(deleteOrderItem(id));
          }
        }
      }
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '5px',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ flexGrow: 1, marginLeft: '10px' }}>
          <Quantity
            quantity={quantity}
            handleIncreaseQuantity={handleIncreaseQuantity}
            handleDecreaseQuantity={handleDecreaseQuantity}
          />
        </div>
      </div>
      <div style={{ flexGrow: 1 }}>
        <img
          style={{ height: '50px', width: '80px', marginLeft: '20px' }}
          src={`${consts.bucketUrl}${image}`}
          alt='photo'
        />
      </div>
      <div
        style={{
          flexGrow: 1,
          marginLeft: '8px',
          fontSize: '10px',
          width: '70px',
        }}
      >
        <div>{name.length > 15 ? `${name.substr(0, 15)}...` : name}</div>
        <div style={{ fontSize: '8px', marginTop: '5px' }}>
          {orderedPrice} x {quantity}
        </div>
        <div style={{ marginTop: '5px' }}>{orderedPrice * quantity}</div>
      </div>
      <div style={{ marginRight: '10px' }}>
        <CloseIcon onClick={handleDeleteItem} />
      </div>
    </div>
  );
};

export default OrderItem;
