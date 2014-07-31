/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'components/buttons'], function($, React, monlift, buttons){
		ML = monlift.getInstance();
		var FooterButton = buttons.FooterButton;
		return {
			
				IndexFooter: React.createClass({displayName:'IndexFooter',
				
					render: function(){
						return (
	                  
						  <div>
						  	<FooterButton active="true" image="img/Search.png" event="" label = "Search"/>
							<FooterButton image = "img/addLift.jpg" event="ui.showAddLiftPage"  label = "Add lift"/> 
							<FooterButton image = "img/road.svg" event="" label = "Lifts"/>
							<FooterButton image = "img/notification.png" event="ui.showRequestALert"  label = "Request"/>
							<FooterButton image = "img/profil.png" event= "ui.showProfilePage" label = "Profil"/>
						  </div>
                    	);
                                               
               		 }
   

                                        
      })
		           

			
	}

})// JavaScript Document
