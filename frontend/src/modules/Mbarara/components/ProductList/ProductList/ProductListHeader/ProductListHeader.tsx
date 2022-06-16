import { MenuItem, Select } from "@mui/material";
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

const ProductListHeader = () => {
  return (
    <div style={{
      height: '70px',
      margin: '20px', borderRadius: '8px', background: '#fff',
      boxShadow: '0px 1px 3px rgb(3 0 71 / 9%)'
    }}>
      <div style={{
        display: 'flex', marginRight: '10px', marginLeft: '10px',
        flexDirection: 'row', height: '70px',
        alignItems: 'center',
      }}>
        <div style={{ flexGrow: 1 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontWeight:'500'}}>
              Searching for “mobile phone”
            </div>
            <div style={{ color: 'gray', fontSize: '12px' }}>
              48 results found
            </div>
          </div>
        </div>
        <div style={{ color: 'gray' }}>
          Short by:
        </div>
        <div style={{ flexGrow: 1, marginLeft: '15px' }}>
          <Select
            value={10}
            // value={sortedBy}
            // onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style={{ width: '150px', height: '30px' }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
        <div style={{ color: 'gray' }}>
          View:
        </div>
        <div style={{ color: 'gray', flexGrow: 1, alignSelf: 'center', marginTop: '7px' }} >
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div style={{ marginLeft: '15px' }}>
              <ViewComfyIcon />
            </div>
            <div style={{ marginLeft: '15px' }}>
              <ViewColumnIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListHeader;