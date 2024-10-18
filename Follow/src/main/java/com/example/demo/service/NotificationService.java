package com.example.demo.service;
import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.model.NotificationRequest;

import jakarta.servlet.http.HttpSession;

@Service
public class NotificationService {

    @Autowired
    private RestTemplate restTemplate;

    public void sendNotification(HttpSession session, String msg, String agencyId) {
        // Create the notification request body
        NotificationRequest notificationRequest = new NotificationRequest();
        long uniqueId = Instant.now().toEpochMilli();
        notificationRequest.setId(agencyId+uniqueId); // Example ID
        notificationRequest.setAgencyId(agencyId);
        notificationRequest.setMessage(msg);

        // Set the headers (optional)
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        // Wrap the request object in an HttpEntity with the headers
        HttpEntity<NotificationRequest> request = new HttpEntity<>(notificationRequest, headers);

        // Send POST request
        String url = "http://localhost:8080/notify"; // Adjust URL accordingly
        restTemplate.exchange(url, HttpMethod.POST, request, Void.class);
    }
}
