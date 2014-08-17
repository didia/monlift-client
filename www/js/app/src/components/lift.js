/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift'], function($, React, monlift){
	
	ML  = monlift.getInstance();
	var Lift = React.createClass({displayName:'Lift', 
		render: function(){
			
			return (               
               
                        
                           <li className="table-view-cell media">
								<a className="navigate-right">
                           		<img className="media-object pull-left" src ={this.props.image} height="70" 	weight="70" />

                           		<div className = "vertical-centered">	
								 {this.props.date}
								  <p>De {" "+ this.props.depart} vers{" "+ this.props.arrivee +" "} au prix de {" "+this.props.prix +"."} Conducteur : {this.props.driver}</p>  	
								  
								 <p>{this.props.placesdisponible} </p>
								 
								</div>
								</a>
							</li>
						
                       


			)
		}
	});
	
	return Lift;
	
});// JavaScript Document
