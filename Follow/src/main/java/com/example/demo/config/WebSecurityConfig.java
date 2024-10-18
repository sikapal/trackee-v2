package com.example.demo.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
 
import lombok.AllArgsConstructor;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true, jsr250Enabled = true)
public class WebSecurityConfig {

	@Autowired
	private JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;

	@Autowired
	private UserDetailsService jwtUserDetailsService;

	@Autowired
	private JwtRequestFilter jwtRequestFilter;

	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		// We don't need CSRF for this example
        //http.csrf().disable()
        http.csrf().disable().
  authorizeRequests().requestMatchers("/authenticate","/**").permitAll();
		/*.authorizeHttpRequests(requests -> requests.requestMatchers(new 
        		AntPathRequestMatcher("/authenticate")).permitAll()).
        authorizeHttpRequests((authorize) ->
        {
			try {
				authorize.anyRequest().authenticated().and().httpBasic().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
).
        formLogin(
                form -> form
                       .loginPage("").failureUrl("/login?error=true")
                        .usernameParameter("matricule")
                        .passwordParameter("password")
                       .permitAll()//.and().authenticationProvider ( daoAuthenticationProvider ())
        )
        .logout(
                logout -> logout
                        .logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
                        .permitAll()
        ).*/
        http.authorizeRequests().requestMatchers("/","/delivery","/deliveries","/get_Transit")
        .authenticated().and().httpBasic().authenticationEntryPoint(jwtAuthenticationEntryPoint);
        http.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);
return http.build();
		// Add a filter to validate the tokens with every request
	}
	
    @Bean
    public AuthenticationManager authenticationManager(HttpSecurity http) 
      throws Exception {
        return http.getSharedObject(AuthenticationManagerBuilder.class)
          .userDetailsService(jwtUserDetailsService)
          .passwordEncoder(new BCryptPasswordEncoder())
          .and().build();
    }
}
