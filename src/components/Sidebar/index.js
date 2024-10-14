import React, {  useState} from 'react'
import Button from '@mui/material/Button'
import { MdDashboard, MdMessage } from "react-icons/md"
import { FaAngleRight, FaBell, FaProductHunt } from "react-icons/fa6"
import {  IoMdLogOut } from 'react-icons/io'
import { Link } from 'react-router-dom'
import Send from '@mui/icons-material/Send'
import { AirportShuttle, Report } from '@mui/icons-material'
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import Badge from '@mui/material/Badge';

const Sidebar = () => {

  const [activeTab, setActiveTab] = useState(null)
  const [isToggleSubmenu, setIsToggleSubmenu] = useState(false)
  const [isButtonColorBlue, setIsButtonColorBlue] = useState(false); 

 
  const isOpenSubmenu = (index) => {
    setActiveTab(index)
    setIsToggleSubmenu(!isToggleSubmenu)
   

    if (activeTab === index && isToggleSubmenu) {
      
      setIsButtonColorBlue(false);
    } else {
      
      setIsButtonColorBlue(true);
    }
   
  }
  return (
    <>
      <div className='sidebar'>
        <ul>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}> <span className='icon'><MdDashboard /></span>
                Dashboard
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>

          </li>


          <li>
            <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu ? 'active'  : ''}`} onClick={() => isOpenSubmenu(1)}><span className='icon'><FaProductHunt /></span>
              
              <span style={{ color: isButtonColorBlue ? '#20948B' : 'inherit' }}>Accessoires</span> 
  
              <span className='arrow'><FaAngleRight /></span>
            </Button>
            <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`}>
              <ul className='submenu'>
                <li><Link to="/buses">Gestion des Véhicules</Link></li>
                <li><Link to="/personnel">Gestion du Personnel</Link></li>
                <li><Link to="/agencies">Gestion des Agences</Link></li>

              </ul>
            </div>
          </li>
         
          <li>
            <Link to="/delivery">
              <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`} onClick={() => isOpenSubmenu(5)}><span className='icon'><AirportShuttle/></span>
                Livraison en cours
                <span className='arrow'><FaAngleRight /></span>
              </Button></Link>
          </li>
          <li>
            <Link to="/send-package">
              <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`} onClick={() => isOpenSubmenu(4)}><span className='icon'><Send/></span>
                Envoi de colis
                <span className='arrow'><FaAngleRight /></span>
              </Button></Link>
          </li>
          <li>
            <Link to="/formupload"> <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}><span className='icon'><MdMessage /></span>
              Form
              <span className='arrow'><FaAngleRight /></span>
            </Button></Link>

          </li>
          <li>
            <Link to="/">
              <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`} onClick={() => isOpenSubmenu(3)}><span className='icon'><FaBell /></span>
                Notifications
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>

          </li>
          
          <li>
            <Link to="/tracking">
              <Button className={`w-100 ${activeTab === 6 ? 'active' : ''}`} onClick={() => isOpenSubmenu(6)}><span className='icon'><GpsFixedIcon/></span>
                Tracking
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>

          </li>
          <li>
            <Link to="/rebuts">
              <Button className={`w-100 ${activeTab === 7 ? 'active' : ''}`} onClick={() => isOpenSubmenu(7)}><span className='icon'><GpsFixedIcon/></span>
                Rebuts
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>

          </li>
          <li>
            <Link to="/rapports">
              <Button className={`w-100 ${activeTab === 8 ? 'active' : ''}`} onClick={() => isOpenSubmenu(8)}><span className='icon'><Report/></span>
                Rapports
                <span className='arrow'><FaAngleRight /></span>
              </Button>
            </Link>

          </li>

        </ul>

        <br />
        <div className='logoutWrapper'>
          <div className='logoutBox'>
            <Button variant='contained'><IoMdLogOut/>Déconnexion</Button>

          </div>
        </div>

      </div>
    </>
  )
}

export default Sidebar;
