/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift', 'app/auth', 'components/buttons'], function($, React, monlift, auth, buttons){

	ML = monlift.getInstance();
	return{
	MyInfos :React.createClass({displayName:'myInfos',
	render:function(){
		return(
			<div className= "content">
								<ul className="table-view">
								<li className="table-view-cell media">
								
					 			<img className = "media-object pull-left" src ="../img/D04.png"  height="80" weight="80" />
								<span class="icon icon-edit "></span>
								<div className="media-body">
       							{ML.getUser().getFirstname() }{" "}{ML.getUser().getLastname()}
       							<p><span className="icon icon-star-filled "></span> 
								<span className="icon icon-star-filled "></span>
								<span className="icon icon-star-filled "></span>
								<span className="badge">(3)</span>
								
								</p>
      							</div>
								</li>
								
  								<li className="table-view-cell">
								Ville 
								<span className="badge">Québec</span>
								</li>
								<li className="table-view-cell">
								Email 
								<span className="badge">{ML.getUser().getEmail()}</span></li>
								
								{ML.isCurrentUserDriver()?<li className="table-view-cell">
								Username 
								<span className="badge">{ML.getUser().getUsername()}</span></li>:""}
								
								<li className="table-view-cell">
								Téléphone
								<span className="badge">{ML.getUser().getPhone()}</span></li>
  								
								<li className="table-view-cell">
								Inscrit depuis  
								<span className="badge">10/2014</span></li>
								<li className="table-view-cell">
								Fumeur 
								<span className="badge">Non</span></li>
								<li className="table-view-cell">
								Langue 
								<span className="badge">Francais</span></li>
								<li className="table-view-cell">
								Retards 
								<span className="badge">0</span></li>
								
								</ul> 
								</div>

                   );
					
				}
			})
		}
})

