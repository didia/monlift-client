/** @jsx React.DOM */

/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift','components/forms' ], function($,React, monlift, forms ){
	
	var addLiftForm = forms.addLiftForm;
	
	ML = monlift.getInstance();
	return{
		AddLift : React.createClass({displayName : "AddLift",
		render:function(){
			var cars = ML.getUserCars();
			return(
				<div id = "addlift-page" className = "vertical-centered-container"> 
						<div className = "centered non-vertical-centered">
							<h5> Publier un Lift </h5>
						</div>
						
						
						<div className = "vertical-centered">	
							<addLiftForm cars={cars} /> 
						</div>
						

								
					</div>
			);
		}
	})
}
	
})