package com.example.demo.controllers;

//NotificationController.java
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.NotificationRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow your React app's origin
public class NotificationController {
 private final SimpMessagingTemplate messagingTemplate;

 public NotificationController(SimpMessagingTemplate messagingTemplate) {
     this.messagingTemplate = messagingTemplate;
 }

 @PostMapping("/notify")
 public void notifyAgency(@RequestBody NotificationRequest notificationRequest) {
     // Assuming agencyId is a property in the notificationRequest
     messagingTemplate.convertAndSend("/topic/messages/" + notificationRequest.getAgencyId(), notificationRequest);
 }
}

