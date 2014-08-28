/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift','app/event'], function($, React, monlift,EventProvider){
	
	ML  = monlift.getInstance();
	var Lift = React.createClass({displayName:'Lift', 
		handleClick:function(e){
				
				EventProvider.fire(this.props.event);
			},
		render: function(){
			
			return (
				<div className="card">
					
  					<li className="table-view-cell media">
 
						<a className="navigate-right"  onClick={this.handleClick} href="#">
						
						  <img className="media-object pull-left" src ={this.props.image} height="70" 	weight="70" />
							<div className="media-body">
							
							{this.props.date}
								<p>De {" "+ this.props.depart} vers{" "+ this.props.arrivee +" "} au prix de {" "+this.props.prix +"."} Conducteur : {this.props.driver} Nombre de place : {this.props.placesdisponible} </p>
						  
						
						 </div>
						 </a>
					</li>
					
				</div>
		)
		}
	});
	
	return Lift;
	
});// JavaScript Document
