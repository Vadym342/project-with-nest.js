import { useQuery } from '@apollo/client';
import { Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { GET_CATEGORIES } from '../../../../../redux/requests/mainReuqest';
import routes from '../../../../../routes/routesPath';


interface CategoryMenuArgs {
  categoryAnchorEl: Element | ((element: Element) => Element) | null | undefined;
  isCategoryMenuOpen: boolean;
  handleCategoryMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const categiryMenuId = 'primary-search-account-menu';
const CategoryMenu = ({ categoryAnchorEl, isCategoryMenuOpen, handleCategoryMenuClose }: CategoryMenuArgs) => {
  const { data, error, loading } = useQuery(GET_CATEGORIES);

  if (error) return <div>Error Page</div>;

  if (loading) return <div>Spinner...</div>;

  const categories = data.getAllCategories;
  return (
    <Menu
      anchorEl={categoryAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      style={{ marginLeft: '5%', marginTop: '45px' }}
      id={categiryMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={isCategoryMenuOpen}
      onClose={handleCategoryMenuClose}
    >
      {
        categories.map((category: any) => (
          <MenuItem key={category.id} onClick={handleCategoryMenuClose}>
            <Link style={{ textDecoration: 'none', color:'#2B3445' }} to={`${routes.NonAuthRoutes.pathToProductList}${category.id}`}>
              {category.name}
            </Link>
          </MenuItem>
        ))
      }
    </Menu >
  );
};

export default CategoryMenu;