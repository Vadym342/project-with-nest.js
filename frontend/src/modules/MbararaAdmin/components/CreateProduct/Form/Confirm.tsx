import React, { useContext } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'
import { AppContext } from '../Context/Context'

export default function Confirm() {
  const { formValues, handleBack, handleNext } = useContext(AppContext);
  const { productName, price, discount, category, rating, date, city, phone } = formValues;

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
            primary="Date of birth"
            secondary={date.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="City"
            secondary={city.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary="phone"
            secondary={phone.value || 'Not Provided'}
          />
        </ListItem>
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
