/** @jsx React.DOM */

/**
 * @author didia
 *
 */
define(['jquery', 'react', 'app/monlift','components/forms'], function($,React, monlift, forms ){
	
	var addCarForm = forms.AddCarForm;

	ML = monlift.getInstance();
	return {
		AddFirstCar : React.createClass({displayName : "AddFirstCarPage",
			render:function(){
				return(
					<div id = "username-page" className = "vertical-centered-container"> 
						<div className = "centered non-vertical-centered">
							<h5> And one more thing: Give us some details about your car </h5>
						</div>
						
						
						<div className = "vertical-centered">	
							<addCarForm /> 
						</div>
						
								
					</div>
			);
		}
	})
}
	
})