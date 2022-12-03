import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

import { SearchOutlined } from '@ant-design/icons';

export const SearchBar = () => (
    <Box sx={{ width: '100%' }}>
        <FormControl sx={{ width: { xs: '100%', md: 400 } }}>
            <OutlinedInput
                size="small"
                id="header-search"
                startAdornment={
                    <InputAdornment position="start" sx={{ mr: 1 }}>
                        <SearchOutlined />
                    </InputAdornment>
                }
                aria-describedby="header-search-text"
                inputProps={{
                    'aria-label': 'weight'
                }}
                placeholder="Ctrl + K"
            />
        </FormControl>
    </Box>
);
