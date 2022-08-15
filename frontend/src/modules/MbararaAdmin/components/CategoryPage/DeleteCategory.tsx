import { useMutation, useQuery } from "@apollo/client";
import { Box, Paper, Typography, Grid, TextField, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
import { DELETE_CATEGORY, GET_CATEGORIES } from "../../../../redux/requests/mainReuqest";

const DeleteCategory = () => {
  const [categoryId, setCategoryId] = useState('');

  const { data, error, loading } = useQuery(GET_CATEGORIES);
  const [deleteCategory, {
    data: deleteCategoryData,
    loading: deleteCategoryLoading,
    error: deleteCategoryError }] = useMutation(DELETE_CATEGORY);

  const handleChange = (event: SelectChangeEvent) => {
    setCategoryId(event.target.value as string);
  };

  const handleDeleteCategory = () => {
    deleteCategory(({
      variables: {
        id: categoryId
      }
    }))
  };

  if (error) return <div>Error Page</div>;

  if (loading) return <div>Spinner...</div>;

  if (deleteCategoryError) return <div>Error Page</div>;

  if (deleteCategoryLoading) return <div>Spinner...</div>;

  const categories = data.getAllCategories;

  return (
    <Box
      sx={{ mt: 1 }}
    >
      <Paper
        variant='outlined'
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
      >
        <Typography variant='h6' align='center'>
          Delete Category
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Category"
                value={categoryId}
                onChange={handleChange}
              >
                {categories.map((category: any) => (
                  <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button
            variant='contained'
            color='primary'
            sx={{ mt: 3, ml: 1 }}
            onClick={handleDeleteCategory}
          >
            Delete
          </Button>
        </Grid>
      </Paper>
    </Box>
  )
}

export default DeleteCategory;


