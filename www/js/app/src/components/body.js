/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'components/forms', 'components/liftList','components/Profile'], function($, React, monlift, forms, LiftList, profile){
	
	var SearchForm = forms.SearchForm;
	var passengerPannel =  profile.PassengerProfile;
	var driverPannel  = profile.DriverProfile;
	return{
	Body : React.createClass({displayName:'Body', 
		render: function(){
			return (
				<div id="content">
				
                	<div className="card">      
						<div className="segmented-control">
                			<a className="control-item " href="#passenger-welcome">
                     		Passenger
               		   		</a>
                			<a className="control-item" href="#driver-welcome">
                     		Driver
                			</a>
            			</div>
					</div>
        			
					<div className="content2">
            			<div id="welcome" >
							<div id = "welcome2"  className ="control-content active">
								<SearchForm />
							</div>
                			<div id="passenger-welcome" className="control-content">
                           		
								<passengerPannel/>
               				</div>

                			<div id="driver-welcome" className="control-content">
                    			<driverPannel/>	
							</div>
						</div>
            		</div>
	
	
				</div>
			
                   );
					
				}
			})
		}
})


	
	/*return Body;*/
	
// JavaScript Document