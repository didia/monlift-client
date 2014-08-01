/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift', 'app/auth', 'components/buttons'], function($, React, monlift, auth, buttons){

	ML = monlift.getInstance();
	return{
	MyCars :React.createClass({displayName:'myCars',
	render:function(){
		
		return(
			<div className = "myCarscomponent" id = "myCarscomponent" >
			
								
								
								<ul className="table-view">
								
								  <li className="table-view-cell media">
									<a className="navigate-right">
									  <img className="media-object pull-left" src="../img/car2.png"  height="80" weight="80"/>
									  <div className="media-body">
										voiture 1
										<p>Marque voiture
										infos sur voiture</p>
									  </div>
									</a>
								  </li>
								 
							
								  <li className="table-view-cell media">
									<a className="navigate-right">
									  <img className="media-object pull-left" src="../img/car2.png"  height="80" weight="80"/>
									  <div className="media-body">
										Voiture 2
										<p>renauld Megane with .... or Similar
										compact Manual</p>
									  </div>
									</a>
								  </li>
								  
								  <li className="table-view-cell media">
									<a className="navigate-right">
									  <img className="media-object pull-left" src="../img/car2.png"  height="80" weight="80" />
									  <div className="media-body">
										Voiture 3
										<p>renauld Megane with .... or Similar
										compact Manuals</p>
									  </div>
									</a>
								  </li>
								</ul>
			</div>
									
								  
							
			  

                   );
					
				}
			})
		}
})


