import { useQuery } from '@apollo/client';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_ALLPRODUCTS, GET_ALLPRODUCTS1 } from '../../../../../../redux/requests/mainReuqest';
import ProductListPagination from '../../../Pagination/ProductListPagination/ProductListPagination';
import Product from '../../Product/Product';

const ProductListItems = () => {
  const { id: categoryId } = useParams();
  const [products, setProducts] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const pageSize = 6;

  const handlePages = (updatePage: number) => {
    setPage(updatePage);
  }

  const { data, error, loading } = Number(categoryId) > 1
    ?
    useQuery(GET_ALLPRODUCTS, {
      variables:
      {
        categoryId: Number(categoryId),
        page,
        pageSize,
      }
    })
    :
    useQuery(GET_ALLPRODUCTS1, {
      variables: {
        page,
        pageSize,
      }
    });

  useEffect(() => {
    if (data) {
      setProducts(data.getAllProducts);
    }
  }, [data])

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
          products?.map((product: any) => (
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
      <Box style={{ marginTop: '15px', display: 'flex', justifyContent: 'center' }}>
        <ProductListPagination
          page={page}
          totalPages={totalPages}
          handlePagination={handlePages}
        />
      </Box>
    </div>
  )
}

export default ProductListItems;