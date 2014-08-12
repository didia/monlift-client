/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift', 'components/car'], function($, React, monlift ,Car){

	ML = monlift.getInstance();
	var maapCars = ML.getUserCars();
	return{
	MyCars :React.createClass({displayName:'myCars',
	render:function(){
		
		return(
			<div className = "myCarscomponent" id = "myCarscomponent" >
			
								
								
								<ul className="table-view">
									$.each(maapCars, function(key, value) {
										
											var  InfosCar = Value;
										
										$.each(InfosCar, function(key, value) {
										nom = (value == "id")? "nom" :"";
										matricule = (value == "matricule")? "matricule" : "";
										description = (value == "description")? "description" : ""; 	
										
									});
									<Car name  = value.get('nom') matricule = value.get('matricule') description = value.get('description') />
									});
								
								 </ul>
								 
							
			</div>
									
								  
							
			  

                   );
					
				}
			})
		}
})


