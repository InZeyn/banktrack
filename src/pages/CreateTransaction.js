import React from 'react'
import { useState, useEffect } from 'react';
import { Paper, Button, Input, TextField, InputLabel, Select, MenuItem } from '@mui/material';
import { Container } from '@mui/system';
import configData from '../config.json';
import { useNavigate } from 'react-router-dom';

export default function CreateTransaction() {
    const BaseURL = configData.API_URL;
    const AUTH_KEY = configData.AUTH_KEY;
    const [inputs, setInputs] = useState({ "candidateId": AUTH_KEY });
    const [accounts, setAccounts] = useState({})
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
                console.log('success')
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
                console.log('success')
            }
            else {
                console.log('error')
            }

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAccounts()
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
            <h1>CreateTransaction</h1>
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
                <Select
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
                <br />
                <br />
                <Button onClick={handleSubmit} style={{ width: "50%" }}>Submit</Button>
                <Button onClick={handleReset} color="secondary" style={{ width: "50%" }}>Cancel</Button>
                <br />
            </Paper>
        </Container>

    )
}
