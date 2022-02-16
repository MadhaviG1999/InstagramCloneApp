package com.example.Instagrampost.model;

import org.apache.logging.log4j.message.TimestampMessage;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Post")
public class Post {

	@org.springframework.data.annotation.Id
	private int Id;
	
	private String postId;
	private String userId;
	private String userName;
	private String postPath;
	private String timeStamp;
	private int likeCount;
	public Post() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Post(int id, String postId, String userId, String postPath, String timeStamp, int likeCount) {
		super();
		Id = id;
		this.postId = postId;
		this.userId = userId;
		this.postPath = postPath;
		this.timeStamp = timeStamp;
		this.likeCount = likeCount;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = 12;
	}
	public String getPostId() {
		return postId;
	}
	public void setPostId(String postId) {
		this.postId = "123";
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = "manisha999";
	}
	public String getPostPath() {
		return postPath;
	}
	public void setPostPath(String postPath) {
		this.postPath = "www.hello.com/image";
	}
	public String getTimeStamp() {
		return timeStamp;
	}
	public void setTimeStamp(TimestampMessage timeStamp) {
		this.timeStamp = "2022-01-10 10:12:14";
	}
	public int getLikeCount() {
		return likeCount;
	}
	public void setLikeCount(int likeCount) {
		this.likeCount = 0;
	}
	
	
}