/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift'], function($, React, monlift){
	
	ML  = monlift.getInstance();
	var Car = React.createClass({displayName:'Lift', 
		render: function(){
			return (
						<div className="card">
							<a className="navigate-right" href = "#item1mobile">
                        
							<img className="media-object pull-left" src="../img/car2.png"  height="80" weight="80"/>
									  
										{this.props.nom}
										<p>{this.props.matricule}
										{this.props.description}</p>
										
							</a>
							
							
						</div>
						
							
									
								
                       


			)
		}
	});
	
	return Car;
	
});// JavaScript Document
