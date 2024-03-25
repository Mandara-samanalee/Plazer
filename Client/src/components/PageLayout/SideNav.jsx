import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PeopleIcon from '@mui/icons-material/People';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import LogoutIcon from '@mui/icons-material/Logout';
import Collapse from '@mui/material/Collapse';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import plazer_logo from '../../assets/images/plazer_logo.png';
import plazer_name from '../../assets/images/plazer_name.png';
import { useNavigate } from 'react-router-dom';

const drawerWidth = 280;


export default function SideNav() {

  const navigate = useNavigate();

  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  };


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#2C29D7',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar/>
      
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img 
           src={plazer_logo} 
           alt="Plazer Logo"
           style = {{
              width: "43px",
              height: "43px",
              marginLeft: "29px",
              marginRight: "auto",
              display: "block",
              marginTop: "-45px"
           }}   
        />

        <img 
           src={plazer_name} 
           alt="Plazer Name"
           style = {{
             width: "150px",
             height: "46px",
             marginLeft: "-15px",
             marginRight: "auto",
             display: "block",
             marginTop: "-45px"
          }}    
        />
        </div>
        
        <Divider style = {{ marginTop:'20px'}} />
        <List style = {{ marginTop: '40px'}}>
              <ListItemButton style={{ paddingLeft: '25px' }} onClick={()=>navigate("/Dashboard")}>
                <ListItemIcon style={{ color: 'white' }}>
                <SpaceDashboardIcon style={{ fontSize: '30' }} />
                </ListItemIcon>
              <ListItemText primary= "Dashboard" primaryTypographyProps={{ style: { 
                color: 'white',
                fontSize: '18px' 
                } 
              }}/>
              </ListItemButton>

              <ListItemButton style={{ paddingLeft: '25px' }} onClick={()=>navigate("/Members")}>
                <ListItemIcon style={{ color: 'white' }}>
                <PeopleIcon style={{ fontSize: '30' }}/>
                </ListItemIcon>
              <ListItemText primary= "Members" primaryTypographyProps={{ style: { 
                color: 'white',
                fontSize: '18px'  
                } 
              }}/>
              </ListItemButton>
              
              <ListItemButton onClick = {handleCollapse} style={{ paddingLeft: '25px' }}>
                <ListItemIcon style={{ color: 'white' }}>
                <TipsAndUpdatesIcon style={{ fontSize: '30' }} />
                </ListItemIcon>
              <ListItemText primary= "Projects" primaryTypographyProps={{ style: { 
                color: 'white', 
                fontSize: '18px' 
                } 
              }}/>
              {isCollapsed ? <ExpandLess  style={{ color: 'white' }}/> : <ExpandMore  style={{ color: 'white' }}/> }
              </ListItemButton >
              <Collapse in={isCollapsed} timeout="auto" unmountOnExit>
              <ListItemButton sx={{ pl: 10 }} onClick={()=>navigate("/CreateProject")}>
              <ListItemText primary= "Create new project" primaryTypographyProps={{ style: { 
                color: 'white',
                fontSize: '18px' 
                }
              }}/>
              </ListItemButton>
              <ListItemButton sx={{ pl: 10 }} onClick={()=>navigate("/Projects")}>
              <ListItemText primary= "All projects" primaryTypographyProps={{ style: {
                 color: 'white',
                 fontSize: '18px' 
                 }
              }} />
              </ListItemButton>
              <ListItemButton sx={{ pl: 10 }} onClick={()=>navigate("/EditProject")}>
              <ListItemText primary= "Edit Project" primaryTypographyProps={{ style: {
                 color: 'white',
                 fontSize: '18px' 
                 }
              }} />
              </ListItemButton>
              </Collapse>

              <ListItemButton style={{ paddingLeft: '25px' }} onClick={()=>navigate("/MyProfile")}>
                <ListItemIcon style={{ color: 'white' }}>
                <PersonIcon style={{ fontSize: '30' }}/>
                </ListItemIcon>
              <ListItemText primary= "My Profile" primaryTypographyProps={{ style: {
                 color: 'white',
                 fontSize: '18px' 
                 }
              }}/>
              </ListItemButton>
            
              <ListItemButton style={{ paddingLeft: '25px' }} onClick={()=>navigate("/TermsConditions")}>
                <ListItemIcon style={{ color: 'white' }}>
                <DescriptionIcon style={{ fontSize: '30' }}/>
                </ListItemIcon>
              <ListItemText primary= "Terms and Conditions" primaryTypographyProps={{ style: { 
                color: 'white',
                fontSize: '18px' 
                 }
              }}/>
              </ListItemButton>
        </List>
      </Drawer>
    </Box>
  );
}