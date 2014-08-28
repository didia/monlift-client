
define(['jquery', 'react', 'app/monlift', 'app/auth', 'components/header', 'components/parametters', 'components/body', 'components/footer', 'components/forms', 'components/buttons', 'components/profile', 'components/myInfos', 'components/carListComponent', 'components/requestAlert', 'components/addLift', 'components/addUsername', 'components/listLiftComponent', 'components/addFirstCar','components/addCar', 'components/liftDisplay'], 
		function($, React, monlift, auth, headers, parametters, Body, footers, forms, buttons, profile, myInfos, myCars, requestAlert,addLift, addUsername, liftListcomponent, addFirstCar, addCar, liftDisplay) {
 

	 ML = monlift.getInstance();
	 
	 return {
	 	getAddCarPage : function() {
			return addCar.AddCar;
		},
		
		getAddFirstCarPage : function() {
			return addFirstCar.AddFirstCar;
		},

		getAddLiftPage:function(){
			return addLift.AddLift;
		},	

		getAddUsernamePage : function () {
			return addUsername.AddUsername;
		},

		getCarsListPage: function()
		{
			return myCars.MyCarslistcomponent;
		},

		getDriverHomePage: function(){
		
		},

		getDriverProfilePage: function()
		{
			return profile.DriverProfile;
		},

		getFooter: function()
		{
			return footers.IndexFooter;
		},

		getHeader: function(){
			return headers.Header;
		},
		
		getHomePage: function(){
			return Body.Body;
		
		},
		
		getInfosPage: function()
		{
			return myInfos.MyInfos;
		},

		getLiftListPage : function(){
			return liftListcomponent.LiftListcomponent;
		},

		getLoginButton: function(){
			return buttons.LoginButton;
		},
		
		getLoginForm: function(){
		
		},

		getLogoutButton: function(){
			return buttons.LogoutButton;
		},

		getParamettersPage : function()
		{
			return parametters.Parametters;
		},
		getDriverProfilePage: function()
		{
			return profile.DriverProfile;
		},
		
		getPassengerProfilePage: function()
		{
			return profile.PassengerProfile;
		},

		getProfilePage: function()
		{
			return profile.PassengerProfile;
		},

		getRegisterButton: function(){
			return buttons.RegisterButton;
		},
		
		getRegisterForm: function(){
		
		},
		

		getRequestAlertPage:function(){
			return requestAlert.RequestAlert;
		},
		getliftDisplaye: function()
		{
			return liftDisplay.Liftdisplay;
		},
		
		getAddCarPage : function() {
			return addCar.AddCar;

		},
		
		getSearchForm: function(){
			return forms.SearchForm;
		}
	
	
		 
	 }
 	
 })