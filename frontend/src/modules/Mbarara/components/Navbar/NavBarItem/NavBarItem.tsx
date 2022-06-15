import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';

interface NavBarItemArgs {
  route: string;
  title: string;
  handleCloseNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
}

const NavBarItem = ({
  route,
  title,
  handleCloseNavMenu,
}: NavBarItemArgs): JSX.Element => {
  return (
    <>
      <NavLink style={{ textDecoration: 'none', color: 'white' }} to={route}>
        <MenuItem key={title} onClick={handleCloseNavMenu}>
          <Typography textAlign='center'>{title}</Typography>
        </MenuItem>
      </NavLink>
    </>
  );
};

export default NavBarItem;
