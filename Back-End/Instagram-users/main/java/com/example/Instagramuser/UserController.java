package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Users;
import com.example.demo.service.UserService;

@RestController
@RequestMapping("/users")
public class UserController 
{
	
	
	@Autowired
	UserService userService;
	
	
	
	@PostMapping("")
	private boolean submitUser(@RequestBody Users users) {
		System.out.println("see the message");
		userService.submitMetaDataOfUser(users);
		return true;
	}
	
	@GetMapping("/{userid}")
	private Users getUserDetails(@PathVariable("userid") String userId) {
		System.out.println("checking userid");
		userService.displayUserMetaData(userId);
		return new Users();
		
	}
}