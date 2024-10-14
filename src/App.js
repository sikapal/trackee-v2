
import './App.css';
import './responsive.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Form from './pages/Form/form';
import Login from './pages/Login';
import Delivery from './pages/Delivery';
import Tracking from './pages/Tracking';
import RegisterUser from './pages/RegisterUser';
import EditUser from './pages/RegisterUser/editUser.js';
import SendColis from './pages/SendColis';
import Agencies from './pages/Agence/index';
import Employees from './pages/Employee/index';
import NewAgency from './pages/Agence/newAgency.js';
import EditAgency from './pages/Agence/editAgency.js';
import Buses from './pages/Bus/index';
import NewBus from './pages/Bus/newBus.js';
import EditBus from './pages/Bus/editBus.js';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Notifications from './pages/Notifications';
import { createContext,  useEffect,  useState } from 'react';
import { NotificationProvider } from './NotificationContext'; 



const MyContext = createContext();



function App() {
  
  const [isToggleSidebar, setIsToggleSidebar]=useState(false)
  const [windowWidth, setWindowWidth]=useState(window.innerWidth);
  const [ isHideSidebarAndHeader, setIsHideSidebarAndHeader]=useState(false);
  const [isLogin, setIsLogin] = useState(false)
  

  const values={
    isToggleSidebar,
    setIsToggleSidebar,
    isHideSidebarAndHeader,
    setIsHideSidebarAndHeader,
    setIsLogin,
    isLogin,
    windowWidth
  }

  

useEffect(()=>{
  const handleResize = ()=> {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return ()=>{
   window.removeEventListener('resize',handleResize);
 };
},[]);

  return (
    <BrowserRouter>
          <NotificationProvider>
    <MyContext.Provider value={values}>
        
        {
          isHideSidebarAndHeader !== true &&
          <Header/>
        }

    
      <div className='main d-flex'>
        {
          isHideSidebarAndHeader !== true &&
          < div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
          <Sidebar/>
        </div>
        }

        <div className={`content ${isHideSidebarAndHeader=== true && 'full'} ${isToggleSidebar === true ? 'toggle' : ''}`}>
          <Routes>
            <Route path="/" exact={true} element={<Dashboard/>} />
            <Route path="/dashboard" exact={true} element={<Dashboard/>} />
            <Route path="/formupload" exact={true} element={<Form/>} />
            <Route path="/login" exact={true} element={<Login/>} />
            <Route path="/register-user" exact={true} element={<RegisterUser/>} />
            <Route path="/edit-user" exact={true} element={<EditUser/>} />
            <Route path="/send-package" exact={true} element={<SendColis/>} />
            <Route path="/delivery" exact={true} element={<Delivery/>} />
            <Route path="/tracking" exact={true} element={<Tracking/>} />
            <Route path="/notifications" exact={true} element={<Notifications/>} />
            <Route path="/agencies" exact={true} element={<Agencies/>} />
            <Route path="/newAgency" exact={true} element={<NewAgency/>} />
            <Route path="/editAgency" exact={true} element={<EditAgency/>} />
            <Route path="/buses" exact={true} element={<Buses/>} />
            <Route path="/personnel" exact={true} element={<Employees/>} />
            <Route path="/newBus" exact={true} element={<NewBus/>} />
            <Route path="/editBus" exact={true} element={<EditBus/>} />
           
          </Routes>
        </div>
      </div>
      </MyContext.Provider>
      </NotificationProvider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
