
/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift'], function($, React, monlift){
	
	ML  = monlift.getInstance();
	return{
	Liftdisplay : React.createClass({displayName:'Liftdisplay', 
		render: function(){
						
					return (			
						
							
									<div className="card1">
									
											<div className="leftColumn">
											   <div className="cardProfil">
												 <profilButton image = "img/addlift.png" id1="rev"  id2="MyReviews" label = "offer a ride" event= "ui.showAddLiftPage"/>     
											   </div>
											 </div>
											<div className="rightColumn">
											   <div className="cardProfil">
												<profilButton image = "img/Search.png" id1="Alert"  id2="MyAlerts" label = "Search" event= "ui.showSearchPage"/>           
											   </div>
											 </div> 
											 
											 <div className="list card">
											 test
											 </div> 
											 
									</div>
						
					
                   );
					
				}
			})
		}
})

// JavaScript Document