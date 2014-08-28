/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift', 'components/lift'], function($, React, monlift, Lift){
	
	return{
	LiftList : React.createClass({displayName:'LiftList', 
		render: function(){
			
			return (
						
							<div className = "vertical-centered">
								
							
							{	
								this.props.lifts.map(function(lift, i){
									console.log("le i represente "+ i);
								return  <Lift  image = "img/car2.png" date = {lift.date} depart = {lift.from} arrivee = {lift.to} placesdisponible = {lift.availablePlace} prix = {lift.price +" $"}  driver = {lift.driver.fullname}  infosVoiture = {lift.car.name + " " +lift.car.description} event = "ui.showLiftDisplay"/>
								
								})
								
							}
							
						</div>
						
        			
			);
		}
	})
	
	
	}
	
	
	
})
// JavaScript Document
