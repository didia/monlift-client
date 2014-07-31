/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift','components/forms'], function($,React, monlift, forms ){
	
	var addLiftFromForm = forms.AddLiftFromForm;
	var addLiftToForm = forms.AddLiftToForm;
	ML = monlift.getInstance();
	return{
		AddLift : React.createClass({displayName : "AddLift",
		render:function(){
		
			return(
				<div className = "addLiftComponent" id = "addLiftComponent"> 
								
					
						<div className="segmented-control">
							<a className="control-item active" href ="#fromInfo">From</a>
							<a className="control-item" href ="#ToInfo">To</a>
							<a className="control-item">Infos Supp</a>
						</div>
						
						<div className="content2">
							<div id="welcome">
								<div  id ="FromInfo"  className="control-content active">
									<addLiftFromForm/> 
								</div>
	
								<div id ="ToInfo" className="control-content">
									<addLiftToForm/> 
								</div>
							</div>
						</div>
					
					
				</div>
			);
		}
	})
}
	
})
			
			
// JavaScript Document