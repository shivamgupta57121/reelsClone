import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    btn: {
        marginTop: '6%',
        '&:hover': {
            backgroundColor: 'black',
            color: 'red', 
        }
    },
}));

function Buttons() {
    const classes = useStyles();
    return (
        <Button className={classes.btn} color="primary">Primary</Button>
    )
}

export default Buttons
