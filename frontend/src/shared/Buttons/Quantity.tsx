import { Button } from '@mui/material';
import productStyle from '../../modules/Mbarara/components/ProductList/Product/productStyle';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface QuantityArgs {
  quantity: number;
  handleDecreaseQuantity: () => void;
  handleIncreaseQuantity: () => void;
}

const Quantity = ({
  quantity,
  handleDecreaseQuantity,
  handleIncreaseQuantity,
}: QuantityArgs) => {
  return (
    <>
      {quantity > 0 ? (
        <>
          <Button onClick={handleDecreaseQuantity} style={productStyle.CardBtn}>
            <RemoveIcon style={productStyle.CardIcon} />
          </Button>
          <div style={productStyle.QuantityText as React.CSSProperties}>
            {quantity}
          </div>
        </>
      ) : (
        ''
      )}
      <Button onClick={handleIncreaseQuantity} style={productStyle.CardBtn}>
        <AddIcon style={productStyle.CardIcon} />
      </Button>
    </>
  );
};
export default Quantity;
