package com.example.Instagramstatus.repository;


import java.util.ArrayList;


import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.Instagramstatus.model.Status;


@Repository
public interface StatusRepo extends MongoRepository<Status, Integer>{

	@SuppressWarnings("unchecked")
	Status save(Status save);
	ArrayList<Status> findAll();
}