import React from "react";
import Appbar from "../../components/PageLayout/Appbar";
import SideNav from "../../components/PageLayout/SideNav";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


export default function Dashboard() {
    return (
        <>
            <Appbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 8 }}>

                    <Stack spacing={5}>
                        <Card sx={{ maxWidth: 1245, height: '600px' }}>
                            <CardContent>
                                <Typography sx={{ fontSize: '40px', fontStyle: 'bold', marginTop: '10px' }}>
                                    Dashboard
                                </Typography>
                            </CardContent>
                        </Card>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}
