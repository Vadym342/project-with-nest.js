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
import { ShoppingBag } from '@mui/icons-material';
import { useState } from 'react';
import CategoryMenu from './CategoryMenu/CategoryMenu';
import ProfileMenu from './ProfileMenu/ProfileMenu';
import navbarStyle from './navbarStyle';
import Sidebar from '../Order/SideBar/SideBar';
import { useAppSelector } from '../../../../hooks/hook';
import { orderItemsSelector } from '../../../../redux';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
  width: '100%',
  border: '1px solid #9e9e9e',
  borderRadius: '50px',
  color: '#9e9e9e'
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
  const [orderAnchorEl, setOrderAnchorEl] = useState<null | HTMLElement>(null);
  const menuId = 'primary-search-account-menu';

  const isOrderMenuOpen = Boolean(orderAnchorEl);
  const isMenuOpen = Boolean(anchorEl);
  const isCategoryMenuOpen = Boolean(categoryAnchorEl);

  const orderItems = useAppSelector(orderItemsSelector);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleOrderMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setOrderAnchorEl(event.currentTarget);
  };

  const handleOrderMenuClose = () => {
    setOrderAnchorEl(null);
  };

  const handlerCategoryMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryMenuClose = () => {
    setCategoryAnchorEl(null);
  };

  return (
    <Box sx={navbarStyle.MainBox}>
      <AppBar position="static" style={navbarStyle.AppBarColor}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={navbarStyle.LogoTypography}
          >
            Mbarara
          </Typography>
          <IconButton
            onClick={handlerCategoryMenuOpen}
            size="large"
            color="default"
            sx={navbarStyle.CategoryIcon}
          >
            <DashboardCustomizeIcon />
            <KeyboardArrowDownIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1 }} />
          <Search style={navbarStyle.Search}>
            <SearchIconWrapper>
              <SearchIcon style={navbarStyle.SearchIcon} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={navbarStyle.AccountBox}>
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
              onClick={isOrderMenuOpen ? handleOrderMenuClose : handleOrderMenuOpen}
            >
              <Badge badgeContent={orderItems.length} color="error" showZero>
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
        setAnchorEl={setAnchorEl}
        handleMenuClose={handleMenuClose}
      />
      {
        orderAnchorEl && (
          <Sidebar
            orderAnchorEl={orderAnchorEl}
            isOrderMenuOpen={isOrderMenuOpen}
            handleOrderMenuClose={handleOrderMenuClose}
          />
        )
      }

    </Box >
  );
}

export default NavBar;