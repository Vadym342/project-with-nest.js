import { Box, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
interface SidePaginationArgs {
  handleButtonPrev: (event: React.MouseEvent<HTMLElement>) => void;
  handleButtonNext: (event: React.MouseEvent<HTMLElement>) => void;
}

const SidePagination = ({ handleButtonPrev, handleButtonNext }: SidePaginationArgs) => {
  const btnSt = {
    borderRadius: '50%',
    minWidth: '15px',
    width: '30px',
    color: 'white',
    background: '#0F3460',
    height: '30px',
    zIndex: 0
  }
  const iconSt = {
    width: '17px',
    fontSize: '15px'
  }

  return (
    <>
      <Box>
        <div style={{ position: 'absolute', left:'10px', top: '200px' }}>
          <Button onClick={handleButtonPrev} style={btnSt}>
            <ArrowBackIcon style={iconSt} />
          </Button>
        </div>
        <div>
          <div style={{ position: 'absolute', right:'10px', top: '200px' }}>
            <Button onClick={handleButtonNext} style={btnSt}>
              <ArrowForwardIcon style={iconSt} />
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
};

export default SidePagination;