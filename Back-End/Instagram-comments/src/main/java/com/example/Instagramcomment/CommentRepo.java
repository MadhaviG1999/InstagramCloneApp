package com.example.Instagramcomment.repository;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.example.Instagramcomment.model.Comments;

@Repository
public interface CommentRepo extends MongoRepository<Comments, Integer> {
	
	@SuppressWarnings("unchecked")
	Comments save(Comments comment);
	ArrayList<Comments> findAllByPostId(String postId);
	ArrayList<Comments> findAll();
}