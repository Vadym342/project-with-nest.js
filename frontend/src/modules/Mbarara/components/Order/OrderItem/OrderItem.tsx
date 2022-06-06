import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import Quantity from '../../../../../shared/Buttons/Quantity';

const OrderItem = () => {

  const [quantity, setQuantity] = useState<number>(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  }
  const handleDecreaseQuantity = () => {
    setQuantity(quantity - 1);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5px' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Quantity
          quantity={quantity}
          handleIncreaseQuantity={handleIncreaseQuantity}
          handleDecreaseQuantity={handleDecreaseQuantity}
        />
      </div>
      <div>
        <img
          style={{ height: '50px', width: '70px', marginLeft: '20px' }}
          src={`https://images.unsplash.com/photo-1531804055935-76f44d7c3621?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80`}
          alt="photo"
        />
      </div>
      <div style={{ marginLeft: '5px', fontSize: '10px' }}>
        <div>
          Name dfdf
        </div>
        <div style={{ fontSize: '8px', marginTop: '5px' }}>
          Price dfdf
        </div>
        <div style={{ marginTop: '5px' }}>
          total price dfdf
        </div>
      </div>
      <div style={{ marginLeft: '53px' }}>
        <CloseIcon />
      </div>
    </div>
  )
}

export default OrderItem;