import React from 'react'
import { useParams, useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import CardPartial from '../components/CardPartial';

function TransactionDetails() {
    const { id } = useParams();
    const { state } = useLocation();
    const transaction = state.transaction;


    console.log(transaction);

    return (
        <Container>
            <CardPartial {...transaction} />
        </Container>

    )
}

export default TransactionDetails;