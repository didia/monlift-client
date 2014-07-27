/**
 * @author Trispa
 *
 */
 define(function(){
 function Session(user,token)
 {
	if(!(this instanceof Session)){
		throw new typeError("Session constructor conot be called as a function.");
	}
		 this.user = user;
		 this.token = token;
		
	
 }; 
 
 Session.prototype = {
	 
	 constructor: Session,
	 
	 getUser : function(){
		 return this.user;
	 },
	 getToken:function(){
		 return this.token;
	 }
	 
 };
	return Session;
 });	 
 
// JavaScript Document