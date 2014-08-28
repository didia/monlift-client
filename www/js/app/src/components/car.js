/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift'], function($, React, monlift){
	
	ML  = monlift.getInstance();
	var Car = React.createClass({displayName:'Lift', 
		render: function(){
			return (
					<div id  = "lift">
						<div className="card" id = {"#idlift"+this.props.id}>
							<a className="navigate-right" href = {"#id"+this.props.num}>
                        
							<img className="media-object pull-left" src="../img/car2.png"  height="80" weight="80"/>
									  
										{this.props.nom}
										<p>{this.props.matricule}
										{this.props.description}</p>
										
							</a>
							
							
						</div>
						
						<div className="control-content" id = {"id"+this.props.num}>
							
                        
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
