import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import LoginForm from '../../../../../Authorization/LoginForm/LoginForm';

const style = {
  position: 'absolute' as const,
  top: '40%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  pading: '15px',
  margin: 0,
  p: 4,
};

interface ProfileModalArgs {
  isMenuOpen: boolean;
  handleMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const ProfileModal = ({ isMenuOpen, handleMenuClose }: ProfileModalArgs) => {
  return (
    <div>
      <Modal
        open={isMenuOpen}
        onClose={handleMenuClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <LoginForm handleMenuClose={handleMenuClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileModal;
