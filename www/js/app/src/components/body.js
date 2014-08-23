/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'components/forms', 'components/liftList','components/Profile'], function($, React, monlift, forms, LiftList, profile){
	
	
	var hom  = profile.Home;
	return{
	Body : React.createClass({displayName:'Body', 
		render: function(){
			return (
				
				<div id="content">
					<hom/>
				</div>
			
                   );
					
				}
			})
		}
})


	
	/*return Body;*/
	
// JavaScript Document