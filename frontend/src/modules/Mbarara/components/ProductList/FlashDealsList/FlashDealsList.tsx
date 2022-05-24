import { gql, useQuery } from '@apollo/client';
import BoltIcon from '@mui/icons-material/Bolt';
import { width } from '@mui/system';
import { wrap } from 'module';
import Product from '../Product/Product';


const GET_FLASHDEALSPRODUCT = gql`
query {
  getFlashDealsProducts{
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
  const { data, error, loading } = useQuery(GET_FLASHDEALSPRODUCT);

  if (error) return <div>Error Page</div>;

  if (loading) return <div>Spinner...</div>;

  const products = data.getFlashDealsProducts;
  console.log(products);
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
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
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
      </div>
    </div>
  );
}

export default FlashDealsList;