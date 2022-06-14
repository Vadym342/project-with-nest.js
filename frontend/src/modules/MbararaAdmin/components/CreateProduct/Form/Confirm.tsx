import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { AppContext } from '../Context/Context'
import { CREATE_PRODUCT, CREATE_SPECIFICATION } from '../../../../../redux/requests/productRequest'
import { useMutation } from '@apollo/client'

export default function Confirm() {
  const { formValues, handleBack, handleNext } = useContext(AppContext);
  const { productName, price, discount, category, rating,
    brand, model, feature, description, producer, imageKey } = formValues;

  const [createSpecification, { data, loading, error }] = useMutation(CREATE_SPECIFICATION);
  const [createProduct,
    {
      data: productData,
      loading: productLoading,
      error: productError
    }] = useMutation(CREATE_PRODUCT);


  const handleSubmit = () => {
    // Remove unwanted properties from formValue object
    let form = {}

    Object.keys(formValues).map((name) => {
      form = {
        ...form,
        [name]: formValues[name].value
      }
      return form
    })

    createSpecification({
      variables: {
        brand,
        model,
        feature,
        producer,
        description,
      }
    })
    // Do whatever with the values
    console.log(form)
    // Show last component or success message
    handleNext()
  }

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary="Product Name"
            secondary={productName.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Price"
            secondary={`${price.value} $` || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Discount"
            secondary={`${discount.value} %` || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Category"
            secondary={category.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Rating"
            secondary={rating.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Image"
            secondary={imageKey.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Producer"
            secondary={producer.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Feature"
            secondary={feature.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Model"
            secondary={model.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Brand"
            secondary={brand.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="Description"
            secondary={description.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

      </List>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </Box>
    </>
  )
}
