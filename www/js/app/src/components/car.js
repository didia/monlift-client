/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift'], function($, React, monlift){
	
	ML  = monlift.getInstance();
	var Car = React.createClass({displayName:'Lift', 
		render: function(){
			return (
								<li className="table-view-cell media">
             
									<a className="navigate-right">
									  <img className="media-object pull-left" src="../img/car2.png"  height="80" weight="80"/>
									  <div className="media-body">
										{this.props.nom}
										<p>{this.props.matricule}
										{this.props.description}</p>
									  </div>
									</a>
								 </li>
                       


			)
		}
	});
	
	return Car;
	
});// JavaScript Document
