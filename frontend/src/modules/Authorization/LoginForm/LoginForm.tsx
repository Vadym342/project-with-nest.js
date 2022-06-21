import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import validationStyle from '../../../consts/styles/validation';
import { valRequired } from '../../../consts/validationPropertiesForFields';
import OutlinedInput from '@mui/material/OutlinedInput';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { InputAdornment, IconButton } from '@mui/material';
import authFormsStyle from '../../../consts/styles/authFormsStyle';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../../redux/requests/userRequest';
import { useAppDispatch } from '../../../hooks/hook';
import { setUser } from '../../../redux';

type FormValues = {
  email: string;
  password: string;
  showPassword: boolean;
};

interface LoginFormArgs {
  handleMenuClose?: (event: React.MouseEvent<HTMLElement>) => void;
}

const LoginForm = ({ handleMenuClose }: LoginFormArgs) => {
  const dispatch = useAppDispatch();
  const history = useNavigate();
  const [login, { data, loading, error }] = useMutation(LOGIN);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
    showPassword: false,
  });
  const [logError, setLogError] = useState('');

  const onSubmit: SubmitHandler<FormValues> = data => {
    login({
      variables: {
        username: data.email,
        password: data.password,
      },
    });
  };

  useEffect(() => {
    if (error) {
      setLogError('Invalid email or password.');
    } else {
      if (data) {
        setLogError('');
        const user = {
          token: data.login.accessToken,
          user: {
            ...data.login.user,
          },
        };
        dispatch(setUser(user));
        localStorage.setItem('user', JSON.stringify(user));
        history('/', {
          replace: false
        });
      }
    }
  }, [data, error]);

  const handleChange =
    (prop: keyof FormValues) =>
      (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [prop]: event.target.value });
      };

  const handleClickShowPassword = () => {
    setLoginForm({
      ...loginForm,
      showPassword: !loginForm.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box>
      <CssBaseline />
      <Box sx={authFormsStyle.FormBox}>
        <div style={{ fontWeight: 600 }}>Welcome To Mbarara</div>
        <div>Login</div>
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <div>
            <div style={authFormsStyle.FieldLabel as React.CSSProperties}>
              <label style={authFormsStyle.FieldLabelText}>Email:</label>
            </div>
            <OutlinedInput
              placeholder='example@gmail.com'
              style={authFormsStyle.Field}
              sx={{
                '& .MuiOutlinedInput-input': authFormsStyle.FieldOverride,
              }}
              {...register('email', valRequired)}
              onChange={e =>
                setLoginForm({
                  ...loginForm,
                  email: e.target.value,
                })
              }
            />
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
              id='outlined-adornment-password'
              type={loginForm.showPassword ? 'text' : 'password'}
              style={authFormsStyle.Field}
              sx={{
                '& .MuiOutlinedInput-input': authFormsStyle.FieldOverride,
              }}
              value={loginForm.password}
              endAdornment={
                <InputAdornment position='end'>
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge='end'
                  >
                    {loginForm.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              {...register('password', valRequired)}
              onChange={e => {
                handleChange('password');
                setLoginForm({
                  ...loginForm,
                  password: e.target.value,
                });
              }}
            />
          </div>
          <div style={validationStyle.textBlock}>
            {errors?.password && (
              <p>{errors?.password?.message || 'Error, try again'}</p>
            )}
          </div>
          <div>
            {logError && (
              <p style={{ fontSize: '13px', color: 'red' }}>{logError}</p>
            )}
          </div>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2, background: '#d23f57' }}
          >
            Login
          </Button>
        </Box>
        <div style={{ textAlign: 'center', fontSize: '14px' }}>
          Don't have account?
          <Link to='/registration'> Sign Up</Link>
        </div>
        <Box
          style={authFormsStyle.IntervalBtwnField}
          sx={{ textAlign: 'center', fontSize: '14px' }}
        >
          Forgot your password?
          <Link to='/login'> Reset It</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
