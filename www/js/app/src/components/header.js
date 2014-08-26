/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'app/auth','components/buttons'], 
function($, React, monlift, auth, buttons){
		
		ML = monlift.getInstance();
		
		
		return {
			Header: React.createClass({displayName:'Header',
				
		    	render: function(){
					var ButtonRight = null;
					var ButtonLeft = null;
					var ParametterButton = buttons.ParametterButton;
					switch(this.props.page)
					{
						case 'index':
						case 'home':
							ButtonRight = ML.isUserLoggedIn()?buttons.LogoutButton:buttons.LoginButton;
							ButtonLeft =  buttons.ParametterButton;
							
							break;
						case 'Login':
							ButtonRight = buttons.RegisterButton;
							break;
						case 'register':
							ButtonRight = buttons.LoginButton;
							break;
						case 'Infos':
							ButtonRight = buttons.moreVertical;
							ButtonLeft =  buttons.leftnav;
							
							break;
						default:
							ButtonRight = ML.isUserLoggedIn()?buttons.LogoutButton:buttons.LoginButton;
							ButtonLeft =  buttons.ParametterButton;
							
							break;
							
					}
					
		        	return (
						
							<div>
						      <h1 className="title">{this.props.page}</h1>
							  {(ButtonLeft != null)?<ButtonLeft event = {(this.props.page == "Infos")?"ui.showProfilePage":""}/>:''}
							  {(ButtonRight != null)?<ButtonRight />:''} 
							
                        	</div>
                    );
                                               
              	 }
                        
			}),
				
			
            
            
		}
		
})
