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
		this.id = user.id;
		this.firstname = user.firstname ;
		this.lastname = user.lastname;
		this.email = user.email;
		this.phone = user.phone;
		this.username = user.username;
		this.isDriver = user.isDriver;
		this.linkTo = user.linkTo;
		
		
	}
 
	User.prototype = {
		constructor: User,

		getEmail:function() {
	 		return this.email;
	 	},

	 	getFirstname:function() {
		 	return this.firstname;
	 	},
	 	
		getId : function() {
			return this.id;
		},
	 	
		getLastname:function() {
		 	return this.lastname;
	 	},
	 	
		getLinkTo : function(theLink) {
			return this.linkTo[theLink];
		},
	 	
		getPhone:function(){
		 	return this.phone;
	 	},
	 
	 	getUsername:function(){ 
			return this.username;
	 	},
		
		isUserDriver:function() {
			return this.isDriver;
		},
		
		setUsername:function(username){
			this.username = username;
			this.isDriver = true;
		}
		
		
		
		
	
	 
 };
 return User;
 });
// JavaScript Document