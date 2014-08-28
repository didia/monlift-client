/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
 
define(['jquery', 'react', 'app/monlift', 'components/car'], function($, React, monlift ,Car){

	ML = monlift.getInstance();
	
	
	var MyCars =React.createClass({displayName:'myCars',
	render:function(){
		
		return(
					<div className="content" id = "content">
							
									{
											this.props.cars.map(function(car, i){
												return <Car  nom = {car.name} description = {car.description} id  = {car.id} num = {i}/>;
											})
										}
						
						
						</div>
				
                   );
		}
	});
	
	return MyCars;
	
});

