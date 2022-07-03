import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import ArticleIcon from '@mui/icons-material/Article';
import { useState, useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function Transaction({ transaction, deleteTransaction }) {

    return (
        <div>
            <Card sx={{ minWidth: 275, marginBottom: 2, backgroundColor: "#222222" }} >
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="#ebebeb" gutterBottom>
                        Transferencia
                    </Typography>
                    <Typography variant="h4" component="div" color="#ffffff">
                        {transaction.concept}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/transaction/${transaction.id}`} state={{ transaction: transaction }} style={{ textDecoration: 'none' }}>
                        <Button color="success" size="small" startIcon={<ArticleIcon />}>Details</Button>
                    </Link>
                    <Button color="error" size="small" startIcon={<DeleteIcon />} onClick={(e) => deleteTransaction(e, transaction)}>Delete</Button>
                </CardActions>
            </Card>
        </div >
    )
}
