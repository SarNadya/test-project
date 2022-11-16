import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Slider = ({value}) => {
    const theme = createTheme({
        palette: {
            grey: {
                main: '#696969'
            }
        },
    });
    return (
        <div>
            <ThemeProvider theme={theme}>
                <IconButton aria-label="arrow-right">
                    <ArrowRightIcon color='grey'/>
                </IconButton>
                <div>{value}</div>
                <IconButton aria-label="arrow-right">
                    <ArrowLeftIcon color='grey'/>
                </IconButton>
            </ThemeProvider>
        </div>
    );
};

export default Slider;