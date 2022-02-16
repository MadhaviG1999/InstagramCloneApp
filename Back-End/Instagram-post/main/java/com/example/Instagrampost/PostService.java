package com.example.Instagrampost.service;

import java.util.ArrayList;
import java.util.Collections;

import com.example.Instagrampost.model.Post;
import com.example.Instagrampost.repository.PostRepo;

public class PostService {

	
	PostRepo postRepo;
	
		
	public Post submitPostToDataBase(Post post) {
		return postRepo.save(post);
	}
	
	public ArrayList<Post> retrivePostFromDB(){

		ArrayList<Post> postList=postRepo.findAll();
		
		for(int i=0;i<postList.size();i++) {
			Post postItem=postList.get(i);
			postItem.setUserName(PostService.displayUserMetaData(postItem.getUserId()).getUserName());
		}
		Collections.sort(postList,(a,b)->b.getId()-a.getId());
		return postList;
	}

	private static Post displayUserMetaData(String userId) {
		// TODO Auto-generated method stub
		return null;
	}

}
