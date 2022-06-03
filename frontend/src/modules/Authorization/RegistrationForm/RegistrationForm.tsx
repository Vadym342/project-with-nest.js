import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import validationStyle from '../../../consts/styles/validation';
import { valRequired } from '../../../consts/validationPropertiesForFields';
import OutlinedInput from '@mui/material/OutlinedInput';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import authFormsStyle from '../../../consts/styles/authFormsStyle';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../../redux/requests/userRequest';
import { Link, useNavigate } from 'react-router-dom';

type FormValues = {
  email: string;
  password: string;
  name: string;
  showPassword: boolean;
};

const RegistrationForm = () => {
  const history = useNavigate();
  const [createUser, { data, loading }] = useMutation(CREATE_USER);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const [registerForm, setRegisterForm] = useState({
    email: '',
    password: '',
    name: '',
    showPassword: false,
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    createUser({
      variables: {
        name: data.name,
        email: data.email,
        password: data.password
      }
    });
    history('/login');
  };

  const handleChange =
    (prop: keyof FormValues) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setRegisterForm({ ...registerForm, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setRegisterForm({
      ...registerForm,
      showPassword: !registerForm.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  return (
    <Box>
      <CssBaseline />
      <Box
        sx={authFormsStyle.FormBox}
      >
        <div style={{ fontWeight: 600, }}>
          Create Your Account
        </div>
        <div>
          Please fill all fields to continue
        </div>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <div>
            <div style={authFormsStyle.FieldLabel as React.CSSProperties}>
              <label style={authFormsStyle.FieldLabelText}>Name:</label>
            </div>
            <OutlinedInput placeholder="Vasyan"
              style={authFormsStyle.Field}
              sx={{
                '& .MuiOutlinedInput-input': authFormsStyle.FieldOverride
              }}
              {...register('name', valRequired)}
              onChange={e =>
                setRegisterForm({
                  ...registerForm,
                  name: e.target.value,
                })
              } />
          </div>
          <div style={validationStyle.textBlock}>
            {errors?.name && (
              <p>{errors?.name?.message || 'Error, try again'}</p>
            )}
          </div>
          <div style={authFormsStyle.IntervalBtwnField}>
            <div style={authFormsStyle.FieldLabel as React.CSSProperties}>
              <label style={authFormsStyle.FieldLabelText}>Email:</label>
            </div>
            <OutlinedInput placeholder="example@gmail.com"
              style={authFormsStyle.Field}
              sx={{
                '& .MuiOutlinedInput-input': authFormsStyle.FieldOverride
              }}
              {...register('email', valRequired)}
              onChange={e =>
                setRegisterForm({
                  ...registerForm,
                  email: e.target.value,
                })
              } />
          </div>
          <div style={validationStyle.textBlock}>
            {errors?.email && (
              <p>{errors?.email?.message || 'Error, try again'}</p>
            )}
          </div>
          <div style={authFormsStyle.IntervalBtwnField}>
            <div style={authFormsStyle.FieldLabel as React.CSSProperties}>
              <label style={authFormsStyle.FieldLabelText}>Password:</label>
            </div>
            <OutlinedInput
              id="outlined-adornment-password"
              type={registerForm.showPassword ? 'text' : 'password'}
              style={authFormsStyle.Field}
              sx={{
                '& .MuiOutlinedInput-input': authFormsStyle.FieldOverride
              }}
              value={registerForm.password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {registerForm.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              {...register('password', valRequired)}
              onChange={e => {
                handleChange('password')
                setRegisterForm({
                  ...registerForm,
                  password: e.target.value,
                })
              }
              }
            />
          </div>
          <div style={validationStyle.textBlock}>
            {errors?.password && (
              <p>{errors?.password?.message || 'Error, try again'}</p>
            )}
          </div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, background: '#d23f57' }}
          >
            Create Account
          </Button>
          <div style={{ textAlign: 'center', fontSize: '14px' }}>
            Sign in to existing account
            <Link to='/login'> Sign In</Link>
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default RegistrationForm;