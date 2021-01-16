import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import useStyles from './styles';


const CustomizedSnackbar = ({open, setOpen}) => {
    const classes = useStyles();
    const severity = true;
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    }

    return (
        <div className={classes.root}>
            <Snackbar 
                anchorOrigin={{ vertical: 'top', horizontal: 'right'}}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            > 
                <MuiAlert onClose={handleClose} severity={ severity ? "success" : "error"} elevation={6} variant="filled" >
                    { setOpen && severity ? "Transaction successfully created." : "Please fill all the fields"}
                </MuiAlert>
            </Snackbar>
        </div>
    )
}

export default CustomizedSnackbar;
