import { Pagination } from '@mui/material';

export interface Props {
  page: number;
  totalPages: number;
  handlePagination: (page: number) => void;
}

const ProductListPagination = ({
  page,
  totalPages,
  handlePagination,
}: Props) => {
  return (
    <div>
      <Pagination
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
        variant='outlined'
        color='secondary'
        page={page}
        onChange={(_, num) => handlePagination(num)}
        count={totalPages}
      />
    </div>
  );
};

export default ProductListPagination;
