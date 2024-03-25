import React from "react";
import Appbar from "../../components/PageLayout/Appbar";
import SideNav from "../../components/PageLayout/SideNav";
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import MemberTable from "../../components/Datatable/MemberTable";


export default function Members() {
  return (
    <>
      <Appbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <SideNav />
        <Box component="main" sx={{ flexGrow: 1, p: 8 }}>
          
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 1245 }}>
                  <CardContent>
                    <MemberTable />
                  </CardContent>
                </Card>
              </Stack>      
        </Box>
      </Box>
    </>
  )
}
