import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { valRequired } from '../../consts/validationPropertiesForFields';
import validationStyle from '../../consts/styles/validation';

type FormValues = {
  name: string;
};

const CreateOrder = (): JSX.Element => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const [orderForm, setOrderForm] = useState({
    name: '',
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Order
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="Name"
            label="Name"
            autoComplete="Name"
            autoFocus
            {...register('name', valRequired)}
            onChange={e =>
              setOrderForm({
                ...orderForm,
                name: e.target.value,
              })
            }
          />
          <div style={validationStyle.textBlock}>
            {errors?.name && (
              <p>{errors?.name?.message || 'Error, try again'}</p>
            )}
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Order
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default CreateOrder;
