import React from 'react';
import styles from './Search.module.css';
import Box from '@mui/material/Box';
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
        <div className={styles.wrap}>
            <ThemeProvider theme={darkTheme}>
                <TextField
                    id="input-with-icon-textfield"
                    label="What you're looking for"
                    sx={{ m: 10, width: '80%' }}
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
                />
            </ThemeProvider>
        </div>
    );
};

export default Search;