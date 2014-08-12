/** @jsx React.DOM */
define(['jquery','react', 'app/auth', 'app/component','components/forms', 'app/event', 'app/monlift', 'app/exceptions'], function($,React, auth, component, forms, EventProvider, monlift, exceptions){
	 
	 // because JSX component do not understand the "." in forms.X, define a variable for them instead
	ML = monlift.getInstance();
	 console.log(component);
	 var SearchForm = forms.SearchForm;
	 var LoginForm = forms.LoginForm;
	 var addCarForm = forms.AddCarForm;
	 var RegisterForm = forms.RegisterForm;
	 var AddCarForm = forms.AddCarForm;
	 var HomePage = component.getHomePage();
	 var Header = component.getHeader();
	 var Footer = component.getFooter();
	 var LogOutButton = component.getLogoutButton();
	 var ProfilePage = component.getProfilePage();
	 var ParametterPage = component.getParamettersPage();
	 var InfosPage = component.getInfosPage();
	 var CarsPage = component.getCarsPage();
	 var RequestAlertPage = component.getRequestAlertPage();
	 var AddLiftPage = forms.addLiftForm;
	 var LiftListPage = component. getLiftListPage();
	 var AddUsernamePage = component.getAddUsernamePage();
	 

	 console.log(Header, HomePage, Footer);
	 
	 
	 UI =  {
 		
		go:function(){
			// implements all ui specific functions here
			
			React.renderComponent(
				<Header page='index' />,
				document.getElementById('header')
			);
			
			React.renderComponent(
				<HomePage />,
				document.getElementById('app-body')
			);
			
			React.renderComponent(
				<Footer />,
				document.getElementById('footer')
			);
			
		},
		
		showLoginPage: function()
		{
			React.renderComponent(
				<Header page='Login' />,
				document.getElementById('header')
			);
			
			React.renderComponent(
				<LoginForm />,
				document.getElementById('app-body')
			);
					
		},
		
		showHomePage: function()
		{
			
			React.renderComponent(
				<Header page='Home' />,
				document.getElementById('header')
			);
			
			React.renderComponent(
				<HomePage />,
				document.getElementById('app-body')
			);
		},
		
		showRegisterPage: function()
		{
			React.renderComponent(
				<Header page='Register' />,
				document.getElementById('header')
			);
			
			React.renderComponent(
				<RegisterForm />,
				document.getElementById('app-body')
			);
		},
		
		showAddCarFormPage : function()
		{
			React.renderComponent(
				<Header page='Add Cars' />,
				document.getElementById('header')
			);
			
			React.renderComponent(
				<addCarForm/>,
				document.getElementById('app-body')
			);
		},
		showSearchPage: function()
		{
			React.renderComponent(
				<Header page='Search' />,
				document.getElementById('header')
			);
			
			React.renderComponent(
				<SearchForm />,
				document.getElementById('app-body')
			);
		},
		
		showProfilePage: function()
		{	
			ML.loginRequired();
			React.renderComponent(
				<Header page='Profil' />,
				document.getElementById('header')
			);
			React.renderComponent(
				<ProfilePage />,
				document.getElementById('app-body')
			);

		},
		showParametterPage: function()
		{	
			
			React.renderComponent(
				<Header page='Parametters' />,
				document.getElementById('header')
			);
			React.renderComponent(
				<ParametterPage />,
				document.getElementById('app-body')
			);
				
		},
		
		showMyInfospage:function()
		{
			ML.loginRequired();
			React.renderComponent(
			<Header page='Infos' />,
				document.getElementById('header')
			);
			React.renderComponent(
				<InfosPage />,
				document.getElementById('app-body')
			);
		},
		showMyCarspage:function()
		{
			ML.loginRequired();
			React.renderComponent(
			<Header page='Cars' />,
				document.getElementById('header')
			);
			React.renderComponent(
				<CarsPage />,
				document.getElementById('app-body')
			);
		},
		
		showLiftsListPage:function(){
			ML.loginRequired();
			React.renderComponent(
				<Header page='Rides offered' />,
				document.getElementById('header')
			);
			React.renderComponent(
				<LiftListPage/>,
				document.getElementById('app-body')
			);
		},
		
		showRequestALert:function(){
			ML.loginRequired();
			React.renderComponent(
				<Header page='Request' />,
				document.getElementById('header')
			);
			React.renderComponent(
				<RequestAlertPage/>,
				document.getElementById('app-body')
			);
		},
		
		showAddLiftPage : function (){
			ML.loginRequired();
			
			React.renderComponent(
				<Header page ='New Lift'/>,
				document.getElementById('header')
			);
			
			console.log("iscurrentUserDriver() : " + ML.isCurrentUserDriver()); 
			if(!ML.isCurrentUserDriver()) {
				try {
					UI.showAddUsernamePage();
					EventProvider.subscribe('ML.userPromoted', ML.bind(UI, 'showAddFirstCarPage'));
					return;
				}catch(e) {
					if(e instanceof exceptions.PageAccessDeniedException) {
						// this case cannot really happen here but ignore it anyway
					}
					else {
						throw e;
					}
				}
			}
			
			if(!ML.userHasCar()) {
				UI.showAddFirstCarPage();
				EventProvider.subscribe('ML.carCreated', ML.bind(UI, 'showAddLiftPage'));
				return;
			}
				
			React.renderComponent(
				<AddLiftPage/>,
				document.getElementById('app-body')
			);
		},
		
		showAddUsernamePage : function () {
			ML.loginRequired();
			if(ML.isCurrentUserDriver()) {
				throw new exceptions.PageAccessDeniedException("User is already a driver");
			}
			
			React.renderComponent(
				<AddUsernamePage />,
				document.getElementById('app-body')
			);
			
		},
		
		showAddFirstCarPage : function () {
			ML.loginRequired();
			React.renderComponent(
				<AddCarForm />,
				document.getElementById('app-body')
			);
		}
		
		
		 
	 }
	 
	 EventProvider.subscribe('auth.login', UI.showHomePage);
	 EventProvider.subscribe('ui.showHomePage', UI.showHomePage);
	 EventProvider.subscribe('auth.logout', UI.showHomePage);
	 EventProvider.subscribe('ui.showLoginPage', UI.showLoginPage);
	 EventProvider.subscribe('ui.showRegisterPage', UI.showRegisterPage);
	 EventProvider.subscribe('ui.showProfilePage', UI.showProfilePage);
	 EventProvider.subscribe('ui.showParametterPage', UI.showParametterPage);
	 EventProvider.subscribe('ui.showMyInfospage', UI.showMyInfospage);
	 EventProvider.subscribe('ui.showMyCarspage', UI.showMyCarspage);
	 EventProvider.subscribe('ui.showRequestALert', UI.showRequestALert);
	 EventProvider.subscribe('ui.showAddLiftPage', UI.showAddLiftPage);
	 EventProvider.subscribe('ui.showSearchPage', UI.showSearchPage);
	 EventProvider.subscribe('ui.showLiftsListPage', UI.showLiftsListPage);
	 EventProvider.subscribe('ui.showAddCarFormPage', UI.showAddCarFormPage);
	
	 
	
	 return UI;
 	
 });
