import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ExpandLess, ExpandMore, ShoppingBag, StarBorder } from '@mui/icons-material';
import { useState } from 'react';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = useState<null | HTMLElement>(null);
  const menuId = 'primary-search-account-menu';

  const isMenuOpen = Boolean(anchorEl);
  const isCategoryMenuOpen = Boolean(categoryAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handlerCategoryMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryMenuClose = () => {
    setCategoryAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1, color: 'white' }} >
      <AppBar position="static" style={{ background: "#F6F9FC" }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
            style={{ color: '#2B3445' }}
          >
            Mbarara
          </Typography>
          <IconButton
            onClick={handlerCategoryMenuOpen}
            size="large"
            color="default"
            sx={{ display: { xs: 'flex', sm: 'flex' } }}
          >
            <DashboardCustomizeIcon />
            <KeyboardArrowDownIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Search style={{ width: '25rem', border: '1px solid #9e9e9e', borderRadius: '50px', color: '#9e9e9e' }}>
            <SearchIconWrapper>
              <SearchIcon style={{ color: '#9e9e9e' }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="default"
            >
              <AccountCircle />
            </IconButton>
            <IconButton
              size="large"
              color="default"
            >
              <Badge badgeContent={0} color="error" showZero>
                <ShoppingBag />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <CategoryMenu
        categoryAnchorEl={categoryAnchorEl}
        isCategoryMenuOpen={isCategoryMenuOpen}
        handleCategoryMenuClose={handleCategoryMenuClose}
      />
      <ProfileMenu
        menuId={menuId}
        anchorEl={anchorEl}
        isMenuOpen={isMenuOpen}
        handleMenuClose={handleMenuClose}
      />
    </Box >
  );
}

export default NavBar;