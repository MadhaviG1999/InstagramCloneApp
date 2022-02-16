package com.example.Instagramstatus.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Status")
public class Status {

	@Id
	private int id;
	
	private String statusId;
	private String userId;
	private String path;
	private String userName;

	public Status() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Status(int id, String statusId, String userId, String path) {
		super();
		this.id = id;
		this.statusId = statusId;
		this.userId = userId;
		this.path = path;
		
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getStatusId() {
		return statusId;
	}
	public void setStatusId(String statusId) {
		this.statusId = statusId;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getPath() {
		return path;
	}
	public void setPath(String path) {
		this.path = path;
	}
	
}
