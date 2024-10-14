import React, { useContext, useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
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
import { NotificationContext } from '../../NotificationContext'; // Import the context

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [notificationOpenDrop, setNotificationOpenDrop] = useState(null);
  const {
    unreadMessages,
    addNotification,
    removeNotification,
    hasNewMessage,
    setHasNewMessage,
  } = useContext(NotificationContext);
  const open = Boolean(anchorEl);
  const openNotifications = Boolean(notificationOpenDrop);

  const context = useContext(MyContext);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    alert("hey")
    // Create a SockJS connection and STOMP client
    const socket = new SockJS('http://localhost:8080/ws'); // Update with your actual backend URL
    const stompClient = Stomp.over(socket);

    // Connect to the WebSocket server
    stompClient.connect({}, (frame) => {
      console.log("Connected: " + frame);

      // Subscribe to the agency-specific topic
      //35 as agency id
      stompClient.subscribe(`/topic/messages/35`, (message) => {
        const receivedMessage = JSON.parse(message.body);
        if (Notification.permission === 'granted') {
          alert("nouveau message");
          new Notification('New Message', {
            body: receivedMessage.message, // Assuming 'content' is the message text
          });
        } else if (
          Notification.permission == "default" ||
          Notification.permission == "denied"
        ) {
          // Request permission if not granted
          Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
              alert("no");
              new Notification('New Message', {
                body: receivedMessage.message,
              });
            }
          });
        }
        // Add message to unread messages and set notification state
        //setUnreadMessages((prev) => [...prev, receivedMessage]);
        setHasNewMessage(true); // Update bell icon state
        addNotification(receivedMessage);
        console.log("Notification permission:", Notification.permission);
      });
    });

    // Cleanup function to disconnect STOMP client
    return () => {
      if (stompClient && stompClient.connected) {
        stompClient.disconnect(() => {
          console.log("Disconnected from WebSocket");
        });
      }
    };
  }, [addNotification]); 


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
    removeNotification(message.id); // Remove from unread notifications
    if (unreadMessages.length === 1) {
      setHasNewMessage(false); // Reset the new message state if it was the last notification
    }
    navigate("/formupload");
  };

  return (
    <div>
      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* Logo Wrapper starts */}
            <div className="col-sm-2 part1">
              <Link to={"/"} className="d-flex align-items-center logo">
                <img src={logo} alt="logo" />
                <span className="ml-2">TRACKEE</span>
              </Link>
            </div>
            {/* Logo Wrapper ends */}

            {/* searchBox Wrapper starts */}

            {context.windowWidth > 992 && (
              <div className="col-sm-3 d-flex align-items-center part2 res-hide">
                <Button
                  className="rounded-circle mr-3"
                  onClick={() =>
                    context.setIsToggleSidebar(!context.isToggleSidebar)
                  }
                >
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


                {/* Bell Icon with notification */}
                <Button className='rounded-circle' onClick={handlenotificationOpenDrop}>
                  {hasNewMessage ? <FaBell /> : <FaRegBell />} {/* Changes icon based on message state */}
                </Button>

                <Button className='rounded-circle mr-10'><MdOutlineMailOutline /></Button>


              </div>

              <div className='dropdownWrapper position relative'>


                <Button className="rounded-circle mr-10">
                  <MdOutlineMailOutline />
                </Button>
              </div>

              <div className="dropdownWrapper position relative">
                <Menu
                  anchorEl={notificationOpenDrop}
                  id="notification"
                  className="notification dropdown_list"
                  open={openNotifications}
                  onClose={handlenotificationCloseDrop}
                  transformOrigin={{ horizontal: "left", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                >
                  <div className="head">
                    <h4>Notifications({unreadMessages.length})</h4>
                  </div>
                  <Divider className="mb-1" />

                  <div className="scroll">
                    {unreadMessages.map((message) => (
                      <div key={message.id} onClick={() => handleNotificationClick(message)}>
                        <div className='d-flex align-items-center'>
                          <div className='dropdownInfo'>
                            <div className='info'>
        <p className='text-sky'>{message.message}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {unreadMessages.length === 0 && (
                    <MenuItem>
                      <div className="d-flex align-items-center">
                        <div className="dropdownInfo">
                          <div className="info">
                            <h4>Aucune nouvelle notification</h4>
                          </div>
                        </div>
                      </div>
                    </MenuItem>
                  )}

                  <div className="btn-blue-wrapper">
                    <Button className="btn-blue w-100">
                      Voir toutes les notifications
                    </Button>
                  </div>
                </Menu>
              </div>


              { 
                context.isLogin!==true ?
                <Link to={'/login'}>
                   <Button className="btn-blue btn-lg btn-round">Se Connecter</Button>
              
                </Link>
                :
               
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
              }
              

            </div>
            {/* other header Wrapper ends */}
          </div>
        </div>
      </header >
    </div >
  );
};

export default Header;
