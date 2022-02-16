package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.model.Users;
import com.example.demo.repository.UserRepository;


@Service
public class UserService {

	@Autowired
	UserRepository userRepository;
	
	public Users submitMetaDataOfUser(Users user) {
		return userRepository.save(user);
	}
	
	public Users displayUserMetaData(String userid) {
		return userRepository.findByUserId(userid);
	}
}