import React from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { Container, Button } from '@mui/material';
import CardPartial from '../components/CardPartial';
import EditIcon from '@mui/icons-material/Edit';
import configData from '../config.json';

function TransactionDetails() {
    const { state } = useLocation();
    const transaction = state.transaction;
    let navigate = useNavigate();
    const AUTH_KEY = configData.AUTH_KEY;

    const handleReset = (event) => {
        event.preventDefault();
        let path = `/`;
        navigate(path);
    }

    return (
        <Container>
            <CardPartial {...transaction} />
            {
                transaction.candidateId === AUTH_KEY
                    ? <Link to={`/transaction/update/${transaction.id}`} state={{ transaction: transaction }} style={{ textDecoration: 'none' }}>
                        <Button color="primary" size="small" startIcon={<EditIcon />}>Update Transaction</Button>
                    </Link>
                    : null
            }
            <Button onClick={e => handleReset(e)} color="secondary" style={{}}>Return</Button>
        </Container >
    )
}

export default TransactionDetails;