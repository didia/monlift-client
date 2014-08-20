/** @jsx React.DOM */

/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift','components/forms' ], function($,React, monlift, forms ){
	
	var addCarForm = forms.AddCarForm;
	
	ML = monlift.getInstance();
	return{
		AddCar : React.createClass({displayName : "AddCar",
			render:function(){
				return(
					<div id = "username-page" className = "vertical-centered-container"> 
						<div className = "centered non-vertical-centered">
							<h5> Add A new Car </h5>
						</div>	
						<div className="card">	
							<addCarForm /> 
						</div>
							
									
					</div>
			);
		}
	})
}
	
})