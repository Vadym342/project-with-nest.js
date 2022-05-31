import { Menu, MenuItem } from "@mui/material";
import ProfileModal from "./ProfileModal/ProfileModal";

interface ProfileMenuArgs {
  menuId: string;
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
  isMenuOpen: boolean;
  handleMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const ProfileMenu = ({ menuId, anchorEl, isMenuOpen, handleMenuClose }: ProfileMenuArgs) => {
  const user = null;

  return (
    <>
      {
        !user
          ?
          <ProfileModal
            isMenuOpen={isMenuOpen}
            handleMenuClose={handleMenuClose}
          />
          :
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }
            }
            style={{ marginTop: '45px' }
            }
            id={menuId}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
          </Menu>
      }
    </>
  );
};

export default ProfileMenu;