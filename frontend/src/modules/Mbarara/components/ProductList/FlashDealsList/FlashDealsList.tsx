import { gql, useQuery } from '@apollo/client';
import BoltIcon from '@mui/icons-material/Bolt';
import { Box, Button } from '@mui/material';
import { memo, useCallback, useState } from 'react';
import SidePagination from '../../Pagination/SidePagination/SidePagination';
import Product from '../Product/Product';
import flashDealsStyle from './flashDealsStyle';

const GET_FLASHDEALSPRODUCT = gql`
query FlashDeals($page:Int!, $pageSize:Int!){
  getFlashDealsProducts(page: $page, pageSize: $pageSize){
    id,
    name,
		price,
    rating,
    discount,
    image,
    isFavorite
  }
}
`
const FlashDealsList = () => {
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(4);
  const { data, error, loading } = useQuery(GET_FLASHDEALSPRODUCT, {
    variables: {
      page,
      pageSize
    }
  });

  const handleButtonPrev = () => {
    if (page > 1)
      setPage(page - 1)
  }

  const handleButtonNext = () => {
    if (products && products.length >= 4)
      setPage(page + 1)
  }

  //console.log(JSON.stringify(error, null, 2));
  if (error) return <div>Error Page</div>;

  if (loading) return <div>Spinner...</div>;

  const products = data.getFlashDealsProducts;

  return (
    <Box style={flashDealsStyle.MainBox}>
      <Box style={flashDealsStyle.TitleBox}>
        <div>
          <BoltIcon style={flashDealsStyle.BoltIcon} />
        </div>
        <div style={flashDealsStyle.TitleText}>
          Flash Deals
        </div>
      </Box>
      <Box style={flashDealsStyle.ItemBox}
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
      <SidePagination
        handleButtonPrev={handleButtonPrev}
        handleButtonNext={handleButtonNext}
      />
    </Box>
  );
}

export default FlashDealsList;