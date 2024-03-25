import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EmailIcon from '@mui/icons-material/Email';

const membersData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Member',
    email: 'john@example.com',
  },
  {
    id: 2,
    name: 'Jane Doe',
    role: 'Developer',
    email: 'jane@example.com',
  },
  {
    id: 3,
    name: 'Amal Peris',
    role: 'Developer',
    email: 'amali@example.com',
  },
  {
    id: 4,
    name: 'Kamani Perera',
    role: 'Member',
    email: 'kamani@example.com',
  },
  {
    id: 5,
    name: 'Nathali Fernando',
    role: 'Member',
    email: 'fernando@example.com',
  },
  {
    id: 6,
    name: 'Isuru Perera',
    role: 'Developer',
    email: 'isuru@example.com',
  },


];

const MemberTable = () => {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [newMemberDetails, setNewMemberDetails] = useState({
    organization: 'Your Organization', // Change this to your organization name
    name: '',
    email: '',
    password: '',
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredMembers = membersData.filter(
    (member) =>
      member.name.toLowerCase().includes(search.toLowerCase()) ||
      (roleFilter === 'All' ? true : member.role === roleFilter)
  );

  const handleRoleChange = (event, memberId) => {
    // Add your logic to update the role in your data
    console.log(`Change role of member ${memberId} to ${event.target.value}`);
  };

  const handleDeleteMember = (memberId) => {
    // Add your logic to remove the member from your data
    console.log(`Delete member ${memberId}`);
  };

  const handleInviteMember = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleSendInvite = () => {
    // Add your logic to send the invite and handle the form data
    console.log('Invite new member:', newMemberDetails);
    // Reset the form and close the dialog
    setNewMemberDetails({
      organization: 'Your Organization',
      name: '',
      email: '',
      password: '',
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="members-container">
      <Typography sx={{ fontSize: '40px', fontStyle: 'bold', marginTop: '10px' }}>
        Members
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
        <TextField
          label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonSearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Invite Member"
          value={newMemberDetails.name}
          onChange={(e) => setNewMemberDetails({ ...newMemberDetails, name: e.target.value })}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton color="primary" onClick={handleInviteMember}>
                  <AddCircleIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Avatar</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredMembers.map((member) => (
              <TableRow key={member.id}>
                <TableCell>
                  <AccountCircle />
                </TableCell>
                <TableCell>{member.name}</TableCell>
                <TableCell>
                  <Select
                    value={member.role}
                    onChange={(e) => handleRoleChange(e, member.id)}
                  >
                    <MenuItem value="Member">Member</MenuItem>
                    <MenuItem value="Developer">Developer</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>{member.email}</TableCell>
                <TableCell>
                  <Button
                    color="secondary"
                    onClick={() => handleDeleteMember(member.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Invite Member Dialog */}

      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <EmailIcon />
          Invite a member to ABC Company
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Search by username or email address
          </Typography>
          <TextField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button variant="contained" color="primary" onClick={handleSendInvite}>
            Invite
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MemberTable;