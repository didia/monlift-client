/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift', 'components/myCars'], function($, React, monlift, myCars){
	
	var cars = myCars.myCars;
	return{
	MyCarslistcomponent : React.createClass({displayName:'.MyCarslistcomponent', 
		render: function(){
			
			var cars=ML.getUserCars();
			
						
			return (
						<div className = "vertical-centered-container" id = "listLiftcomponent" >
							<myCars cars = {cars}/> 
        				</div>
			);
		}
	})
	
	}
	
})// JavaScript Document
