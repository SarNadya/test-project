import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Search = () => {
    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
        },
    });

    return (
        <div>
            <ThemeProvider theme={darkTheme}>
                <TextField
                    id="input-with-icon-textfield"
                    label="What you're looking for"
                    sx={{ mt: '12%', mr: '38%', width: '55%' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    variant="standard"
                    size="normal"
                />
            </ThemeProvider>
        </div>
    );
};

export default Search;