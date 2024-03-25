import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import MailIcon from '@mui/icons-material/Mail';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';


const CreateProjectForm = () => {
    const [status, setStatus] = React.useState(0);

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
    };

    const [ProjectData, setProjectData] = useState({
        Organization: '',    //name
        AppName: '',        //email
        GithubLink: '',      //age
        Developers: ''
    });

    const handleChange = (e) => {
        setProjectData({ ...ProjectData, [e.target.name]: e.target.value });
    };


    return (
        <Card sx={{ width: "100%" }}>
            <CardContent>

                <Typography variant="h5" component="div" sx={{ marginBottom: "2em" }}>
                    Create New Project
                </Typography>

                <Box sx={{ width: "100%" }}>
                    <Box sx={{ width: "100%", display: "flex", marginBottom: "1em" }}>
                        <Box sx={{ width: "25%", display: "flex", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "1em" }} component="div">
                                Project Title:
                            </Typography>
                        </Box>

                        <Box sx={{ width: "75%" }}>
                            <TextField id="filled-basic" variant="outlined" sx={{ width: "75%" }} />
                        </Box>
                    </Box>

                    <Box sx={{ width: "100%", display: "flex", marginBottom: "1em" }}>
                        <Box sx={{ width: "25%", display: "flex", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "1em" }} component="div">
                                Project ID:
                            </Typography>
                        </Box>

                        <Box sx={{ width: "75%" }}>
                            <TextField id="filled-basic" variant="outlined" sx={{ width: "75%" }} />
                        </Box>
                    </Box>

                    <Box sx={{ width: "100%", display: "flex", marginBottom: "1em" }}>
                        <Box sx={{ width: "25%", display: "flex", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "1em" }} component="div">
                                Project Category:
                            </Typography>
                        </Box>

                        <Box sx={{ width: "75%" }}>
                            <TextField id="filled-basic" variant="outlined" sx={{ width: "75%" }} />
                        </Box>
                    </Box>

                    <Box sx={{ width: "100%", display: "flex", marginBottom: "1em" }}>
                        <Box sx={{ width: "25%", display: "flex", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "1em" }} component="div">
                                Project Status:
                            </Typography>
                        </Box>

                        <Box sx={{ width: "75%" }}>
                            <FormControl sx={{ width: "75%" }}>

                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={status}
                                    onChange={handleStatusChange}
                                >
                                    <MenuItem value={0}>Public</MenuItem>
                                    <MenuItem value={1}>Private</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box sx={{ width: "100%", display: "flex", marginBottom: "1em" }}>
                        <Box sx={{ width: "25%", display: "flex", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "1em" }} component="div">
                                Add Developers:
                            </Typography>
                        </Box>

                        <Box sx={{ width: "75%" }}>
                            <TextField
                                id="filled-basic"
                                variant="outlined"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <MailIcon />
                                        </InputAdornment>
                                    ),
                                }}
                                sx={{ width: "75%" }}
                            />
                        </Box>
                    </Box>

                    <Box sx={{ width: "100%", display: "flex", marginBottom: "1em" }}>
                        <Box sx={{ width: "25%", display: "flex", alignItems: "center" }}>
                            <Typography sx={{ fontSize: "1em" }} component="div">
                                Project Description:
                            </Typography>
                        </Box>

                        <Box sx={{ width: "75%" }}>
                            <TextField id="filled-basic" variant="outlined" sx={{ width: "75%" }} />
                        </Box>
                    </Box>


                    <Box sx={{ width: "100%", display: "flex", marginBottom: "1em" }}>
                        <Box sx={{ width: "25%", display: "flex", alignItems: "center" }}>

                        </Box>

                        <Box sx={{ width: "75%", display: "flex", justifyContent: "flex-end" }}>
                            <Stack spacing={2} direction="row" sx={{ width: "75%", marginLeft: "53%" }}>
                                <Button variant="outlined">Cancel</Button>
                                <Button variant="contained">Create project</Button>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CreateProjectForm;