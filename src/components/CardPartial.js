import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'
import Moment from 'moment';
export default function CardPartial({ concept, description, ammount, accountId, date }) {

    return (
        <>
            <Typography variant="h2" component="div" align='center'>
                <b>Transaccion</b>
            </Typography>
            <Card sx={{ minWidth: 275, marginBottom: 2, backgroundColor: "#222222" }} >
                <CardContent>

                    <Typography variant="h3" component="div" color="#ffffff" align='center'>
                        <b>$ {ammount}</b>
                    </Typography>
                    <Typography variant="h6" component="div" color="#b5b3b3d4" align='center'>
                        {concept}
                    </Typography>
                    <Typography variant="h6" component="div" align='center'>
                        {"Cuenta " + accountId.slice(0, 4) + "..." + accountId.slice(-4)}
                    </Typography>
                    {description.length > 0 &&
                        <>
                            <br />
                            <hr />
                            <Typography variant="h6" component="div" color="#ffffff">
                                Detalles:
                            </Typography>
                            <Typography variant="h5" component="div" color="#ffffff">
                                {description}
                            </Typography>
                        </>

                    }
                    <Typography variant="h6" component="div" align='end'>
                        {Moment(date).format('YYYY/MM/DD')}
                    </Typography>
                </CardContent>
            </Card>
        </>

    )
}
