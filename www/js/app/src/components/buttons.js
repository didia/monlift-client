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
		CancelButton:React.createClass({displayName:'CancelButton',
			handleClick:function(e){
				e.preventDefault();
				
			},
			render:function(){
				return(
					<a className = "btn pull-right" href ="#" onClick={this.handleClick}> Annuler </a>
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
		selectCAr: React.createClass({displayName:'selectCar',
			
			render: function(){
				return (
					
					<option value = {this.props.id}> {this.props.nom}</option>
					
					
				);
			}
		}),
		ProfilButton: React.createClass({displayName:'FooterButton',
			handleClick:function(e){
				console.log("fire event " + this.props.event );
				EventProvider.fire(this.props.event);
			},
			render: function(){
				return (
					<div className = "box">
					<a className="tab-item" onClick={this.handleClick} href="#">
						<img src = {this.props.image}  height="30" weight="30" id={this.props.id1} />
                	    <h5 id={this.props.id2}> {this.props.label}</h5>
												  
					</a>
					</div>
					
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
				
					<a className="tab-item" href ="#" onClick={this.handleClick} href="#">
								<img src={this.props.image}   height="30" width="30"  />
								<span className="tab-label">{this.props.label}</span>
					</a>
					
				);
			}
		})
	 }
 	
 })