import { useCallback, useContext, useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AppContext } from '../Context/Context';
import { useMutation, useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../../../../redux/requests/mainReuqest';
import { UPLOAD_IMAGE } from '../../../../../redux/requests/productRequest';

const FirstStep = () => {
  const { formValues, handleChange, handleNext, variant, margin } = useContext(
    AppContext
  )
  const { productName, price, discount, category, imageKey, rating } = formValues
  const [imageKeyValue, setImageKeyValue] = useState(imageKey.value);

  // Check if all values are not empty and if there are some errors
  const isError = useCallback(
    () =>
      Object.keys({ productName, price, discount, category, rating }).some(
        (name) =>
          (formValues[name].required && !formValues[name].value) ||
          formValues[name].error || !imageKeyValue
      ),

    [formValues, productName, price, discount, category, imageKeyValue, rating]
  )

  const { data, error, loading } = useQuery(GET_CATEGORIES);
  const categories = data?.getAllCategories;

  const [file, setFile] = useState("");
  const [images, setImages] = useState([]);

  const [uploadImage, { data: dataImage, loading: loadingImage, error: errorImage }] = useMutation(UPLOAD_IMAGE);

  const submit = async (event: any) => {
    event.preventDefault()
    uploadImage({ variables: { file } });
  }

  useEffect(() => {
    if (dataImage) {
      setImageKeyValue(dataImage.uploadFile);
    }
    if (errorImage || error) {
      console.log(JSON.stringify(errorImage, null, 2));
      console.log(JSON.stringify(error, null, 2));
    }
  }, [dataImage, data])

  const fileSelected = (event: any) => {
    const file = event.target.files[0]
    setFile(file);
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
              categories?.map((category: any) => (
                <option key={category.id} value={category.id}>{category.name}</option>
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
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <form onSubmit={submit}>
            <input onChange={fileSelected} required type="file" ></input>
            <TextField
              variant={variant}
              margin={margin}
              fullWidth
              disabled
              name="imageKey"
              value={imageKey.value = imageKeyValue}
              onChange={handleChange}
              inputProps={{ style: { fontSize: '12px' } }}
            />
            <Button variant="outlined" type="submit" sx={{
              fontSize: '13px',
              marginTop: '5px'
            }}>Upload image to S3 bucket</Button>
          </form>

          {images.map(image => (
            <div key={image}>
              <img src={image}></img>
            </div>
          ))}
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

export default FirstStep;
