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
import { gql, useQuery } from '@apollo/client';
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

const GET_IMG = gql`
query{
   getImage(key: "7c6809a0-e973-4676-89af-6fa5cb852d2f")
}
`
const Product = ({ id, name, price, rating, isFavorite, discount, image }: ProductArgs) => {

  const { data, error, loading } = useQuery(GET_IMG);

  const [value, setValue] = useState<number | null>(rating);
  const [quantity, setQuantity] = useState<number>(0);
  const [isFavoriteP, setIsFavorite] = useState<boolean | null>(isFavorite || false);
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