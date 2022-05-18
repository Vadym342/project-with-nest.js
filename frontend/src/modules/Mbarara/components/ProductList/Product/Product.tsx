import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { borderRadius } from '@mui/system';

interface ProductArgs {
  id: number;
  name: string;
  price: number;
  rating: number;
  discount: number;
  image: string;
};

const Product = ({ id, name, price, rating, discount, image }: ProductArgs) => {

  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Card sx={{ maxWidth: 205, maxHeight: 230 }}>
      <CardMedia
        component="img"
        height="110"
        image="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/60c8aa05-75d0-4f03-a6a9-d651d4460932/sb-dunk-low-%E2%80%9Cwhat-the-paul%E2%80%9D-%E2%80%94-%D0%B4%D0%B0%D1%82%D0%B0-%D1%80%D0%B5%D0%BB%D0%B8%D0%B7%D0%B0.jpg"
        alt={name}
      />
      <div style={{ position: 'absolute', top: '115px' }}>
        <button disabled style={{
          background: '#D23F57', marginLeft: '5px', border: 'none', color: 'white', fontSize: '10px',
          borderRadius: '10px'
        }}>-20% off</button>
      </div>
      <CardContent>
        <Typography component="div">
          Nike dunk low
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
              <Rating name="read-only" size="small" value={value} readOnly />
            </div>
            <div style={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignSelf: 'center' }}>
              <FavoriteIcon style={{ color: 'red', height: '17px' }} />
            </div>
          </div>
        </Typography>
        <div style={{ display: 'flex', color: '#D23F57', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <div style={{ flexGrow: 2, fontSize: '12px' }}>
            2555$
          </div>
          <div style={{ flexGrow: 2, fontSize: '12px', textDecoration: 'line-through', color: 'gray' }}>
            3443$
          </div>
          <Button style={{ padding: '0px', minWidth: '10px', height: '20px', color: '#D23F57', border: '1px solid #D23F57', borderRadius: '3px' }}>
            <AddIcon style={{ height: '15px' }} />
          </Button>
          <div style={{ fontSize: '12px', flexGrow: 5, textAlign: 'center' }}>
            3
          </div>
          <Button style={{ padding: '0px', minWidth: '10px', height: '20px', color: '#D23F57', border: '1px solid #D23F57', borderRadius: '3px' }}>
            <RemoveIcon style={{ height: '15px' }} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Product;