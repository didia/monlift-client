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
						<div id = "username-page" className = "vertical-centered-container"> 
						<div className = "centered non-vertical-centered">
							<h5> Lifts </h5>
						</div>
						
						<div className = "vertical-centered">
							
							
							{	
								this.props.lifts.map(function(lift, i){
								return <Lift  image = "img/car2.png" date = {lift.date} depart = {lift.from} arrivee = {lift.to} placesdisponible = {lift.availablePlace} prix = {lift.price +" $"}  driver = {lift.driver.fullname}  infosVoiture = {lift.car.name + " " +lift.car.description}/>
								
								})
								
							}
							
							</div>				
						</div>
						
        			
			);
		}
	})
	
	
	}
	
	
	
})
// JavaScript Document
