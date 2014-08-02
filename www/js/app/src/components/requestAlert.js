/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift','components/buttons'], function($, React, monlift, buttons){

	ML = monlift.getInstance();
	buttonAccepter = buttons.AcceptButton;
	ButtonreDecliner =  buttons.DeclinerButton;
	ButtonCanceler = buttons.CancelButton;
	return{
	RequestAlert :React.createClass({displayName:'myInfos',
	render:function(){
		
		return(
			
					<div className = "requestAlertcomponent" id = "requestAlertcomponent" > 
					
						<header className="bar bar-nav">
						<ul className="table-view">
						  <li className="table-view-cell media">
						  
						  <a href="#popover"  class="tab-item">
							  <span className="media-object pull-left icon icon-person"></span>
							  <div className="media-body">
								Demande de: {ML.getUser().getFirstname() }{" "}{ML.getUser().getLastname()}
							  <span className="icon icon-caret"></span>
							  </div>
						  </a>
						  </li>
						</ul>
						</header>
						
					
					<div id="popover" className="popover">
						
						<header className="bar bar-nav">
						  <ButtonreDecliner/>
						  <buttonAccepter/>
						  
						  <h1 className="title">OR</h1>
						</header>
					  
					  <ul className="table-view">
								<li className="table-view-cell">
								<img className = "media-object pull-left" src ="../img/D04.png"  height="80" weight="80" />
								<div class="media-body">
       							{ML.getUser().getFirstname() }{" "}{ML.getUser().getLastname()}
       							<p><span className="icon icon-star-filled "></span> 
								<span className="icon icon-star-filled "></span>
								<span className="icon icon-star-filled "></span>
								<span className="badge">(3)</span>
								</p>
      							</div>
								</li>
  								
					</ul> 
					<ButtonCanceler event = "ui.showRequestALert" />
					</div>
					</div>

                   );
					
				}
			})
		}
})

// JavaScript Document