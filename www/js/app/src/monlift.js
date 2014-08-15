/**
* This file contains the ML object. This is where everything about monlift is performed.
* This helps keep monlift separated from other Object and to live to its own spaces.
* This object is inspired from the FB object of the facebook javascript sdk
*
*/

define(["jquery", 'entities/user','entities/liftEntitie','app/event','app/exceptions'], function($,User,Lift, EventProvider, exceptions) {
	
	window.DEVELOPPEMENT = true;
	function MonLift()
	{
		this._userStatus = 'unknow';
		this._logging = true;
		this._domain = {
			api: window.DEVELOPPEMENT?'http://localhost:8080/api':'https://monliftca.appspot.com/api'
		};
		this._token = null;
		this._user = null;
		this._cars = null;
		this._lifts = null;
	
		
	}
	
	
	
	MonLift.prototype = 
	{
		constructor: MonLift,
		
		init: function(options){
			this.opts = options;
			this._loadSession();
			
		},
		
		saveToLocalStorage : function(key, object) {
			window.localStorage.setItem(key, JSON.stringify(object));
		},
		
		getFromLocalStorage : function(key) {
			var object = window.localStorage.getItem(key);
			if(!object) {
				return null;
			}
			return JSON.parse(object);
		},
		
		deleteFromLocalStorage : function(key) {
			window.localStorage.removeItem(key); 
		},
		
		/*
		 * Load a session from localStorage if one exists
		 *
		 */
		_loadSession: function(){
			console.log("Loading the session");
			
			var token= this.getFromLocalStorage("token");
			var user = this.getFromLocalStorage("user");
			var lift = this.getFromLocalStorage ("lifts");
			
			if(token && user)
 		 	{
				console.log(token);
				this._token = token;
				this._user = new User(user);
 		 		this._userStatus = "connected";
				//charger la list de lifts
				this._lifts =this.getFromLocalStorage ("lifts");
				//Load cars
				this._cars = this.getFromLocalStorage("cars");
				
 		 	}
			
			
		},
		
		
		/**
		 * Posts json data to api 
		 * @param endpoint 
		 * @param data
		 * @param cb
		 */
		 post:function(endpoint, request, cb) {
			 	
			 if(this._token != null)
			 {
				 request != null?request["token"] = this._token:request={"token":this._token};
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
			this._user = new User(sessionData.user);
			this.saveToLocalStorage("user", this._user);
			
			this._token = sessionData.token;
			this.saveToLocalStorage("token", this._token);
			
			this._userStatus = "connected";
			
 			
 		},	
	
		
		updateUser: function() {
			this.saveToLocalStorage("user", this._user);
		},
		
		setUsername: function(username) {
			this._user.setUsername(username);
			this.updateUser();
		},
		
		/*
 		 * Function to get the user 
 		 * @return user
 		 *
 		 */
		getUser:function()
		{
			
			return this._user;
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
			return this.getUser().isUserDriver(); 
		 },
		 
		 bind: function(toObject, methodName){
    			return function(){toObject[methodName](Array.prototype.slice.call(arguments))};
	     },
		 
		 getToken: function()
		 {
			return this._token? this._token:null;
		 },
		 
		 deleteSession: function()
		 {
			 this._user = null;;
			 this._token = null;
			 this.deleteFromLocalStorage("user");
			 this.deleteFromLocalStorage("token");
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
		 },
		 
		 createLift: function (from, to, time, price, meetingPlace, totalPlace, car){
		 
				var endpoint = "lifts/create";
 					var jsonRequest = {
						"from" : from,
						"to": to,
						"time" : time,
						"price": price,
						"meetingPlace" : meetingPlace,
						"totalPlace" : totalPlace,
						"carId" : car,
						
 						}
				ML.post(endpoint, jsonRequest, function(response, status){
						if(status === "ok")
						{
							console.log("lift  created");
							ML.addLift(response);
							ML.log("lift  created");
						
						}
						else
						{
							ML.log("add lift  failed: " + response);
							console.log("lift  note created" + response);
							
							
						}
 						})		
			},
		 
		 createCar : function(name, matricule, description) {
			var endpoint = "cars/create";
			var jsonRequest = {
				"name":name,
				"description" : description,
				"matricule" : matricule
			}
			
			ML.post(endpoint, jsonRequest, function(response, status){
				if(status === "ok")
				{
					ML.addCar(response);
					EventProvider.fire('ML.carCreated');
					
				}
				else
				{
					ML.log("create car failed " + response);
					EventProvider.fire('ML.createCarFailed', response);
				}
				
				
			});

		 },
		 
		 addLift:function(lifts){
			 
			 if(!this._lifts)
			 {
				 this._lifts = [];
			 }
			 this._lifts.push(lifts);
			 this.saveToLocalStorage("lifts", this._lifts);
		 },
			 
		 
		 addCar : function(car) {
			 if(!this._cars) {
				 this._cars = [];
			 }
			 this._cars.push(car);
			 this.saveToLocalStorage("cars", this._cars);
			 
		 },
		 
		 userHasCar : function() {
			
			 return this._cars?true:false;
		 },
		 
		 getUserCars : function() {
			 return this._cars;
		 },
		 getlifts:function(){
		 	return this._lifts;
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