import { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { AppContext } from '../Context/Context';
import {
  CREATE_PRODUCT,
  CREATE_SPECIFICATION,
  UPDATE_PRODUCT,
} from '../../../../../redux/requests/productRequest';
import { useMutation, useQuery } from '@apollo/client';
import { GET_CATEGORY_BY_ID } from '../../../../../redux/requests/mainReuqest';

const Confirm = () => {
  const { formValues, handleBack, handleNext } = useContext(AppContext);
  const {
    productName,
    price,
    discount,
    category,
    rating,
    brand,
    model,
    feature,
    description,
    producer,
    imageKey,
  } = formValues;

  const [createSpecification, { data: specificationData, loading, error }] =
    useMutation(CREATE_SPECIFICATION);

  const [
    updateProduct,
    {
      data: updateProductData,
      loading: updateProductLoading,
      error: updateProductError,
    },
  ] = useMutation(UPDATE_PRODUCT);

  const [
    createProduct,
    { data: productData, loading: productLoading, error: productError },
  ] = useMutation(CREATE_PRODUCT);

  const {
    data: categoryValue,
    error: categoryError,
    loading: categoryLoading,
  } = useQuery(GET_CATEGORY_BY_ID, {
    variables: {
      id: +category.value,
    },
  });

  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = () => {
    createProduct({
      variables: {
        name: productName.value,
        price: +price.value,
        discount: +discount.value,
        image: imageKey.value,
        categoryId: +category.value,
        rating: +rating.value,
        isFavorite: false,
        organizationId: 1,
      },
    });
  };

  useEffect(() => {
    if (specificationData && productData) {
      updateProduct({
        variables: {
          id: productData.createProduct.id,
          specificationId: specificationData.createSpecification.id,
        },
      });
      if (!updateProductError) {
        handleNext();
      }
    }
    if (productData) {
      createSpecification({
        variables: {
          brand: brand.value,
          model: model.value,
          feature: feature.value,
          producer: producer.value,
          description: description.value,
        },
      });
    }
  }, [productData, specificationData, categoryValue, updateProductData]);

  return (
    <>
      <List disablePadding>
        <ListItem>
          <ListItemText
            primary='Product Name'
            secondary={productName.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Price'
            secondary={`${price.value} $` || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Discount'
            secondary={`${discount.value} %` || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Category'
            secondary={categoryName || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Rating'
            secondary={rating.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Image'
            secondary={imageKey.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Producer'
            secondary={producer.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Feature'
            secondary={feature.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Model'
            secondary={model.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Brand'
            secondary={brand.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />

        <ListItem>
          <ListItemText
            primary='Description'
            secondary={description.value || 'Not Provided'}
          />
        </ListItem>

        <Divider />
      </List>

      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button sx={{ mr: 1 }} onClick={handleBack}>
          Back
        </Button>
        <Button variant='contained' color='success' onClick={handleSubmit}>
          Confirm & Continue
        </Button>
      </Box>
    </>
  );
};

export default Confirm;
