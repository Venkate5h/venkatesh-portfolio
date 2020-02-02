import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import { AccountCircleRounded, MailOutlineRounded, PhoneAndroidRounded } from '@material-ui/icons';
import './sidebar.css';

const Sidebar = () => {
    return (
        <Grid container direction="column" alignItems="center" justify="center" spacing={4}>
            <Grid item>
                <AccountCircleRounded style={{ fontSize: "100px" }} />
                <Typography variant="h5">
                    Venkatesh M
                </Typography>
            </Grid>
            <Grid item>
                <Grid container alignItems="center" justify="center">
                    <MailOutlineRounded />&emsp;
                    <Typography>
                        venk4te5hm@gmail.com
                    </Typography>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container alignItems="center" justify="center">
                    <PhoneAndroidRounded />&emsp;
                    <Typography>
                        +91-988-615-8342
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Sidebar;