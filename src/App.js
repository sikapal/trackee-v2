
import './App.css';
import './responsive.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Form from './pages/Form/form';
import Login from './pages/Login';
import Delivery from './pages/Delivery';
import RegisterUser from './pages/RegisterUser';
import SendColis from './pages/SendColis';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext,  useEffect,  useState } from 'react';

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
            <Route path="/send-package" exact={true} element={<SendColis/>} />
            <Route path="/delivery" exact={true} element={<Delivery/>} />
          </Routes>
        </div>
      </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext};
