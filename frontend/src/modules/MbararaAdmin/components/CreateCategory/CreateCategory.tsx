import { useMutation } from '@apollo/client';
import { Button, Container, Grid, Box, Paper, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import validationStyle from '../../../../consts/styles/validation';
import { valRequired } from '../../../../consts/validationPropertiesForFields';
import { CREATE_CATEGORY } from '../../../../redux/requests/mainReuqest';

type FormValues = {
  name: string
};

const CreateCategory = () => {
  const [createCategory, { data, loading, error }] = useMutation(CREATE_CATEGORY);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({
    mode: 'onBlur',
  });

  const [categoryForm, setCategoryForm] = useState({
    name: '',
  });

  const onSubmit: SubmitHandler<FormValues> = data => {
    createCategory({
      variables: {
        name: categoryForm.name
      }
    })
  };

  useEffect(() => {
    if(error){
      console.log(JSON.stringify(error, null, 2));
    }

  }, [data])

  return (
    <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        sx={{ mt: 1 }}
      >
        <Paper
          variant='outlined'
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography variant='h6' align='center'>
            Create Category
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant='standard'
                margin='normal'
                fullWidth
                label='Category Name'
                placeholder='Category Name'
                {...register('name', valRequired)}
                onChange={e =>
                  setCategoryForm({
                    ...categoryForm,
                    name: e.target.value,
                  })
                }
              />
              <div style={validationStyle.textBlock}>
                {errors?.name && (
                  <p>{errors?.name?.message || 'Error, try again'}</p>
                )}
              </div>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              variant='contained'
              color='primary'
              sx={{ mt: 3, ml: 1 }}
            >
              Create
            </Button>
          </Grid>
        </Paper>
      </Box>
    </Container>
  )
}

export default CreateCategory;