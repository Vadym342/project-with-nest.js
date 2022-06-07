import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useCallback, useState } from 'react';
import { Box } from '@mui/material';
import productStyle from './productStyle';
import Quantity from '../../../../../shared/Buttons/Quantity';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hook';
import { deleteOrderItem, orderItemsSelector, setOrderItems, updateOrderItem } from '../../../../../redux';

interface ProductArgs {
  id: number;
  name: string;
  price: number;
  rating: number;
  discount: number;
  image: string;
  isFavorite: boolean;
};

const Product = ({ id, name, price, rating, isFavorite, discount, image }: ProductArgs) => {
  const dispatch = useAppDispatch();
  const orderItems = useAppSelector(orderItemsSelector);

  const handleCount = (id: number) => {
    for (let obj of orderItems) {
      if (obj.productId === id) {
        return obj.quantity;
      }
    }
  }
  const count = handleCount(id);

  const [value, setValue] = useState<number | null>(rating);
  const [quantity, setQuantity] = useState<number>(0 | count);
  const [isFavoriteP, setIsFavorite] = useState<boolean | null>(isFavorite || false);

  const heartStyle = {
    heart: {
      color: isFavoriteP ? 'red' : 'gray',
      height: '17px',
    }
  };

  const handleSetFavorite = () => {
    if (!isFavoriteP) {
      setIsFavorite(true);
    }
    else {
      setIsFavorite(false);
    }
  }

  const handleIncreaseQuantity = useCallback(() => {
    setQuantity(quantity + 1);
    if (orderItems.length === 0) {
      dispatch(setOrderItems({
        productId: id,
        orderedPrice: price,
        quantity: quantity + 1
      }))
    } else {
      for (let obj of orderItems) {
        if (obj.productId === id) {
          dispatch(updateOrderItem({
            productId: id,
            orderedPrice: price,
            quantity: quantity + 1
          }))
        }
        if (obj.productId !== id) {
          dispatch(deleteOrderItem(id))
          dispatch(setOrderItems({
            productId: id,
            orderedPrice: price,
            quantity: quantity + 1
          }))
        }
      }
    }
  }, [quantity])
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
    for (let obj of orderItems) {
      if (obj.productId === id) {
        if (obj.quantity > 1) {
          dispatch(updateOrderItem({
            productId: id,
            orderedPrice: price,
            quantity: quantity - 1
          }))
        } else {
          dispatch(deleteOrderItem(id))
        }

      }
    }
  }

  return (
    <Box sx={productStyle.MainBox}>
      <Card sx={productStyle.Card}>
        <CardMedia
          component='img'
          height='110'
          image={`https://shopimages54643.s3.eu-west-2.amazonaws.com/${image}`}
          alt={name}
        />
        {
          discount ?
            <div style={productStyle.DiscoundBlock as React.CSSProperties}>
              <button disabled style={productStyle.DiscoundBtn}>-{discount}% off</button>
            </div>
            : ''
        }
        <CardContent>
          <Typography component='div'>
            {name}
          </Typography>
          <Typography gutterBottom variant='h5' component='div'>
            <div style={productStyle.RatingBlock as React.CSSProperties}>
              <div>
                <Rating name='read-only' size='small' value={value} readOnly />
              </div>
              <div style={productStyle.HeartBlock as React.CSSProperties}>
                <FavoriteIcon className='heart' onClick={handleSetFavorite} style={heartStyle.heart} />
              </div>
            </div>
          </Typography>
          <div style={productStyle.PriceBlock as React.CSSProperties}>
            {
              discount ?
                <>
                  <div style={productStyle.PriceDiscText}>
                    {price - ((price * discount) / 100)}$
                  </div>
                  <div style={productStyle.PriceText}>
                    {price}$
                  </div>
                </>
                : <div style={productStyle.PriceDiscText}>
                  {price}$
                </div>
            }
            <Quantity
              quantity={quantity}
              handleIncreaseQuantity={handleIncreaseQuantity}
              handleDecreaseQuantity={handleDecreaseQuantity}
            />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Product;