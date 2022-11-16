import React from 'react';
import styles from './MenuBar.module.css';
import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import MenuIcon from '@mui/icons-material/Menu';

const MenuBar = () => {
    const theme = createTheme({
        palette: {
            yellow: {
            main: '#FFF01E',
            contrastText: '#000',
            },
            white: {
                main: '#fff'
            }
        },
    });
    return (
        <div className={styles.menu}>
            <ThemeProvider theme={theme}>
                <Link href='https://' title='facebook'>
                    <FacebookIcon color='white'/>
                </Link>

                <Link href='https://' title='twitter'>
                    <TwitterIcon color='white'/>
                </Link>

                <IconButton aria-label="cart">
                    <Badge badgeContent={99} color="yellow">
                        <ShoppingCartIcon color="white"/>
                    </Badge>
                </IconButton>

                <IconButton aria-label="burger-menu">
                    <MenuIcon color='white'/>
                </IconButton>
            </ThemeProvider>
        </div>
    );
};

export default MenuBar;