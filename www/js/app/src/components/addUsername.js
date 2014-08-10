/** @jsx React.DOM */

/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift','components/forms'], function($,React, monlift, forms ){
	
	var addUsernameForm = forms.AddUsernameForm;

	ML = monlift.getInstance();
	return {
		AddUsername : React.createClass({displayName : "AddUsernamePage",
			render:function(){
				return(
					<div id = "username-page" className = "vertical-centered-container"> 
						<div className = "centered non-vertical-centered">
							<h5> We noticed you have not set your driver username yet. </h5>
						</div>
						
						
						<div className = "vertical-centered">	
							<addUsernameForm /> 
						</div>
						
								
					</div>
			);
		}
	})
}
	
})