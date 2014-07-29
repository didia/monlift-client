/** @jsx React.DOM */
/**
 * @author Trispa
 *
 */
define(['jquery', 'react', 'app/monlift'], function($, React, monlift){

	ML = monlift.getInstance();
	return{
	RequestAlert :React.createClass({displayName:'myInfos',
	render:function(){
		
		return(
			
					<div className = "requestAlertcomponent" id = "requestAlertcomponent" > 
					
						<header className="bar bar-nav">
						  <a href="#popover">
							<h4 class="title">
							  Request 1
							  <span className="icon icon-caret"></span>
							</h4>
						  </a>
						</header>
					
					<div id="popover" className="popover">
					  
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
					</div>
					</div>

                   );
					
				}
			})
		}
})

// JavaScript Document