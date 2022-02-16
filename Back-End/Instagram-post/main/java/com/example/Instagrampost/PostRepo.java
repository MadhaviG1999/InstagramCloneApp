package com.example.Instagrampost.repository;

import java.util.ArrayList;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Instagrampost.model.Post;

@Repository
public interface PostRepo extends CrudRepository<Post, Integer> {

	@SuppressWarnings("unchecked")
	Post save(Post post);
	ArrayList<Post> findAll();
	
}
