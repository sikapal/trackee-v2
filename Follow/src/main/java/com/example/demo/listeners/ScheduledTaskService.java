package com.example.demo.listeners;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import org.springframework.validation.BindingResult;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.springframework.web.servlet.view.RedirectView;

import jakarta.servlet.http.HttpSession;

@Component
public class ScheduledTaskService {

  @Scheduled(fixedRate = 5000)
  public RedirectView execute() {

      //modelAndView.addObject("successMessage", "User has been registered successfully");
      //modelAndView.addObject("user", new User());
      //attributes.addAttribute("Authorization", "Bearer "+session.getAttribute("token"));
      System.out.println("hey");
      return new RedirectView("http://localhost:8080/tracking");
}
}
