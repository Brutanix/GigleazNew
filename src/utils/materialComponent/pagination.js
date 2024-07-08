import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Paginationhome = () => {
    return (
        <Stack spacing={2}>
          <Pagination count={10} color="success" />
        </Stack>
    )
}

export default Paginationhome
