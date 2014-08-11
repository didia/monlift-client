/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'components/lift'], function($, React, monlift, Lift){
	
	return{
	LiftList : React.createClass({displayName:'LiftList', 
		render: function(){
			return (
				<div>
          	    	<ul className="table-view">
					
						<Lift  image = "img/car2.png" heure = "12:00" depart = "ville1" arrivee ="ville2" places = "2" autreInfos = "plus d'info....." />
						
					</ul>
        		</div>
			);
		}
	})
	
	}
	
})// JavaScript Document