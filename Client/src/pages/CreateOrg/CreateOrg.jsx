import React from "react";
import Appbar from "../../components/PageLayout/Appbar";
import SideNav from "../../components/PageLayout/SideNav";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import OrgRegisterForm from '../../components/Form/OrgRegisterForm'

export default function CreateOrg() {
    return (
        <>
            <Appbar />
            <Box height={30} />
            <Box sx={{ display: 'flex' }}>
                <SideNav />
                <Box component="main" sx={{ flexGrow: 1, p: 2 }}>

                    <Stack spacing={2}>
                        <Card sx={{ maxWidth: 1245, mt:2 }}>
                            <CardContent>
                                <Box
                                    display="flex"
                                    justifyContent="center"         
                                >
                                    <OrgRegisterForm />
                                </Box>
                            </CardContent>
                        </Card>
                    </Stack>
                </Box>
            </Box>
        </>
    )
}



