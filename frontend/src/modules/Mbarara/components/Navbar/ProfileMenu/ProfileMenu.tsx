import { Menu, MenuItem } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hook";
import { setUser, userSelector } from "../../../../../redux";
import ProfileModal from "./ProfileModal/ProfileModal";

interface ProfileMenuArgs {
  menuId: string;
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
  isMenuOpen: boolean;
  handleMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
}

const ProfileMenu = ({ menuId, anchorEl, isMenuOpen, handleMenuClose, setAnchorEl }: ProfileMenuArgs) => {
  const user = useAppSelector(userSelector);
  const dispatch = useAppDispatch();
  const handleLogOut = () => {
    dispatch(setUser({}));
    localStorage.clear();
    setAnchorEl(null);
  }

  return (
    <>
      {
        Object.keys(user).length === 0
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
            <MenuItem onClick={handleLogOut}>Log out</MenuItem>
          </Menu>
      }
    </>
  );
};

export default ProfileMenu;