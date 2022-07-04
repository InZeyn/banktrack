import React from 'react'
import { useState, useEffect } from 'react';
import { Paper, Button, Input, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { Container } from '@mui/system';
import configData from '../config.json';
import { useNavigate, useLocation } from 'react-router-dom';
import Moment from 'moment';

export default function CreateTransaction() {
    const BaseURL = configData.API_URL;
    const AUTH_KEY = configData.AUTH_KEY;
    const { state } = useLocation();
    const transaction = state.transaction;
    const [inputs, setInputs] = useState({ "candidateId": AUTH_KEY, "description": '' });
    const [accounts, setAccounts] = useState({})
    const [title, setTitle] = useState('Create Transaction')
    let navigate = useNavigate();
    const style = {
        margin: 10,
        width: '98%',
        marginBottom: 0,
    };
    const styleLbl = {
        margin: 15,
        marginBottom: 0,

    };

    async function getAccounts() {
        try {
            const response = await fetch(BaseURL + "/accounts", {
                method: 'get',
                headers: {
                    'Authorization': AUTH_KEY
                }
            })
            const data = await response.json()
            if (data.success) {
                console.log('success getting accounts')
                setAccounts(data.data)
            }
            else {
                console.log('error')
            }

        } catch (error) {
            console.log(error)
        }
    }

    async function createTransaction(event) {
        event.preventDefault()
        try {
            if (inputs.id !== null && inputs.id !== undefined) {
                const response = await fetch(BaseURL + "/transactions", {
                    method: 'put',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': AUTH_KEY
                    },
                    body: JSON.stringify(inputs)
                })
                const data = await response.json()
                if (data.success) {
                    console.log('success updating transaction')
                    let path = `/`;
                    navigate(path);
                }
                else {
                    console.log('error')
                }

            } else {
                const response = await fetch(BaseURL + "/transactions", {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': AUTH_KEY
                    },
                    body: JSON.stringify(inputs)
                })
                const data = await response.json()
                if (data.success) {
                    console.log('success creating transaction')
                    let path = `/`;
                    navigate(path);
                }
                else {
                    console.log('error')
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    const checkUpdate = (transaction) => {

        if (transaction.id !== null && transaction.id !== undefined) {
            setTitle('Update Transaction');
            transaction.date = Moment(transaction.date).format('YYYY-MM-DD');
            setInputs(transaction)
            console.log(transaction)
        }
    }

    useEffect(() => {
        getAccounts()
        checkUpdate(transaction)
    }, [])

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        createTransaction(event)
    }

    const handleReset = (event) => {
        event.preventDefault();
        setInputs({})
        let path = `/`;
        navigate(path);
    }

    return (
        <Container>
            <h1>{title}</h1>
            <Paper>
                <br></br>
                <InputLabel style={styleLbl}>Concept</InputLabel>
                <Input
                    type="text"
                    value={inputs.concept || ""}
                    style={style}
                    name='concept'
                    onChange={handleChange}
                />
                <br />
                <InputLabel style={styleLbl}>Description</InputLabel>
                <TextField
                    type="text"
                    style={style}
                    onChange={handleChange}
                    name="description"
                    value={inputs.description || ""}
                ></TextField>
                <br />
                <InputLabel style={styleLbl}>Ammount</InputLabel>
                <Input
                    type="number"
                    value={inputs.ammount || ""}
                    style={style}
                    name='ammount'
                    onChange={handleChange}
                />
                <br />
                <InputLabel style={styleLbl}>Date</InputLabel>
                <Input
                    type="date"

                    value={inputs.date || ""}
                    style={style}
                    name='date'
                    onChange={handleChange}
                />
                <br />
                <InputLabel style={styleLbl}>Account</InputLabel>
                {
                    transaction.id !== null && transaction.id !== undefined
                        ? <Select
                            type="text"
                            disabled={true}
                            value={inputs.accountId || ""}
                            style={style}
                            name='accountId'
                            onChange={handleChange}
                        >
                            {
                                accounts.length > 0 ? accounts.map((account) => {
                                    return <MenuItem key={account.id} value={account.id}>{account.type}: {account.id}</MenuItem>
                                }) : <MenuItem>No accounts</MenuItem>
                            }
                        </Select>
                        : <Select
                            type="text"

                            value={inputs.accountId || ""}
                            style={style}
                            name='accountId'
                            onChange={handleChange}
                        >
                            {
                                accounts.length > 0 ? accounts.map((account) => {
                                    return <MenuItem key={account.id} value={account.id}>{account.type}: {account.id}</MenuItem>
                                }) : <MenuItem>No accounts</MenuItem>
                            }
                        </Select>
                }

                <br />
                <br />
                <Button onClick={handleSubmit} style={{ width: "50%" }}>Submit</Button>
                <Button onClick={handleReset} color="secondary" style={{ width: "50%" }}>Cancel</Button>
                <br />
            </Paper>
        </Container>

    )
}
