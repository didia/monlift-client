/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'app/auth'], function($, React, monlift, auth){
	
	var Footer = React.createClass({displayName:'Footer', 
		render: function(){
			return (
				<div class ="bar bar-tab">
					
					<a class="tab-item">
					  
						<img src="img/Search.png"  href="#" height="30" weight="30" />
		
					</a>
		
				  
					<a class="tab-item">
		
						<img src="img/addlift.png"  href="#" height="30" weight="30" />

		
					</a>
		
					<a class="tab-item">
		
					  <img src="img/road.svg"  href="#" height="30" weight="30"  />
		
					</a>
		
		
					<a class="tab-item">
		
		
					  <img src="img/notification.png"  href="#" height="30" weight="30" />
		
		
					</a>
		
		
					<a class="tab-item" href="#">
		
					  <img src="img/profil.png"   height="30" weight="30"  />
	
					</a>
		
					  
			  </div>

			)
		}
	});
	
	return Footer;
	
});// JavaScript Document