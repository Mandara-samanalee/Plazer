import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
} from '@mui/material';
import { WidthNormal } from '@mui/icons-material';

const projectsData = [
  { id: 1, name: 'Leave app', status: 'Public' },
  { id: 2, name: 'Attendence app', status: 'Private' },
  { id: 3, name: 'Salary app', status: 'Public' },
  { id: 4, name: 'Grocery app', status: 'Private' },
  { id: 5, name: 'Diary app', status: 'Public' },
];

const ProjectTable = () => {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredProjects = projectsData.filter(
    (project) =>
      project.name.toLowerCase().includes(search.toLowerCase()) &&
      (statusFilter === 'All' || project.status === statusFilter)
  );

  const handleStatusChange = (event, projectId) => {
    // Add your logic to update the status in your data
    console.log(`Change status of project ${projectId} to ${event.target.value}`);
  };

  const handleRemoveProject = (projectId) => {
    // Add your logic to remove the project from your data
    console.log(`Remove project ${projectId}`);
  };

  return (
    <div>
      <Typography sx = {{fontSize:'40px', fontStyle: 'bold', marginTop: '30px'}}> Projects </Typography>
      <TextField sx = {{ marginTop: '10px', marginBottom: '10px'}}
        label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="contained" color="primary" sx= {{marginLeft: '70%', marginTop: '-25px', marginBottom: '50px'}}>
        Add New Project
      </Button>
      <TableContainer component={Paper} sx= {{marginLeft: '40px'}}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProjects.map((project) => (
              <TableRow key={project.id}>
                <TableCell>{project.id}</TableCell>
                <TableCell>{project.name}</TableCell>
                <TableCell>
                  <Select
                    value={project.status}
                    onChange={(e) => handleStatusChange(e, project.id)}
                  >
                    <MenuItem value="Public">Public</MenuItem>
                    <MenuItem value="Private">Private</MenuItem>
                  </Select>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => handleRemoveProject(project.id)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProjectTable;

