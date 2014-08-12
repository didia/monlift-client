/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift'], function($, React, monlift){
	
	ML  = monlift.getInstance();
	var Lift = React.createClass({displayName:'Lift', 
		render: function(){
			return (
				
                               
                 <div>

                        <ul className="table-view">
						
    
                           <li className="table-view-cell media">
								<a className="navigate-right">
                           		<img className="media-object pull-left" src ={this.props.image} height="70" 	weight="70" />

                           		<div className = "media-body">
								  <h1>{this.props.heure} </h1>
								  <p>
								  <h3>{this.props.depart}{"==>"} {this.props.arrivee}</h3>
								  <h3>Places: {this.props.places}</h3>
								  {this.props.autreInfos}
								  </p>
								</div>
								</a>
							</li>
						</ul>
              	</div>
                       


			)
		}
	});
	
	return Lift;
	
});// JavaScript Document
