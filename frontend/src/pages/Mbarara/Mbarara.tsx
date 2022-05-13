import NavBar from "../../modules/Mbarara/components/Navbar";
import Product from "../../modules/Mbarara/components/ProductList/Product/Product";
import BoltIcon from '@mui/icons-material/Bolt';

const Mbarara = () => {
  return <div>
    <NavBar />
    <div style={{ margin: '15px' }}>
      <div>
        <div style={{ marginBottom: '5px' }}>
          <div style={{display:'flex', flexDirection: 'row', }}>
            <div style={{color:'#D23F57'}}>
              <BoltIcon />
            </div>
            <div style={{fontWeight: 500, fontSize: '20px'}}>
              Flash Deals
            </div>
          </div>
        </div>
        <div>
          <Product />
        </div>
      </div>
    </div>
  </div>
};
export default Mbarara;
