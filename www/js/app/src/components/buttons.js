/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'app/auth', 'app/event', 'app/ui'], 
function($, React, monlift, auth, EventProvider, UI){
	 
	 ML = monlift.getInstance();
	 
	 return {
 		
		LogoutButton : React.createClass({displayName:'LogoutButton',
			
			handleClick: function(e){ 
				e.preventDefault();
				console.log("logout clicked");
				auth.logout();
			},
			
			render: function(){
				return (
					<a className = "btn pull-right" href ="#" onClick={this.handleClick}> Logout </a>
				);
			}
		
		}),
		
		AcceptButton:React.createClass({displayName:'AcceptButton',
			handleClick:function(e){
				e.preventDefault();
				
			},
			render:function(){
				return(
					<a className = "btn btn-positive pull-right" href ="#" onClick={this.handleClick}> Accepter </a>
				);
							
				}
		}),
		
		DeclinerButton:React.createClass({displayName:'AcceptButton',
			handleClick:function(e){
				e.preventDefault();
				
			},
			render:function(){
				return(
					<a className = "btn btn-negative pull-left" href ="#" onClick={this.handleClick}> Decliner </a>
				);
							
				}
		}),
		LoginButton: React.createClass({displayName:'LoginButton',
			
			handleClick: function(e){
				EventProvider.fire('ui.showLoginPage');
			},
			
			render:function(){
				return (
					<a className="btn pull-right" id="login-button" onClick={this.handleClick}>Log in</a>
				);
			}
		}),
		
		RegisterButton: React.createClass({displayName:'RegisterButton',
			handleClick:function(e){
				EventProvider.fire('ui.showRegisterPage');
			},
			render: function(){
				return (
					<a className="btn pull-right" id="register-button" onClick={this.handleClick}> Register </a>
				);
			}
		}),
		ParametterButton:React.createClass({displayName:'parametterButton',
			
			handleClick:function(e){
				EventProvider.fire('ui.showParametterPage');
				
			},
			render:function(){
				return(
						<a className="icon icon-gear pull-left" onClick={this.handleClick} href="#"> </a>
				);
			}
			
		}),
		MyInfosButton: React.createClass({displayName:'myInfosButton',
			handleClick:function(e){
				console.log("fire event " + this.props.event );
				EventProvider.fire(this.props.event);
			},
			render: function(){
				return (
					<a className="tab-item" onClick={this.handleClick} href="#">
								<img src="img/profil.png"   height="30" weight="30" id="addlift" href="" />
                	                              <h5 id="MyInfos">My Infos</h5>
					</a>
				);
			}
		}),
		MyCarsButton: React.createClass({displayName:'myInfosButton',
			handleClick:function(e){
				console.log("fire event " + this.props.event );
				EventProvider.fire(this.props.event);
			},
			render: function(){
				return (
					<a className="tab-item" onClick={this.handleClick} href="#">
								<img src="img/addlift.png"   height="30" weight="30" id="addlift" href="" />
                	                              <h5 id="MyCars">My Cars</h5>
					</a>
				);
			}
		}),
		FooterButton: React.createClass({displayName:'FooterButton',
			handleClick:function(e){
				console.log("fire event " + this.props.event );
				EventProvider.fire(this.props.event);
			},
			render: function(){
				return (
					<a className="tab-item" onClick={this.handleClick} href="#">
								<img src={this.props.image}   height="30" weight="30"  />
					</a>
				);
			}
		})
	 }
 	
 })