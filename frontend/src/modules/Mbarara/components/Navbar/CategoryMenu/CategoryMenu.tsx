import { gql, useQuery } from "@apollo/client";
import { Menu, MenuItem } from "@mui/material";

interface CategoryMenuArgs {
  categoryAnchorEl: Element | ((element: Element) => Element) | null | undefined;
  isCategoryMenuOpen: boolean;
  handleCategoryMenuClose: (event: React.MouseEvent<HTMLElement>) => void;
}

const GET_CATEGORIES = gql`
 query{
   getAllCategories{
   id,
   name
}
}
`

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
          <MenuItem key={category.id} onClick={handleCategoryMenuClose}>{category.name}</MenuItem>
        ))
      }
    </Menu>
  );
};

export default CategoryMenu;