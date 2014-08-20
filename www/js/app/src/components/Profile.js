/** @jsx React.DOM */


define(['jquery', 'react', 'app/monlift', 'components/buttons'], function($, React, monlift, buttons){
                ML = monlift.getInstance();
				var myInfosButton = buttons.MyInfosButton;
				var myCarsButton = buttons.MyCarsButton;
				var profilButton = buttons.ProfilButton;
                
                return {
					
					Home: React.createClass({displayName:'Home',
                	render: function(){
                	        return (
                	        
                	       	<div className="card1">
                	        
                	          
								  	<div className="leftColumn">
									   <div className="cardProfil">
								   		<profilButton image = "img/Search.png" id1="Alert"  id2="MyAlerts" label = "Search" event= "ui.showSearchPage"/>           
                	              	   </div>
									 </div>  
									  
									 <div className="rightColumn">
									   <div className="cardProfil">
										 <profilButton image = "img/addlift.png" id1="rev"  id2="MyReviews" label = "offer a ride" event= "ui.showAddLiftPage"/>     
									   </div>
									 </div>
                          	</div>
								
                       	
                    );
                                               
               }
                
          }),
                
                	DriverProfile: React.createClass({displayName:'DriverProfile',
                	render: function(){
                	        return (
                	        
                	       	<div className="card1">
                	        
                	          
								  	<div className="leftColumn">
									   <div className="cardProfil">
											<profilButton image = "img/profil.png" id1="profil"  id2="MyInfos" label = "My Infos" event= "ui.showMyInfospage"/>
									   </div>
									   
									   <div className="cardProfil">
											<profilButton image = "img/lift.png" id1="addlift"  id2="MyCars" label = "My Cars" event= "ui.showMyCarspage"/> 
									   </div>
									 </div>
									<div className="rightColumn">
									   <div className="cardProfil">
											<profilButton image = "img/Alert.png" id1="Alert"  id2="MyAlerts" label = "My Alerts" event= "ui.showAddCarFormPage"/>
									   </div>
										   
									   
									   <div className="cardProfil">
										 <profilButton image = "img/addlift.png" id1="rev"  id2="MyReviews" label = "offer a ride" event= "ui.showAddLiftPage"/>     
									   </div>
									</div>
                          	</div>
								
                       	
                    );
                                               
               }
                
          }),
                
        
        
           PassengerProfile: React.createClass({displayName:'PassengerProfile',
                	render: function(){
						
               
                	        return (
								
                	       <div className="card1">
                	        
                	          
							  <div className="leftColumn">
                	               <div className="cardProfil">
								   		<profilButton image = "img/profil.png" id1="profil"  id2="MyInfos" label = "My Infos" event=  "ui.showMyInfospage"/>
                	               </div>
                	               
                	               <div className="cardProfil">
								   		<profilButton image = "img/road.svg" id1="addlift"  id2="MyCars" label = "See Lifts" event= "ui.showLiftsListPage"/> 
								   </div>
                	           </div>
							   <div className="rightColumn">
								   <div className="cardProfil">
								   		<profilButton image = "img/Search.png" id1="Alert"  id2="MyAlerts" label = "Search" event= "ui.showSearchPage"/>           
                	               </div>
									   
                                   <div className="cardProfil">
									 <profilButton image = "img/lift.png" id1="rev"  id2="MyReviews" label = "My Lifts" event= ""/>     
                                   </div>
								</div>
                           </div>
                       
						
                   );
                                               
               }
                
          })
                   
      }

})
