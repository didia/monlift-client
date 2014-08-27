

/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift','components/buttons'], function($, React, monlift, buttons){

	ML = monlift.getInstance();

	return{
	MenuVerticale :React.createClass({displayName:'MenuVerticale',
	render:function(){
		
		return(
			
		  
							<ul className="table-view">
							<li className="table-view-cell media">
								<a className="navigate-right">
								  <span className="media-object pull-left icon icon-edit"></span>
								  <div className="media-body">
									Edite
								  </div>
								</a>
							  </li>
							  <li className="table-view-cell media">
								<a className="navigate-right">
								  <span className="media-object pull-left icon icon-trash"></span>
								  <div className="media-body">
									Delete Profil
								  </div>
								</a>
							  </li>
							  
							  
							</ul>
													  
					
					
                   );
					
				}
			})
		}
})

// JavaScript Document

