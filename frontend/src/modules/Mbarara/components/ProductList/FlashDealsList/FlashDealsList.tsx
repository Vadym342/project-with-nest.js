import { gql, useQuery } from '@apollo/client';
import BoltIcon from '@mui/icons-material/Bolt';
import { Button } from '@mui/material';
import { useState } from 'react';
import Product from '../Product/Product';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

  const handleButtonLeft = () => {
    if (page > 1)
      setPage(page - 1)
  }

  const handleButtonRight = () => {
    if (products && products.length >= 4)
      setPage(page + 1)
  }

  //console.log(JSON.stringify(error, null, 2));
  if (error) return <div>Error Page</div>;

  if (loading) return <div>Spinner...</div>;

  const products = data.getFlashDealsProducts;

  return (
    <div style={{ margin: '15px' }}>
      <div>
        <div style={{ marginBottom: '5px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', }}>
            <div style={{ color: '#D23F57' }}>
              <BoltIcon />
            </div>
            <div style={{ fontWeight: 500, fontSize: '20px' }}>
              Flash Deals
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
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
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ position: 'absolute', top: '200px' }}>
            <Button onClick={handleButtonLeft} style={{ borderRadius: '50%', minWidth: '25px', color: 'white', background: '#0F3460' }}>
              <ArrowBackIcon />
            </Button>
          </div>
          <div style={{ position: 'absolute', right:'15px', top: '200px' }}>
            <Button onClick={handleButtonRight} style={{ borderRadius: '50%', minWidth: '25px', color: 'white', background: '#0F3460' }}>
              <ArrowForwardIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashDealsList;