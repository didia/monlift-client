 /**
 * @author Trispa
 *
 */
 define(function(){
	 
 	function User(user)
 	{
		if(!(this instanceof User)){
			throw new typeError("User constructor conot be called as a function.");
		}
		
		this.firstname = user.firstname ;
		this.lastname = user.lastname;
		this.email = user.email;
		this.phone = user.phone;
		this.username = user.username;
		this.isdriver = user.isDriver;
		
		
	}
 
	User.prototype = {
		constructor: User,
	 
	 	getFirstname:function() {
		 	return this.firstname;
	 	},
	 	
		getLastname:function() {
		 	return this.lastname;
	 	},
	 	
		getEmail:function() {
	 		return this.email;
	 	},
	 	
		getPhone:function(){
		 	return this.phone;
	 	},
	 
	 	getUsername:function(){ 
			return this.username;
	 	},
		
		isDriver:function() {
			return this.isdriver;
		}
	
	 
 };
 return User;
 });
// JavaScript Document