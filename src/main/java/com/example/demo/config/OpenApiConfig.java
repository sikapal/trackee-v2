package com.example.demo.config;


import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
		
		info = @Info(
				
				title="Trackee API",
				description = "This is the documentation for trackee application",
				summary = "For the moment the summary is left empty",
				termsOfService="to be determined",
				contact = @Contact(
						name = "Trackee",
						email = "skpcorp09@gmail.com"
						),
				license =@License(
						name = "No licence Yet"
						),
				
				version = "V3"
				),
		servers = {
				@Server(
				   description = "Developpement servers",
				   url ="http://localhost:1010"
					),
				@Server(
						   description = "Test servers",
						   url ="http://localhost:1010"
							)
		}
		
		
		
		)
public class OpenApiConfig {

}
