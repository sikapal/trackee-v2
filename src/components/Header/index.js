import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import logo from '../../assets/images/logo-64.png'
import user from '../../assets/images/user.jpg'
import Button from '@mui/material/Button'
import { MdMenuOpen } from 'react-icons/md'
import SearchBox from '../SearchBox'
import { MdOutlineLightMode } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'
import { MdOutlineMailOutline } from 'react-icons/md'
import { FaRegBell } from 'react-icons/fa6'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { MyContext } from '../../App'

const Header = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notificationOpenDrop, setNotificationOpenDrop] = React.useState(null);
  const open = Boolean(anchorEl);
  const openNotifications = Boolean(notificationOpenDrop);

  const context = useContext(MyContext)

  const handleOpenMyAccDrop = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
  };


  const handlenotificationOpenDrop = (event) => {
    setNotificationOpenDrop(event.currentTarget);
  };

  const handlenotificationCloseDrop = () => {
    setNotificationOpenDrop(null);
  };


  return (
    <div>
      <header className='d-flex align-items-center'>
        <div className='container-fluid w-100'>
          <div className='row d-flex align-items-center w-100 '>

            {/* Logo Wrapper starts */}
            <div className='col-sm-2 part1'>
              <Link to={'/'} className='d-flex align-items-center logo'>
                <img src={logo} alt='logo' />
                <span className='ml-2'>TRACKEE</span>
              </Link>
            </div>

            {/* Logo Wrapper ends */}

            {/* searchBox Wrapper starts */}
           
            {
                context.windowWidth> 992 &&   
                
                <div className='col-sm-3 d-flex align-items-center part2 res-hide'>
                <Button className='rounded-circle mr-3' onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
                  <MdMenuOpen /></Button>
                <SearchBox />
  
              </div>
  
              /* searchBox Wrapper ends */
  
            }

           
            {/* other header Wrapper starts */}
            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <div className='header-button'>
                <Button className='rounded-circle mr-10'><MdOutlineLightMode /></Button>
       
                <Button className='rounded-circle mr-10'>< MdOutlineMailOutline /></Button>
                <Button className='rounded-circle' onClick={handlenotificationOpenDrop} ><FaRegBell /></Button>

                <div className='dropdownWrapper position relative'>
                  <Menu
                    anchorEl={notificationOpenDrop}
                    id="notification"
                    className='notification dropdown_list'
                    open={openNotifications}
                    onClose={handlenotificationCloseDrop}
                    onClick={handlenotificationCloseDrop}

                    transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                  >
                    <div className='head'>
                      <h4>Notifications(5)</h4>

                    </div>

                    <Divider className='mb-1' />

                    <div className='scroll'>
                      <MenuItem onClick={handlenotificationCloseDrop}>
                        <div className='d-flex align-items-center'>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src={user} alt='img' />
                            </span>
                          </div>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4><span>Le bus <b> ICT5854K </b> est arrivé à destination </span></h4>
                              <p className='text-sky'>il y a quelques secondes</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>

                      <MenuItem onClick={handlenotificationCloseDrop}>
                        <div className='d-flex align-items-center'>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src={user} alt='img' />
                            </span>
                          </div>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4><span>Le bus <b> ICT5854K </b> est arrivé à destination </span></h4>
                              <p className='text-sky'>il y a quelques secondes</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>

                      <MenuItem onClick={handlenotificationCloseDrop}>
                        <div className='d-flex align-items-center'>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src={user} alt='img' />
                            </span>
                          </div>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4><span>Le bus <b> ICT5854K </b> est arrivé à destination </span></h4>
                              <p className='text-sky'>il y a quelques secondes</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={handlenotificationCloseDrop}>
                        <div className='d-flex align-items-center'>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src={user} alt='img' />
                            </span>
                          </div>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4><span>Le bus <b> ICT5854K </b> est arrivé à destination </span></h4>
                              <p className='text-sky'>il y a quelques secondes</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>

                      <MenuItem onClick={handlenotificationCloseDrop}>
                        <div className='d-flex align-items-center'>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src={user} alt='img' />
                            </span>
                          </div>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4><span>Le bus <b> ICT5854K </b> est arrivé à destination </span></h4>
                              <p className='text-sky'>il y a quelques secondes</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>
                      <MenuItem onClick={handlenotificationCloseDrop}>
                        <div className='d-flex align-items-center'>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src={user} alt='img' />
                            </span>
                          </div>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4><span>Le bus <b> ICT5854K </b> est arrivé à destination </span></h4>
                              <p className='text-sky'>il y a quelques secondes</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>

                      <MenuItem onClick={handlenotificationCloseDrop}>
                        <div className='d-flex align-items-center'>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src={user} alt='img' />
                            </span>
                          </div>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4><span>Le bus <b> ICT5854K </b> est arrivé à destination </span></h4>
                              <p className='text-sky'>il y a quelques secondes</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>  <MenuItem onClick={handlenotificationCloseDrop}>
                        <div className='d-flex align-items-center'>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src={user} alt='img' />
                            </span>
                          </div>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4><span>Le bus <b> ICT5854K </b> est arrivé à destination </span></h4>
                              <p className='text-sky'>il y a quelques secondes</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>

                      <MenuItem onClick={handlenotificationCloseDrop}>
                        <div className='d-flex align-items-center'>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src={user} alt='img' />
                            </span>
                          </div>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4><span>Le bus <b> ICT5854K </b> est arrivé à destination </span></h4>
                              <p className='text-sky'>il y a quelques secondes</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>
                    </div>

                    <div className='btn-blue-wrapper'>
                      <Button className='btn-blue w-100'>Voir toutes les notifications</Button>

                    </div>
                  </Menu>
                </div>
              </div>

              {/* user profile starts*/}
              <div className='myAccWrapper'>

                <Button className='myAcc d-flex align-items-center' onClick={handleOpenMyAccDrop}>
                  <div className='userImg'>
                    <span className='rounded-circle'>
                      <img src={user} alt='userImg' />
                    </span>
                  </div>

                  <div className='userInfo res-hide'>
                    <h4>Sikapa Lucien</h4>
                    <p className='mb-0'>MAT0025</p>
                  </div>

                </Button>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleCloseMyAccDrop}
                  onClick={handleCloseMyAccDrop}

                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <PersonAdd />
                    </ListItemIcon>
                    Mon Compte
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Settings />
                    </ListItemIcon>
                    Paramètres
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon>
                      <Logout />
                    </ListItemIcon>
                    Déconnexion
                  </MenuItem>
                </Menu>

                {/* user profile ends*/}

              </div>
            </div>
            {/* other header Wrapper ends*/}
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;
