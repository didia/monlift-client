/**
 * This file contains files related to authentification management.
 * Global Events:
 *  auth.login
 *	auth.register
 *  auth.logout
 *	auth.sessionChange
 */

 define(['app/monlift', 'app/event'], function(monlift, EventProvider){
	 
	 ML = monlift.getInstance();
	 
	 return {
	 	/*
 		 * Function to get the login status of the user
 		 * @return boolean
 		 *
 		 */
 		 isUserLoggedIn : function()
 		 {
			 return ML.isUserLoggedIn();
		 },

 		/*
 		 * Function to login to the server, return a token
 		 *
 		 */
 		login: function(email, password)
 		{
 			if(email && password)
 			{
	 		 	var endpoint = ML.getLoginEndpoint();
	 		 	var jsonRequest = {"email":email, "password":password};
	 		 	ML.post(endpoint, jsonRequest, function(response, status){
					
	 		 		if(status == "ok")
	 		 		{
 						ML.setSession(response);
						EventProvider.fire("auth.login");
	 		 		}
	 		 		else
	 		 		{
	 		 			ML.log("Login failed: " + response);
						EventProvider.fire("auth.loginFailed", response);
	 		 		}

	 		 	});

 		 	}

 		},

 		/*
 		 * function to logout user how allready connect
 		 */
 		logout: function()
 		{
 			var endpoint = ML.getLogoutEndpoint();
 			ML.post(endpoint, null, function(response, status){
 				console.log("The post succeeded");
 				ML.deleteSession();
 				EventProvider.fire('auth.logout')
	
			});
 			
 		},

 		/*
 		 * Function to register a new user
 		 *
 		 */  
 		register:function(firstname, lastname, email, password, phone){
 			if(firstname && lastname && password && email && phone)
 			{
 				var endpoint = ML.getRegisterEndpoint();
 				var jsonRequest = {
 					"firstname":firstname,
 					"lastname":lastname,
 					"password":password,
 					"email":email,
 					"phone":phone
 				}

 				ML.post(endpoint, jsonRequest, function(response, status){
 					if(status === "ok")
 					{
 						ML.setSession(response);
						EventProvider.fire('auth.login');
						
 					}
 					else
 					{
						ML.log("Registration failed: " + response);
						EventProvider.fire('auth.registerFailed', response);
 					}	
					
 				})

 			}
 		}
 		
 		
		 
	 }
 	
 })