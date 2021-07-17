import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { Button } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({

}));

function UploadFile() {
    const classes = useStyles();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const types = ['video/mp4', 'video/webm', 'video/ogg'];
    const onChange = (e) => {

    }
    return (
        <>
            {
                error != null ? <Alert severity="error">{error}</Alert> : <>
                    <label htmlFor='icon-button-file'>
                        <Button disabled={loading} variant='outlined' component='span' className={classes.button}
                            size='medium' color='secondary' >
                            Upload Video
                        </Button>
                        {loading ? <LinearProgress color='secondary' style={{ marginTop: '6%' }} /> : <></>}
                    </label>
                    <input color='primary'
                        type='file'
                        onChange={onChange}
                        id='icon-button-file'
                        style={{ display: 'none' }}
                    />
                </>
            }
        </>
    )
}

export default UploadFile
