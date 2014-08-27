/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift'], function($, React, monlift){
	
	ML  = monlift.getInstance();
	var Car = React.createClass({displayName:'Lift', 
		render: function(){
			return (
					<div>
						<div className="card">
							<a className="navigate-right" href = {"#"+this.props.id}>
                        
							<img className="media-object pull-left" src="../img/car2.png"  height="80" weight="80"/>
									  
										{this.props.nom}
										<p>{this.props.matricule}
										{this.props.description}</p>
										
							</a>
							
							
						</div>
						
						<div className="control-content" id = "{this.props.id}">
							
                        
							<img className="media-object pull-left" src="../img/car2.png"  height="80" weight="80"/>
									  
							{this.props.nom}
							<p>{this.props.matricule}
							{this.props.description}</p>
							
						</div>
					</div>
									
								
                       


			)
		}
	});
	
	return Car;
	
});// JavaScript Document
