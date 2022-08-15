import { Container } from "@mui/material";
import CreateCategory from "./CreateCategory";
import DeleteCategory from "./DeleteCategory";


const CategoryPage = () => {
  return (
    <Container component='main' maxWidth='sm' sx={{ mb: 4 }}>
      <CreateCategory />
      <DeleteCategory />
    </Container>
  )
}

export default CategoryPage;