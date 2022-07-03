import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";


export default function FloatingButton() {

    const style = {
        margin: 0,
        top: 'auto',
        right: 20,
        bottom: 20,
        left: 'auto',
        position: 'fixed',
    };


    let navigate = useNavigate();
    const routeChange = () => {
        let path = `/transaction/create`;
        navigate(path);
    }

    return (
        <Box sx={{ '& > :not(style)': { m: 10 } }}>
            <Fab variant='extended' size="large" color="primary" aria-label="create" style={style} onClick={routeChange}>
                <AddIcon />
                Create a new transaction
            </Fab>
        </Box>
    );
}
