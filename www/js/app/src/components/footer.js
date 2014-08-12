/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'components/buttons'], function($, React, monlift, buttons){
		ML = monlift.getInstance();
		var FooterButton = buttons.FooterButton;
		return {
			
				IndexFooter: React.createClass({displayName:'IndexFooter',
				
					render: function(){
						return (
	                  
						 
						  
						   <div>
						  	<FooterButton image = "img/home.png" event="ui.showHomePage" label = "Home"/>
							<FooterButton image = "img/profil.png" event= "ui.showProfilePage" label = "Profil"/>
							<FooterButton image = "img/addLift.png" event="ui.showAddLiftPage"  label = "AddLift"/> 
							<FooterButton image = "img/road.svg" event="ui.showLiftsListPage" label = "Lifts"/>
							<FooterButton image = "img/notification.png" event="ui.showRequestALert"  label = "Request"/>
							
						  </div>
						  
						  
                    	);
                                               
               		 }
   

                                        
      })
		           

			
	}

})// JavaScript Document
