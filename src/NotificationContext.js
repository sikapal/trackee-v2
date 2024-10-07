import React, { createContext, useState, useEffect } from 'react';

// Create a Notification Context
export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [unreadMessages, setUnreadMessages] = useState(() => {
    const storedMessages = localStorage.getItem('unreadMessages');
    return storedMessages ? JSON.parse(storedMessages) : [];
  });

  const [hasNewMessage, setHasNewMessage] = useState(() => {
    // Load the hasNewMessage state from localStorage
    const storedHasNewMessage = localStorage.getItem('hasNewMessage');
    return storedHasNewMessage === 'true'; // Convert string to boolean
  });

  useEffect(() => {
    localStorage.setItem('unreadMessages', JSON.stringify(unreadMessages));
  }, [unreadMessages]);

  useEffect(() => {
    localStorage.setItem('hasNewMessage', hasNewMessage);
  }, [hasNewMessage]);

  const addNotification = (message) => {
    setUnreadMessages((prevMessages) => [...prevMessages, message]);
    setHasNewMessage(true); // Set to true when a new message is added
  };

  const removeNotification = (messageId) => {
    setUnreadMessages((prevMessages) =>
      prevMessages.filter((message) => message.id !== messageId)
    );
    // Optionally check if there are unread messages left and update hasNewMessage
    if (unreadMessages.length === 1) {
      setHasNewMessage(false); // If this was the last unread message
    }
  };

  return (
    <NotificationContext.Provider value={{ unreadMessages, addNotification, removeNotification, hasNewMessage, setHasNewMessage }}>
      {children}
    </NotificationContext.Provider>
  );
};
