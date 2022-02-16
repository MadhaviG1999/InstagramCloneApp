package com.example.demo.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.mongodb.lang.NonNull;

@Document(collection="Users")
public class Users {

		@Id
		private int id=2;
		
		@NonNull
		private String userId="123";
		private String userName="manisha123";
		private String name="manisha";
		private String profileImage="www.google.com";
		
		public Users() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Users(int id, String userId, String userName, String name, String profileImage) {
			super();
			this.id = id;
			this.userId = userId;
			this.userName = userName;
			this.name = name;
			this.profileImage = profileImage;
		}
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getUserId() {
			return userId;
		}
		public void setUserId(String userId) {
			this.userId = userId;
		}
		public String getUserName() {
			return userName;
		}
		public void setUserName(String userName) {
			this.userName = userName;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getProfileImage() {
			return profileImage;
		}
		public void setProfileImage(String profileImage) {
			this.profileImage = profileImage;
		}
	}


