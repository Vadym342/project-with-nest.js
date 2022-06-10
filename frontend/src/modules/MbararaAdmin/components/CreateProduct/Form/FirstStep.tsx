import React, { useCallback, useContext, useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { AppContext } from '../Context/Context'
import { useMutation, useQuery } from '@apollo/client'
import { GET_CATEGORIES } from '../../../../../redux/requests/mainReuqest'
import { PhotoCamera } from '@mui/icons-material'
import { IconButton, Stack, styled } from '@mui/material'
import { UPLOAD_IMAGE } from '../../../../../redux/requests/productRequest'

const Input = styled('input')({
  display: 'none',
});

export default function FirstStep() {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(
    AppContext
  )
  const { productName, price, discount, category, rating } = formValues

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ productName, price, discount, category, rating }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error
      ),
    [formValues, productName, price, discount, category, rating]
  )

  const { data, error, loading } = useQuery(GET_CATEGORIES);
  const categories = data?.getAllCategories;

  const [file, setFile] = useState()
  const [description, setDescription] = useState("")
  const [images, setImages] = useState([])
  const [publishPost, { data: dataImage, loading: loadingImage }] = useMutation(UPLOAD_IMAGE);
  const submit = async (event: any) => {
    event.preventDefault()
    publishPost({
      variables: {
        file
      }
    })
    // const result = await postImage({ image: file, description })
    //setImages([result.image, ...images])
  }

  useEffect(() => {
    if (dataImage) {
      console.log(dataImage);
    }

  }, [dataImage])

  const fileSelected = (event: any) => {
    const file = event.target.files[0]
    setFile(file)
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Product Name"
            name="productName"
            placeholder="Product Name"
            value={productName.value}
            onChange={handleChange}
            error={!!productName.error}
            helperText={productName.error}
            required={productName.required}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            label="Category"
            name="category"
            value={category.value}
            onChange={handleChange}
            error={!!category.error}
            helperText={category.error}
            required={category.required}
          >
            <option value=""> </option>
            {
              categories?.map((category: any, index: number) => (
                <option key={index} value={category.name}>{category.name}</option>
              ))
            }
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Price $"
            name="price"
            placeholder="Price $"
            value={price.value}
            onChange={handleChange}
            error={!!price.error}
            helperText={price.error}
            required={price.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            label="Discount %"
            name="discount"
            placeholder="Discount %"
            value={discount.value}
            onChange={handleChange}
            error={!!discount.error}
            helperText={discount.error}
            required={discount.required}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            variant={variant}
            margin={margin}
            fullWidth
            select
            SelectProps={{
              native: true
            }}
            label="Rating"
            name="rating"
            value={rating.value}
            onChange={handleChange}
            error={!!rating.error}
            helperText={rating.error}
            required={rating.required}
          >
            <option value=""> </option>
            <option value="">0</option>
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
            <option value="">4</option>
            <option value="">5</option>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Stack direction="row" alignItems="center" spacing={2}>
            {/* <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" />
              <IconButton color="primary" aria-label="upload picture" component="span">
                Upload <PhotoCamera />
              </IconButton>
            </label> */}
            <form onSubmit={submit}>
              <input onChange={fileSelected} type="file" accept="image/*"></input>
              <input value={description} onChange={e => setDescription(e.target.value)} type="text"></input>
              <button type="submit">Submit</button>
            </form>

            {images.map(image => (
              <div key={image}>
                <img src={image}></img>
              </div>
            ))}

          </Stack>
        </Grid>

      </Grid>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="contained"
          sx={{ mt: 3, ml: 1 }}
          disabled={isError()}
          color="primary"
          onClick={!isError() ? handleNext : () => null}
        >
          Next
        </Button>
      </Box>
    </>
  )
}
