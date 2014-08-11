/**
* This file contains the ML object. This is where everything about monlift is performed.
* This helps keep monlift separated from other Object and to live to its own spaces.
* This object is inspired from the FB object of the facebook javascript sdk
*
*/

define(["jquery", 'entities/user','entities/session','app/event','app/exceptions'], function($,User, Session, EventProvider, exceptions) {
	
	window.DEVELOPPEMENT = true;
	function MonLift()
	{
		this._session = null;
		this._userStatus = 'unknow';
		this._logging = true;
		this._domain = {
			api: window.DEVELOPPEMENT?'http://localhost:8080/api':'https://monliftca.appspot.com/api'
		};
	}
	
	
	
	MonLift.prototype = 
	{
		constructor: MonLift,
		
		init: function(options){
			this.opts = options;
			this._loadSession();
			
		},
		
		/*
		 * Load a session from localStorage if one exists
		 *
		 */
		_loadSession: function(){
			console.log("Loading the session");
			var session = window.localStorage.getItem('session');
			if(session)
 		 	{
				console.log(session);
				session = JSON.parse(session);
 		 		this._buildSessionObject(session);
 		 		this._userStatus = "connected";
 		 	}
		},
		
		
		/**
		 * Posts json data to api 
		 * @param endpoint 
		 * @param data
		 * @param cb
		 */
		 post:function(endpoint, request, cb) {
			 	
			 if(this._session != null)
			 {
				 request != null?request["token"] = ML._session.token:request={"token":ML._session.token};
			 }
			 request = JSON.stringify(request);
		     if(endpoint[0] != "/")
		    	  endpoint = "/" + endpoint;
		     endpoint = this._domain.api + endpoint;
	
			 $.ajax({
			 	type: "POST",
			 	url:endpoint, 
			 	dataType:"json",
			 	async: true,
			 	data: request, 
				contentType: "application/json; charset=utf-8",

			 	success:function(data){
					console.log(data);
					cb.apply(null, [data, "ok"])
				},

			 	error: function(jqxhr, textstatus, error){
					cb.apply(null, [jqxhr.responseText, "failed"]);


				}
		 });
		 },
		
		/**
		 * Logs a message for the developer if logging is on.
		 *
		 * @param args {Object} the thing to log
		 */
		log: function(args) {
			if (this._logging) {
				if (window.console) {
		          window.console.log(args);
		        }
		    }
		    
		},
		
 		/*
 		 *Function to set a user session
 		 *session is an object with the form:
 		 * {
		 *  user: The user Object
		 *  token: The user OAuth Token.
		 * }
 		 */
 		setSession: function(sessionData)
		
 		{
			console.log(sessionData);
			this._buildSessionObject(sessionData);
			this._userStatus = "connected";
 			window.localStorage.setItem('session', JSON.stringify(sessionData));
 		},	
		
		_buildSessionObject: function(sessionData){
			var user = new User(sessionData.user);
			this._session = new Session(user, sessionData.token);
		},
		
		//TODO : separate session object and user object into distinct object
		updateUser: function(userData) {
			var user = new User(userData);
			this._session.user = user;
		},
		
		setUsername: function(username) {
			this._session.user.setUsername(username);
		},
		
		/*
 		 * Function to get the user 
 		 * @return user
 		 *
 		 */
		getUser:function()
		{
			console.log(this._session.token);
			return this._session.getUser();
		},
 		
		/*
 		 * Function to get the login status of the user
 		 * @return boolean
 		 *
 		 */
 		 isUserLoggedIn : function()
 		 {
 		 	if(this._userStatus == "connected")
 		 	{
 		 		return true;
 		 	}
 		 	this._loadSession();
 		 	
			return this.userStatus == "connected"?true:false;
 		 },
		 
		 isCurrentUserDriver : function()
		 {
			return this.getUser().isDriver(); 
		 },
		 
		 bind: function(toObject, methodName){
    			return function(){toObject[methodName](Array.prototype.slice.call(arguments))};
	     },
		 
		 getToken: function()
		 {
			return this._session? this._session.token:null;
		 },
		 
		 deleteSession: function()
		 {
			 this._session = null;
			 window.localStorage.removeItem('session'); 
			 this._userStatus = "not connected";
		 },
		 
		 loginRequired: function()
		 {
			 if(!this.isUserLoggedIn()){
				 EventProvider.fire('ui.showLoginPage');
				 throw new exceptions.LoginException("User required to log in");
			 }
		 },
		 
		 promoteUserToDriver : function(username) {
			 if(!this.isCurrentUserDriver()) {
			 	var endpoint = this.getUser().getId() + "/promote/";
				var jsonRequest = {
 					"username":username
 				}
				
				ML.post(endpoint, jsonRequest, function(response, status){
 					if(status === "ok")
 					{
 						ML.setUsername(username);
						EventProvider.fire('ML.userPromoted');
						
 					}
 					else
 					{
						ML.log("Promote user failed: " + response);
						EventProvider.fire('ML.promoteUserFailed', response);
 					}
 					
					
 				});

				
				
			 }
		 }
		 
			
		
	}
	
	MonLift.instance = null;
	return {
		getInstance:function(){
			if(MonLift.instance)
			{
				return MonLift.instance;
			}
			MonLift.instance = new MonLift();
			MonLift.instance.init();
			return MonLift.instance;
		}
	}

})