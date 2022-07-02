import { useState, useEffect } from 'react';
import Transaction from './Transaction';

export default function TransactionList() {

    const [transactions, setTransactions] = useState({})
    const transactionsMock = {
        success: true,
        errorMessage: null,
        data: [{
            id: "09085050-ba37-4e7a-b8fc-f7d0a8dc0354",
            concept: "TRANSFERENCIA A CUENTA 9604587345",
            description: "",
            ammount: 48203,
            date: "2021-12-07T08:06:00.000Z",
            accountId: "79b0e6c9-2a8f-4efc-8341-a6d26540fd35",
            candidateId: "03b4f60b-3ab1-4bf9-a5d9-a55c572b3a5a",
            createdAt: "2022-06-22T15:20:15.000Z",
            updatedAt: "2022-06-22T15:20:15.000Z"
        }, {
            id: "109cb3fb-2ff4-4d65-93c0-d239d5756770",
            concept: "PAGO SUPERMERCADO EL BRAVO",
            description: "",
            ammount: 478.19,
            date: "2021-12-07T08:06:00.000Z",
            accountId: "79b0e6c9-2a8f-4efc-8341-a6d26540fd35",
            candidateId: "03b4f60b-3ab1-4bf9-a5d9-a55c572b3a5a",
            createdAt: "2022-06-22T15:20:15.000Z",
            updatedAt: "2022-06-22T15:20:15.000Z"
        }]
    }

    async function fetchData() {
        const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        const data = await response.json()
        // console.log(data)
        setTransactions(transactionsMock.data)
        console.log(transactions)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        transactions.map(transaction => {
            return <Transaction key={transaction.id} transaction={transaction} />
        })
    )

}