package com.example.Instagramcomment.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Instagramcomment.model.Comments;
import com.example.Instagramcomment.repository.CommentRepo;

@Service
public class CommentService {
	
	@Autowired
	CommentRepo commentRepo;
	
	@Autowired
	CommentService commentService;
	
	public Comments submitCommentToDB(Comments comment) {
		return commentRepo.save(comment);
	}
	
	public ArrayList<Comments> getAllCommentsForDB(String postId){
		
		ArrayList<Comments> commentList=commentRepo.findAllByPostId(postId);
		
		for(int i=0;i<commentList.size();i++) {
			Comments commentItem=commentList.get(i);
			commentItem.setUserName(commentService.displayUserMetaData(commentItem.getUserId()).getUserName());
		}
		
		return commentList;
		
	}

	private Comments displayUserMetaData(String userId) {
		// TODO Auto-generated method stub
		return null;
	}
}