/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift', 'components/liftList'], function($, React, monlift, liftList){
	
	var liftLists = liftList.LiftList;
	return{
	LiftListcomponent : React.createClass({displayName:'LiftList', 
		render: function(){
			
			var lifts= ML.getUserLifts();
			
						
			return (	
						<div id = "username-page" className = "vertical-centered-container"> 
							<div className = "centered non-vertical-centered">
								<h5>Lifts </h5>
							</div>
							
							
							
							<liftLists lifts = {lifts}/> 
        				
					</div>
			);
		}
	})
	
	}
	
})// JavaScript Document
