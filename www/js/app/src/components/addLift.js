/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift','components/forms'], function($,React, monlift, forms ){
	
	var addLiftFromForm = forms.addLiftForm;
	var addLiftToForm = forms.AddLiftToForm;
	ML = monlift.getInstance();
	return{
		AddLift : React.createClass({displayName : "AddLift",
		render:function(){
		
			return(
				<div className = "addLiftComponent" id = "addLiftComponent"> 
								
				
									<addLiftFromForm/> 
								
					
				</div>
			);
		}
	})
}
	
})
			
			
// JavaScript Document