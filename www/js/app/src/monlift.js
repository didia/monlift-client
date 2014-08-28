/**
* This file contains the ML object. This is where everything about monlift is performed.
* This helps keep monlift separated from other Object and to live to its own spaces.
* This object is inspired from the FB object of the facebook javascript sdk
*
*/

define(["jquery", 'entities/user','entities/lift','app/event','app/exceptions', 'app/globals'], function($,User,Lift, EventProvider, exceptions, globals) {
	
	window.DEVELOPPEMENT = true;
	function MonLift()
	{
		this._userStatus = 'unknow';
		this._logging = true;
		this._domain = {
			api: window.DEVELOPPEMENT?'http://localhost:8080/api':'https://monliftca.appspot.com/api'
		};
		this._startEndpoint = "/start";
		this._baseEndpoints = {};
		this._token = null;
		this._user = null;
		this._cars = null;
		this._lifts = null;
	
		
	}
	
	
	
	MonLift.prototype = 
	{
		constructor: MonLift,
		
		_initStartingUrl: function() {
			var self = this;
			
			self.post(this._startEndpoint, null, function(response, status) {
 				if(status === "ok") {
 					// TODO set the base url
					console.log("Setting base endpoints: " + response);
					self._baseEndpoints["login"] = response.linkTo.login;
					self._baseEndpoints["register"] = response.linkTo.register;
					
						
 				}
 				else {
					self.log("Starting the application failed: " + response);
				}
 					
					
			});

		},

		_loadLiftsByUser : function() {
			 this.getUserLifts();
			 if(this._lifts == null) {
				 this._loadLiftsByUserFromServer();
			 }
		 },
		 
		 _loadLiftsByUserFromServer : function() {
			 var self = this;
			 var endpoint = this.getUser().getLinkTo("liftsByUser");
			 self.post(endpoint, null, function(response, status) {
				if(status === "ok")
				{
					self.setLifts(response);
					
				}
				else
				{
					self.log("Load User lifts from the server car failed : " + response);
					
				}
				
			});
		 },

		 /*
		 * Load a session from localStorage if one exists
		 *
		 */
		_loadSession: function(){
			console.log("Loading the session");
			
			var token= this.getFromLocalStorage("token");
			var user = this.getFromLocalStorage("user");
			
			
			if(token && user)
 		 	{
				console.log(token);
				this._token = token;
				this._user = new User(user);
 		 		this._userStatus = "connected";
				this._baseEndpoints["logout"] = this.getFromLocalStorage("logout");
	
				if(this.isCurrentUserDriver()) {
					this._loadUserCars();
					this._loadLiftsByUser();
				}
				
 		 	}
			
			
		},

		_loadUserCars : function() {
			 this.getUserCars();
			 if(this._cars == null) {
				this._loadUserCarsFromServer();
			 }
		 },
		 
		 _loadUserCarsFromServer : function() {
			 var self = this;
			 console.log(this.getUser());
			 
			 var endpoint = this.getUser().getLinkTo("userCars");
			 self.post(endpoint, null, function(response, status) {
				if(status === "ok")
				{
					console.log("Load User Cars response: " + response);
					self.setCars(response);
					
				}
				else
				{
					self.log("Load User cars from the server car failed : " + response);
					
				}
				
			});
		 },

		 addCar : function(car) {
			 var carsLocalStorageKey = this.getCarsLocalStorageKey();
			 if(!this._cars) {
				 this._cars = [];
			 }
			 this._cars.push(car);
			 this.saveToLocalStorage(carsLocalStorageKey, this._cars);
			 
		 },


                        addLift:function(lift){
                                var liftsLocalStorageKey = this.getLiftsLocalStorageKey();
                                if(!this._lifts)
                                { 
                                    this._lifts = [];
                                }
                                this._lifts.push(lift);
                                this.saveToLocalStorage(liftsLocalStorageKey, this._lifts);
                        },
	 

		 bind: function(toObject, methodName){
    			return function(){toObject[methodName](Array.prototype.slice.call(arguments))};
	     	},

	     	 createCar : function(name, matricule, description) {
			var self = this;
			var endpoint = "cars/create";
			var jsonRequest = {
				"name":name,
				"description" : description,
				"matricule" : matricule
			}
			
			self.post(endpoint, jsonRequest, function(response, status){
				if(status === "ok")
				{
					self.addCar(response);
					EventProvider.fire('ML.carCreated');
					
				}
				else
				{
					self.log("create car failed " + response);
					EventProvider.fire('ML.createCarFailed', response);
				}
				
				
			});

		 },

		 createLift: function (from, to, time, price, meetingPlace, totalPlace, car){
		 		var self = this;
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
				self.post(endpoint, jsonRequest, function(response, status){
						if(status === "ok")
						{
							console.log("lift  created");
							self.addLift(response);
							self.log("lift  created");
						
						}
						else
						{
							self.log("add lift  failed: " + response);
							console.log("lift  note created" + response);
							
							
						}
 						})		
		},

		//à verifier .. pour les contener et leur mise en forme 
		 createSlidePanel: function(/*string*/ gridid, /*int*/ cellWidth,  /*int*/ padding) {
			var x = padding;
			
			$(gridid).each(function() {
				$(this).css({
					'position': 'relative',
					'left': '0px'
				});
				
				$(this).parent().css('overflow', 'hidden');
				$(this).children('.cell').each(function() {
					$(this).css({
						width: cellWidth + 'px',
						height: '90%',
						position: 'absolute',
						left: x + 'px',
						top: padding + 'px'
					});
		
					x += cellWidth + padding;
				});
			});
		 },

	     	deleteFromLocalStorage : function(key) {
			window.localStorage.removeItem(key); 
		},

		deleteSession: function()
		 {
			 this._user = null;;
			 this._token = null;
			 this.deleteFromLocalStorage("user");
			 this.deleteFromLocalStorage("token");
			 this.deleteFromLocalStorage("logout");
			 this._userStatus = "not connected";
		 },

		 getCarsLocalStorageKey : function() {
			 return this.isUserLoggedIn()?globals.CARS_KEY_PREFIX + this._user.getId():null;
		 },

		 getFromLocalStorage : function(key) {
			var object = window.localStorage.getItem(key);
			if(!object) {
				return null;
			}
			return JSON.parse(object);
		},

		getLiftsLocalStorageKey : function() {
			 return this.isUserLoggedIn()?globals.LIFTS_KEY_PREFIX + this._user.getId():null;
		 },

		getLoginEndpoint : function() {
			 return this._baseEndpoints["login"];
		 },

		getRegisterEndpoint : function() {
			 return this._baseEndpoints["register"];
		 },

		getToken: function()
		 {
			return this._token? this._token:null;
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

		getUserCars : function() {
			 
			 if(!this._cars) {
				 var carsLocalStorageKey = this.getCarsLocalStorageKey();
				 this._cars = this.getFromLocalStorage(carsLocalStorageKey);
			 }
			 
			 return this._cars;
		 },

		getUserLifts:function() {
			 
			 if(!this._lifts) {
				 var liftsLocalStorageKey = this.getLiftsLocalStorageKey();
				 this._lifts = this.getFromLocalStorage(liftsLocalStorageKey);
			 }
			 
		 	return this._lifts;
		 },

		init: function(options){
			
			if(options != null) {
				this.opts = options;
			}
			this._initStartingUrl();
			this._loadSession();
			
		},

		isCurrentUserDriver : function()
		 {
			return this.getUser().isUserDriver(); 
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
		
		loginRequired: function()
		 {
			 if(!this.isUserLoggedIn()){
				 EventProvider.fire('ui.showLoginPage');
				 throw new exceptions.LoginException("User required to log in");
			 }
		 },

		/**
		 * Posts json data to api 
		 * @param endpoint 
		 * @param data
		 * @param cb
		 */
		 post:function(endpoint, request, cb) {
			 if(request == null) {
				 request = {};
			 }
			 if(this._token != null) {
				 request["token"] = this._token;
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
		
		 promoteUserToDriver : function(username) {
			 var self = this;
			 if(!self.isCurrentUserDriver()) {
			 	var endpoint = self.getUser().getId() + "/promote/";
				var jsonRequest = {
 					"username":username
 				}
				
				self.post(endpoint, jsonRequest, function(response, status){
 					if(status === "ok")
 					{
 						self.setUsername(username);
						EventProvider.fire('ML.userPromoted');
						
 					}
 					else
 					{
						self.log("Promote user failed: " + response);
						EventProvider.fire('ML.promoteUserFailed', response);
 					}
 					
					
 				});

				
				
			 }
		 },

		saveToLocalStorage : function(key, object) {
			window.localStorage.setItem(key, JSON.stringify(object));
		},

		 setCars : function(carsData) {
			 var carsLocalStorageKey = this.getCarsLocalStorageKey();
			 this._cars = carsData;
			 this.saveToLocalStorage(carsLocalStorageKey, this._cars);
		 },

		 addLift:function(lift){
			 var liftsLocalStorageKey = this.getLiftsLocalStorageKey();
			 if(!this._lifts)
			 {
				 this._lifts = [];
			 }
			 this._lifts.push(lift);
			 this.saveToLocalStorage(liftsLocalStorageKey, this._lifts);
		 },
		 

		 setLifts : function(liftsData) {
			 var liftsLocalStorageKey = this.getLiftsLocalStorageKey();
			 this._lifts = liftsData;
			 this.saveToLocalStorage(liftsLocalStorageKey, this._lifts);
		 },

		/*
 		 *Function to set a user session
 		 *session is an object with the form:
 		 * {
		 *  user: The user Object
		 *  token: The user OAuth Token.
		 * }
 		 */
 		setSession: function(sessionData) {
			this.saveToLocalStorage("user", sessionData.user);
			this.saveToLocalStorage("token", sessionData.token);
			this.saveToLocalStorage("logout", sessionData.linkTo.logout);
			this._loadSession();
 		},	
		
		setUsername: function(username) {
			this._user.setUsername(username);
			this.updateUser();
		},	
		
		updateUser: function() {
			this.saveToLocalStorage("user", this._user);
		},
		 
		 userHasCar : function() {
			
			 return this._cars?true:false;
		 }
		 		
		
	},
	
	
	MonLift.instance = null;
	return {
		destroy : function() {
			MonLift.instance = new MonLift();
			MonLift.instance.init();
		},

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