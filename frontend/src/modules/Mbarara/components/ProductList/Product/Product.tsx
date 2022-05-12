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

const Product = () => {
  const [value, setValue] = React.useState<number | null>(2);

  return (
    <Card sx={{ maxWidth: 205, maxHeight: 230 }}>
      <CardMedia
        component="img"
        height="110"
        image="https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/60c8aa05-75d0-4f03-a6a9-d651d4460932/sb-dunk-low-%E2%80%9Cwhat-the-paul%E2%80%9D-%E2%80%94-%D0%B4%D0%B0%D1%82%D0%B0-%D1%80%D0%B5%D0%BB%D0%B8%D0%B7%D0%B0.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography component="div">
          Nike dunk low
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <Rating name="read-only" size="small" value={value} readOnly />
        </Typography>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <div style={{ flexGrow: 2, fontSize: '12px', color: '#D23F57' }}>
            2555$
          </div>
          <div style={{ flexGrow: 2, fontSize: '12px', textDecoration: 'line-through', color: 'gray' }}>
            3443$
          </div>
          <Button style={{ padding: '0px', minWidth: '10px', height: '20px', color: '#D23F57', border: '1px solid #D23F57', borderRadius: '3px' }}>
            <AddIcon style={{ height: '15px' }} />
          </Button>
          <div style={{ flexGrow: 5, fontSize: '12px', textAlign: 'center' }}>
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