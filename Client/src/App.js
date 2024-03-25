import './App.css';
import Members from './pages/MemberList/Members';
import Projects from './pages/ProjectList/Projects';
import TermsConditions from './pages/Terms&Conditions/TermsConditions';
import CreateOrg from './pages/CreateOrg/CreateOrg';
import EditProject from './pages/EditProject/EditProject';
import CreateProject from './pages/CreateProject/CreateProject';
import MyProfile from './pages/MyProfile/MyProfile';
import { BrowserRouter as Router } from 'react-router-dom';
import SideNav from './components/PageLayout/SideNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';



function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route index element={<Members />}/>
      <Route path="/Members" element={<Members />} />
      <Route path="/Projects" element={<Projects/>}/>
      <Route path="/MyProfile" element={<MyProfile/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/CreateProject" element={<CreateProject/>}/>
      <Route path="/EditProject" element={<EditProject/>} />
      <Route path="/CreateOrg" element={<CreateOrg/>}/>
      <Route path="/TermsConditions" element={<TermsConditions/>}/>
      <Route path="/CreateProject" element={<CreateProject/>}/>
     </Routes>
     </BrowserRouter> 
    </div>  
    );
}

export default App;