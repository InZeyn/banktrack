import { useState, useEffect } from 'react';
import Transaction from './Transaction';
import SearchIcon from '@mui/icons-material/Search';
import configData from '../config.json';
import { Input } from '@mui/material';
import { IconButton, InputAdornment } from '@mui/material';
import FloatingButton from '../components/FloatingButton';

export default function TransactionList() {

    const [transactions, setTransactions] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const BaseURL = configData.API_URL;
    const AUTH_KEY = configData.AUTH_KEY;

    async function fetchData() {
        const response = await fetch(BaseURL + "/transactions", {
            headers: {
                'Authorization': AUTH_KEY
            }
        })
        const data = await response.json()
        if (data.success) {
            setTransactions(data.data)
        }
    }



    async function deleteTransaction(e, transaction) {
        e.preventDefault()
        if (AUTH_KEY === transaction.candidateId) {
            try {

                const response = await fetch(BaseURL + "/transactions/" + transaction.id, {
                    method: 'delete',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': AUTH_KEY
                    },
                    body: JSON.stringify({
                        "id": transaction.id,
                        "concept": transaction.concept,
                        "description": transaction.description,
                        "ammount": transaction.ammount,
                        "date": transaction.date,
                        "accountId": '46f29e67-7154-4060-83d2-a9682c07738a',
                    })
                })
                const data = await response.json()
                if (data.success) {
                    console.log('success')
                }
                else {
                    console.log('error')
                }
                setTransactions(transactions.filter(t => t.id !== transaction.id));
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("You can't delete this transaction")
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const searchTransactions = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredTransactions = transactions.filter((transaction) => {
                return Object.values(transaction).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredTransactions)
        }
        else {
            setFilteredResults(transactions)
        }
    }

    return (
        <>
            <Input
                placeholder="Search…"
                onChange={(e) => searchTransactions(e.target.value)}
                value={searchInput}
                style={{ textDecoration: 'none' }}
                fullWidth
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
            <br />
            <br />
            {
                searchInput.length > 1 ? (filteredResults.map((item) => {
                    return (
                        <Transaction key={item.id} transaction={item} deleteTransaction={deleteTransaction} />
                    )
                })) : (
                    transactions.map(transaction => {
                        return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={e => deleteTransaction(e, transaction)} />
                    })
                )

            }
            <FloatingButton />
        </>
    )
}