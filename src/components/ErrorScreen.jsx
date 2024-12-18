import React from 'react'
import { Box, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles({
    error:{
        width: '80%',
        height: 'auto',
        margin: 'auto',
        objectPosition: 'center 0%'
    }
})

const ErrorScreen = () => {
    const classes = useStyles();
    const error = 'https://i.stack.imgur.com/01tZQ.png'
        
    return (
    <Box>
            <Typography mt={2} mb={2} >JSON</Typography>
                <Box style={{display: 'flex'}} >
                    <img src={error} alt="" className={classes.error} />
                </Box>
    </Box>
  )
}

export default ErrorScreen