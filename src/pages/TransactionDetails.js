import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import CardPartial from '../components/CardPartial';


function TransactionDetails() {
    const { state } = useLocation();
    const transaction = state.transaction;
    let navigate = useNavigate();

    const handleReset = (event) => {
        event.preventDefault();
        let path = `/`;
        navigate(path);
    }

    return (
        <Container>
            <CardPartial {...transaction} />
            <Button onClick={e => handleReset(e)} color="secondary" style={{ width: "100%" }}>Return</Button>
        </Container >

    )
}

export default TransactionDetails;