import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RegionCreate from './Pages/RegionCreate/RegionCreate';
import RegionList from './Pages/RegionList/RegionList';
import Registration from './Pages/Registration/Registration';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}>
          <Route index element={<RegionList></RegionList>}></Route>
          <Route path='regioncreate' element={<RegionCreate></RegionCreate>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
