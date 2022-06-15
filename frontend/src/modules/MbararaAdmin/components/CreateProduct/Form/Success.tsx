import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { AppContext } from '../Context/Context';
import { useContext } from 'react';

const Success = () => {
  const { handleClearContext } = useContext(AppContext);
  return (
    <>
      <Typography variant='h2' align='center' sx={{ py: 4 }}>
        The product was successfully created!
      </Typography>
      <Typography component='div' align='center'>
        <Button variant='outlined' onClick={handleClearContext}>Create One More</Button>
      </Typography>
    </>
  )
}

export default Success;
