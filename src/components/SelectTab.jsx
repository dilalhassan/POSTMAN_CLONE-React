import React from 'react'
import {Box, Tabs, Tab} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useState, useContext } from 'react';

// components
import CreateTable from './CreateTable';
import CreacteJsonText from './CreacteJsonText';

import { DataContext } from '../context/DataProvider';


const useStyles = makeStyles({
    comonent: {
        marginTop: 20
    },
    tab: {
        textTransform: ['none', '!important']
    }
})


const SelectTab = () => {

    const classes = useStyles()
    const [value, setValue] = useState(0);

    const {paramData, setParamData, headerData, setHeaderData} = useContext(DataContext);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
    <Box className={classes.comonent} >
            <Tabs value={value} onChange={handleChange}
            TabIndicatorProps={{sx: {backgroundColor: '#F26B3A', height: 4, bottom: 2}}}
            textColor='none'
            >
        <Tab label="Params" className={classes.tab} />
        <Tab label="Headers" className={classes.tab} />
        <Tab label="Body" className={classes.tab} />
    </Tabs>
    <Box
        role="tabpanel"
        hidden={value !== 0}
        id={`simple-tabpanel-${0}`}
        aria-labelledby={`simple-tab-${0}`}
        
    >
        <CreateTable text={'Quary Params'} data={paramData} setData={setParamData} />
    </Box>
    <Box
        role="tabpanel"
        hidden={value !== 1}
        id={`simple-tabpanel-${1}`}
        aria-labelledby={`simple-tab-${1}`}
        
    >
        <CreateTable text={'Headers'} data={headerData} setData={setHeaderData} />
    </Box>
    <Box
        role="tabpanel"
        hidden={value !== 2}
        id={`simple-tabpanel-${2}`}
        aria-labelledby={`simple-tab-${2}`}
        
    >
        <CreacteJsonText />
    </Box>
    </Box>
    )
}

export default SelectTab