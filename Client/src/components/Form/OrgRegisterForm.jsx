import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

const OrgRegisterForm = () => {
    const [organizationName, setOrganizationName] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleOrganizationNameChange = (e) => {
        setOrganizationName(e.target.value);
    };

    const handleContactEmailChange = (e) => {
        setContactEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleTermsAcceptedChange = () => {
        setTermsAccepted(!termsAccepted);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            organizationName,
            contactEmail,
            phone,
            termsAccepted,
        });
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
            marginTop="30px"
        >
            <form onSubmit={handleSubmit}>
                <Typography gutterBottom sx={{ mt: 1, textAlign: 'center', fontSize: '30px', mb: 2 }}>
                    Tell us about your organization
                </Typography>
                <Typography gutterBottom sx={{textAlign: 'center', fontSize: '25px', mb: 8 }}>
                    Set up your organization
                </Typography>
                
                
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <label htmlFor="organizationName">Organization Name:</label>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type="text"
                            id="organizationName"
                            value={organizationName}
                            onChange={handleOrganizationNameChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <label htmlFor="contactEmail">Contact Email:</label>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type="email"
                            id="contactEmail"
                            value={contactEmail}
                            onChange={handleContactEmailChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <label htmlFor="phone">Phone:</label>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={handlePhoneChange}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={termsAccepted}
                                    onChange={handleTermsAcceptedChange}
                                    required
                                />
                            }
                            label="I hereby accept the Terms and Conditions"
                        />
                    </Grid>
                    <Grid item xs={12} container justifyContent="flex-end">
                        <Button type="submit" disabled={!termsAccepted}
                            sx={{
                                backgroundColor: 'primary.main',
                                color: 'white',
                                '&:hover': {
                                    backgroundColor: 'primary.dark',
                                },
                                fontSize: '20px',
                                mb: 2, 
                            }}
                        >
                            Register
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Box>
    );
};

export default OrgRegisterForm;


