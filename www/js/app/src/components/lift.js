/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift'], function($, React, monlift){
	
	ML  = monlift.getInstance();
	var Lift = React.createClass({displayName:'Lift', 
		render: function(){
			
			return (               
               
                        
                           <li className="table-view-cell media">
								<a className="navigate-right">
                           		<img className="media-object pull-left" src ={this.props.image} height="70" 	weight="70" />

                           		<div className = "media-body">
								  <h1>{this.props.heure} </h1>
								  <p>
								  <h5>date   : {this.props.date}</h5>
								  <h5>Départ : {this.props.depart}</h5>
								  <h5>Arrivée: {this.props.arrivee}</h5>
								  <h5>Places : {this.props.placesdisponible}</h5>
								  <h5>Prix   : {this.props.price}</h5>
								  <h5>Conducteur: {this.props.driver}</h5>
								  <h5>Voiture : {this.props.infosVoiture}</h5>
								  {this.props.autreInfos}
								  </p>
								</div>
								</a>
							</li>
						
                       


			)
		}
	});
	
	return Lift;
	
});// JavaScript Document
