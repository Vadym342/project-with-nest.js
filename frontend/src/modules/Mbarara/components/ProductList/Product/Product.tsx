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
    <div style={{ marginLeft: '5px', width: '200px' }}>
      <Card sx={{ maxWidth: 205, maxHeight: 230 }}>
        <CardMedia
          component="img"
          height="110"
          image="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/60c8aa05-75d0-4f03-a6a9-d651d4460932/sb-dunk-low-%E2%80%9Cwhat-the-paul%E2%80%9D-%E2%80%94-%D0%B4%D0%B0%D1%82%D0%B0-%D1%80%D0%B5%D0%BB%D0%B8%D0%B7%D0%B0.jpg"
          alt={name}
        />
        {
          discount ?
            <div style={{ position: 'absolute', top: '115px' }}>
              <button disabled style={{
                background: '#D23F57', marginLeft: '5px', border: 'none', color: 'white', fontSize: '10px',
                borderRadius: '10px'
              }}>-{discount}% off</button>
            </div>
            : ''
        }
        <CardContent>
          <Typography component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>
                <Rating name="read-only" size="small" value={value} readOnly />
              </div>
              <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center' }}>
                <FavoriteIcon className="heart" onClick={handleSetFavorite} style={heartStyle.heart} />
              </div>
            </div>
          </Typography>
          <div style={{ display: 'flex', color: '#D23F57', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
            {
              discount ?
                <>
                  <div style={{ flexGrow: 2, fontSize: '12px' }}>
                    {price - ((price * discount) / 100)}$
                  </div>
                  <div style={{ flexGrow: 2, fontSize: '12px', textDecoration: 'line-through', color: 'gray' }}>
                    {price}$
                  </div>
                </>
                : <div style={{ flexGrow: 2, fontSize: '12px' }}>
                  {price}$
                </div>
            }
            <Button onClick={handleIncreaseQuantity} style={{ padding: '0px', minWidth: '10px', height: '20px', color: '#D23F57', border: '1px solid #D23F57', borderRadius: '3px' }}>
              <AddIcon style={{ height: '15px' }} />
            </Button>
            {
              quantity > 0 ?
                <>
                  <div style={{ fontSize: '12px', flexGrow: 5, textAlign: 'center' }}>
                    {quantity}
                  </div>
                  <Button onClick={handleDecreaseQuantity} style={{ padding: '0px', minWidth: '10px', height: '20px', color: '#D23F57', border: '1px solid #D23F57', borderRadius: '3px' }}>
                    <RemoveIcon style={{ height: '15px' }} />
                  </Button>
                </>
                : ''
            }
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default Product;