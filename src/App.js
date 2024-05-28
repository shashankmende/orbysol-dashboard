import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './components/Main'
import NewEnrollment from './components/NewEnrollment';
import Table from './components/TableContent'
import Patients from './components/Patients';
// import Login from './components/Login'

function App() {



  return (
    <>
    
    <Router>
      <Routes>
        {/* <Route path='/login' element={<Login/>}/> */}
        <Route path='/' element={<Main/>}/>
        <Route path='/new-enrollment' element={<NewEnrollment/>}/>
        <Route path='/registrations' element={<Table/>}/>
        <Route path='/patients' element={<Patients/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;