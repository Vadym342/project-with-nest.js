import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import { Box } from '@mui/material';
import productStyle from './productStyle';

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

  const [value, setValue] = useState<number | null>(rating);
  const [isFavoriteP, setIsFavorite] = useState<boolean | null>(isFavorite || false);
  const [quantity, setQuantity] = useState<number>(0);
  const heartStyle = {
    heart: {
      color: isFavoriteP ? "red" : "gray",
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

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  }
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  }


  return (
    <Box sx={productStyle.MainBox}>
      <Card sx={productStyle.Card}>
        <CardMedia
          component="img"
          height="110"
          image="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/60c8aa05-75d0-4f03-a6a9-d651d4460932/sb-dunk-low-%E2%80%9Cwhat-the-paul%E2%80%9D-%E2%80%94-%D0%B4%D0%B0%D1%82%D0%B0-%D1%80%D0%B5%D0%BB%D0%B8%D0%B7%D0%B0.jpg"
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
          <Typography component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <div style={productStyle.RatingBlock as React.CSSProperties}>
              <div>
                <Rating name="read-only" size="small" value={value} readOnly />
              </div>
              <div style={productStyle.HeartBlock as React.CSSProperties}>
                <FavoriteIcon className="heart" onClick={handleSetFavorite} style={heartStyle.heart} />
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
            <Button onClick={handleIncreaseQuantity} style={productStyle.CardBtn}>
              <AddIcon style={productStyle.CardIcon} />
            </Button>
            {
              quantity > 0 ?
                <>
                  <div style={productStyle.QuantityText as React.CSSProperties}>
                    {quantity}
                  </div>
                  <Button onClick={handleDecreaseQuantity} style={productStyle.CardBtn}>
                    <RemoveIcon style={productStyle.CardIcon} />
                  </Button>
                </>
                : ''
            }
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Product;