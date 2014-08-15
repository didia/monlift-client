/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
 
 /**
									$.each(maapCars, function(key, value) {
										var  InfosCar = value;
										$.each(InfosCar, function(key, value) {
										nom = (value == "id")? "nom" :"";
										matricule = (value == "matricule")? "matricule" : "";
										description = (value == "description")? "description" : ""; 	
										
									});
									<Car name  = value.get('nom') matricule = value.get('matricule') description = value.get('description') />
									});
									*/
define(['jquery', 'react', 'app/monlift', 'components/car'], function($, React, monlift ,Car){

	ML = monlift.getInstance();
	var maapCars = ML.getUserCars();
	var  InfosCar = null;
	return{
	MyCars :React.createClass({displayName:'myCars',
	render:function(){
		
		return(
					<div className = "myCarscomponent" id = "myCarscomponent" >
			
								
								
								<ul className="table-view">
								
									
									<Car  />
									
								
								 </ul>
							
						</div>
				
                   );
					
				}
			})
		}
})


