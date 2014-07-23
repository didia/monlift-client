/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'app/auth', 'components/buttons'], function($, React, monlift, auth, buttons){

	ML = monlift.getInstance();
	return{
	MyInfos :React.createClass({displayName:'myInfos',
	render:function(){
		return(
			<div className = "myInfoscomponent" id = "myInfsocomponent" >
								<ul className="table-view">
								<li className="table-view-cell media">
								
					 			<img className = "media-object pull-left" src ="../img/D04.png"  height="80" weight="80" />
								<div class="media-body">
       							Patrice Diouf
       							<p><span className="icon icon-star-filled "></span> 
								<span className="icon icon-star-filled "></span>
								<span className="icon icon-star-filled "></span>
								<span className="badge">(3)</span>
								</p>
      							</div>
								</li>
								
  								<li className="table-view-cell">
								Ville 
								<span className="badge">Québec</span></li>
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

