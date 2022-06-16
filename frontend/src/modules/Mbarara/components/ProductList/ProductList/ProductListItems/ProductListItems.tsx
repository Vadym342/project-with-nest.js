import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { GET_ALLPRODUCTS } from '../../../../../../redux/requests/mainReuqest';
import Product from '../../Product/Product';

const ProductListItems = () => {
  const { data, error, loading } = useQuery(GET_ALLPRODUCTS);

  if (error) return <div>Error Page</div>;

  if (loading) return <div>Spinner...</div>;

  const products = data.getAllProducts;

  return (
    <div style={{ marginLeft: '20px', marginRight: '20px' }}>
      <Box style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {
          products.map((product: any) => (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              rating={product.rating}
              discount={product.discount}
              image={product.image}
              isFavorite={product.isFavorite}
            />
          ))
        }
      </Box>
    </div>
  )
}

export default ProductListItems;