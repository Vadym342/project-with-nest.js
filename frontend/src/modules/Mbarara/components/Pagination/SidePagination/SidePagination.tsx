import { Box, Button } from "@mui/material";
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
  }
  const iconSt = {
    width: '17px',
    fontSize: '15px'
  }

  return (
    <>
      <Box >
        <div style={{ position: 'absolute', top: '200px' }}>
          <Button onClick={handleButtonPrev} style={btnSt}>
            <ArrowBackIcon style={iconSt} />
          </Button>
        </div>
        <div style={{ position: 'absolute', right: '15px', top: '200px' }}>
          <Button onClick={handleButtonNext} style={btnSt}>
            <ArrowForwardIcon style={iconSt} />
          </Button>
        </div>
      </Box>
    </>
  );
};

export default SidePagination;