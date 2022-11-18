import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './SubscriptionForm.module.css';

const SubscriptionForm = () => {
    return (
        <div className={styles.wrap}>
            <h2 className={styles.title}> SUBSCRIBE</h2>
            <button className={styles.slider}></button>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { mb: 4, width: '93%', backgroundColor:'#fff'}
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="standard-basic" label="E-mail" variant="standard" />
            </Box>
            <button className={styles.button}> SIGN UP </button>
        </div>
    );
};

export default SubscriptionForm;