/** @jsx React.DOM */


define(['jquery', 'react', 'app/monlift', 'components/buttons'], function($, React, monlift, buttons){
                ML = monlift.getInstance();
				var myInfosButton = buttons.MyInfosButton;
				var myCarsButton = buttons.MyCarsButton;
				var profilButton = buttons.ProfilButton;
                
                return {
                
                	DriverProfile: React.createClass({displayName:'DriverProfile',
                	render: function(){
                	        return (
                	        <div className="card">
                	        <div className="content_Driver_Profil">
                	        
                	          <div id="box">
							  
							  		
                	               <div id="topleft">
								   		<profilButton image = "img/profil.png" id1="profil"  id2="MyInfos" label = "My Infos" event= "ui.showMyInfospage"/>
                	               </div>
                	               
                	               <div id="topright">
								   <profilButton image = "img/lift.png" id1="addlift"  id2="MyCars" label = "My Cars" event= "ui.showMyCarspage"/> 
								   </div>
                	               
                	               <div id="bottomleft">
								   		<profilButton image = "img/Alert.png" id1="Alert"  id2="MyAlerts" label = "My Alerts" event= "ui.showAddCarFormPage"/>           
                	                   </div>
									   
                                <div id="bottomright">
									 <profilButton image = "img/addlift.png" id1="rev"  id2="MyReviews" label = "offer a ride" event= "ui.showAddLiftPage"/>     
                                </div>

                           </div>
                        </div>
						</div>
                    );
                                               
               }
                
          }),
                
        
        
           PassengerProfile: React.createClass({displayName:'PassengerProfile',
                	render: function(){
						
               
                	        return (
							<div className="card">	
                	        <div className="content_Driver_Profil">
                	        
                	          <div id="box">
							  
                	               <div id="topleft">
								   		<profilButton image = "img/profil.png" id1="profil"  id2="MyInfos" label = "My Infos" event=  "ui.showMyInfospage"/>
                	               </div>
                	               
                	               <div id="topright">
								   <profilButton image = "img/road.svg" id1="addlift"  id2="MyCars" label = "See Lifts" event= "ui.showLiftsListPage"/> 
								   </div>
                	               
                	               <div id="bottomleft">
								   		<profilButton image = "img/Search.png" id1="Alert"  id2="MyAlerts" label = "Search" event= "ui.showSearchPage"/>           
                	                   </div>
									   
                                <div id="bottomright">
									 <profilButton image = "img/lift.png" id1="rev"  id2="MyReviews" label = "My Lifts" event= ""/>     
                                </div>

                           </div>
                        </div>
						</div>
                   );
                                               
               }
                
          })
                   
      }

})
