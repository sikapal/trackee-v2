/*import React, { useContext } from 'react'
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

            <div className='col-sm-2 part1'>
              <Link to={'/'} className='d-flex align-items-center logo'>
                <img src={logo} alt='logo' />
                <span className='ml-2'>TRACKEE</span>
              </Link>
            </div>
           
            {
                context.windowWidth> 992 &&   
                
                <div className='col-sm-3 d-flex align-items-center part2 res-hide'>
                <Button className='rounded-circle mr-3' onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
                  <MdMenuOpen /></Button>
                <SearchBox />
  
              </div>
    
            }

           
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


              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;*/
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo-64.png';
import user from '../../assets/images/user.jpg';
import Button from '@mui/material/Button';
import { MdMenuOpen, MdOutlineLightMode, MdDarkMode, MdOutlineMailOutline } from 'react-icons/md';
import { FaRegBell, FaBell } from 'react-icons/fa6'; // Added FaBell for notification state
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SearchBox from '../SearchBox';
import { MyContext } from '../../App';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationOpenDrop, setNotificationOpenDrop] = useState(null);
  const [unreadMessages, setUnreadMessages] = useState([]); // Unread messages state
  const [hasNewMessage, setHasNewMessage] = useState(false); // Track new message
  const open = Boolean(anchorEl);
  const openNotifications = Boolean(notificationOpenDrop);
  const context = useContext(MyContext);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    // Create a SockJS connection and STOMP client
    const socket = new SockJS('http://localhost:8080/ws'); // Update with your actual backend URL
    const stompClient = Stomp.Stomp.over(socket);

    // Connect to the WebSocket server
    stompClient.connect({}, (frame) => {
      console.log('Connected: ' + frame);

      // Subscribe to the agency-specific topic
      //35 as agency id
      stompClient.subscribe(`/topic/messages/35`, (message) => {
        const receivedMessage = JSON.parse(message.body);
        console.log('New message received:', receivedMessage);

        // Add message to unread messages and set notification state
        setUnreadMessages((prev) => [...prev, receivedMessage]);
        setHasNewMessage(true); // Update bell icon state
      });
    });

    // Cleanup function to disconnect STOMP client
    return () => {
      stompClient.disconnect(() => {
        console.log('Disconnected from WebSocket');
      });
    };
  }, [agencyId]); 

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

  // Mark message as read and redirect
  const handleNotificationClick = (message) => {
    setUnreadMessages((prev) => prev.filter((msg) => msg.id !== message.id)); // Remove message
    if (unreadMessages.length === 1) {
      setHasNewMessage(false); // Reset bell icon state
    }
    navigate('/hello'); // Redirect to /hello
  };

  return (
    <div>
      <header className='d-flex align-items-center'>
        <div className='container-fluid w-100'>
          <div className='row d-flex align-items-center w-100'>

            {/* Logo Wrapper starts */}
            <div className='col-sm-2 part1'>
              <Link to={'/'} className='d-flex align-items-center logo'>
                <img src={logo} alt='logo' />
                <span className='ml-2'>TRACKEE</span>
              </Link>
            </div>
            {/* Logo Wrapper ends */}

            {/* searchBox Wrapper starts */}
            {context.windowWidth > 992 && (
              <div className='col-sm-3 d-flex align-items-center part2 res-hide'>
                <Button className='rounded-circle mr-3' onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
                  <MdMenuOpen />
                </Button>
                <SearchBox />
              </div>
            )}
            {/* searchBox Wrapper ends */}

            {/* other header Wrapper starts */}
            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <div className='header-button'>
                <Button className='rounded-circle mr-10'><MdOutlineLightMode /></Button>
                <Button className='rounded-circle mr-10'><MdOutlineMailOutline /></Button>

                {/* Bell Icon with notification */}
                <Button className='rounded-circle' onClick={handlenotificationOpenDrop}>
                  {hasNewMessage ? <FaBell /> : <FaRegBell />} {/* Changes icon based on message state */}
                </Button>

                <Menu
                  anchorEl={notificationOpenDrop}
                  id="notification"
                  className='notification dropdown_list'
                  open={openNotifications}
                  onClose={handlenotificationCloseDrop}
                  transformOrigin={{ horizontal: 'left', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <div className='head'>
                    <h4>Notifications({unreadMessages.length})</h4>
                  </div>
                  <Divider className='mb-1' />

                  <div className='scroll'>
                    {unreadMessages.map((message) => (
                      <MenuItem key={message.id} onClick={() => handleNotificationClick(message)}>
                        <div className='d-flex align-items-center'>
                          <div className='dropdownInfo'>
                            <div className='info'>
                              <h4>{message.content}</h4>
                              <p className='text-sky'>{message.timestamp}</p>
                            </div>
                          </div>
                        </div>
                      </MenuItem>
                    ))}
                  </div>

                  {unreadMessages.length === 0 && (
                    <MenuItem>
                      <div className='d-flex align-items-center'>
                        <div className='dropdownInfo'>
                          <div className='info'>
                            <h4>Aucune nouvelle notification</h4>
                          </div>
                        </div>
                      </div>
                    </MenuItem>
                  )}

                  <div className='btn-blue-wrapper'>
                    <Button className='btn-blue w-100'>Voir toutes les notifications</Button>
                  </div>
                </Menu>
              </div>

              {/* User profile starts */}
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
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon><PersonAdd /></ListItemIcon>
                    Mon Compte
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon><Settings /></ListItemIcon>
                    Paramètres
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAccDrop}>
                    <ListItemIcon><Logout /></ListItemIcon>
                    Déconnexion
                  </MenuItem>
                </Menu>
              </div>
              {/* User profile ends */}
            </div>
            {/* other header Wrapper ends */}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

