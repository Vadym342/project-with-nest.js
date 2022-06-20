import ProductListHeader from './ProductListHeader/ProductListHeader';
import ProductListItems from './ProductListItems/ProductListItems';
import ProductListOptions from './ProductListOptions/ProductListOptions';

const ProductList = () => {
  return (
    <div>
      <div style={{ width: '100%' }}>
        <ProductListHeader />
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <ProductListOptions />
        </div>
        <div style={{ flexGrow: 1 }}>
          <ProductListItems />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
