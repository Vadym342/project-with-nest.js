import { Checkbox, FormControlLabel, FormGroup, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import NumberFormat, { InputAttributes } from 'react-number-format';

interface CustomProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

const NumberFormatCustom = React.forwardRef<
  NumberFormat<InputAttributes>,
  CustomProps>
  (function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
        thousandSeparator
        isNumericString
        prefix='$'
      />
    );
  });

interface State {
  startPrice: string;
  endPrice: string;
}

const ProductListOptions = () => {

  const [priceRange, setPriceRange] = useState<State>({
    startPrice: '0',
    endPrice: '1000',
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange({
      ...priceRange,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div style={{
      height: '1000px', display: 'flex', borderRadius: '8px', width: '250px', background: 'white',
      flexDirection: 'column', marginLeft: '20px'
    }}>
      <div style={{ marginLeft: '15px', marginTop: '10px', marginRight: '15px' }}>

        <div style={{ margin: '5px', fontWeight: 500 }}>
          Price Range
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>

          <div>
            <TextField
              value={priceRange.startPrice}
              onChange={handleChange}
              name='startPrice'
              id='formatted-numberformat-input'
              InputProps={{
                inputComponent: NumberFormatCustom as any,
              }}
              variant='standard'
            />
          </div>
          <div style={{ margin: '5px' }}>
            -
          </div>
          <div>
            <TextField
              value={priceRange.endPrice}
              onChange={handleChange}
              name='endPrice'
              id='formatted-numberformat-input'
              InputProps={{
                inputComponent: NumberFormatCustom as any,
              }}
              variant='standard'
            />
          </div>
        </div>

        <div>
          <div style={{ margin: '5px', fontWeight: 500 }}>
            Brand
          </div>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label='Adidas' />
            <FormControlLabel control={<Checkbox />} label='Nike' />
            <FormControlLabel control={<Checkbox />} label='Puma' />
            <FormControlLabel control={<Checkbox />} label='Reebok' />
          </FormGroup>
        </div>

        <div>
          <div style={{ margin: '5px', fontWeight: 500 }}>
            Rating
          </div>
          <Typography component='legend'>Read only</Typography>
          <Rating name='read-only' value={5} readOnly />
          <Typography component='legend'>Disabled</Typography>
          <Rating name='disabled' value={3} disabled />
          <Typography component='legend'>No rating given</Typography>
          <Rating name='no-value' value={null} />
        </div>
      </div>
    </div>
  )
}

export default ProductListOptions;