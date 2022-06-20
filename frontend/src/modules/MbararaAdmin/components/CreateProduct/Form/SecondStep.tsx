import { useCallback, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AppContext } from '../Context/Context';

const SecondStep = () => {
  const {
    formValues,
    handleChange,
    handleBack,
    handleNext,
    variant,
    margin
  } = useContext(AppContext)
  const { brand, model, description, feature, producer } = formValues;

  const isError = useCallback(
    () =>
      Object.keys({ brand, model, description, feature, producer }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, brand, model, description, feature, producer]
  );

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Brand'
            name='brand'
            placeholder='Brand'
            value={brand.value}
            onChange={handleChange}
            error={!!brand.error}
            helperText={brand.error}
            required={brand.required}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Model'
            name='model'
            placeholder='Model'
            value={model.value}
            onChange={handleChange}
            error={!!model.error}
            helperText={model.error}
            required={model.required}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Feature'
            name='feature'
            placeholder='Feature'
            value={feature.value}
            onChange={handleChange}
            error={!!feature.error}
            helperText={feature.error}
            required={feature.required}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Producer'
            name='producer'
            placeholder='Producer'
            value={producer.value}
            onChange={handleChange}
            error={!!producer.error}
            helperText={producer.error}
            required={producer.required}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label='Description'
            name='description'
            placeholder='Description'
            value={description.value}
            onChange={handleChange}
            error={!!description.error}
            helperText={description.error}
            required={description.required}
          />
        </Grid>

      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button onClick={handleBack} sx={{ mr: 1 }}>
          Back
        </Button>
        <Button
          variant='contained'
          disabled={isError()}
          color='primary'
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  )
}

export default SecondStep;
