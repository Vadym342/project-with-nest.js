import { ThemeProvider } from '@emotion/react';
import { createTheme, CssBaseline, Container, Paper } from '@mui/material';
import StepForm from './Form/StepForm';

const theme = createTheme();

const CreateProduct = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
        <Paper
          variant='outlined'
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <StepForm />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default CreateProduct;
