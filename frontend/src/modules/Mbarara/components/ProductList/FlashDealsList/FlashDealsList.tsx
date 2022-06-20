import { gql, useQuery } from '@apollo/client';
import BoltIcon from '@mui/icons-material/Bolt';
import { Box } from '@mui/material';
import { useState } from 'react';
import { GET_FLASHDEALSPRODUCT } from '../../../../../redux/requests/mainReuqest';
import SidePagination from '../../Pagination/SidePagination/SidePagination';
import Product from '../Product/Product';
import flashDealsStyle from './flashDealsStyle';

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
      <div>
        <SidePagination
          handleButtonPrev={handleButtonPrev}
          handleButtonNext={handleButtonNext}
        />
      </div>
    </Box>
  );
}

export default FlashDealsList;