/** @jsx React.DOM */
define(['jquery', 'react', 'app/monlift', 'app/auth', 'app/event'], function($, React, monlift, auth, EventProvider){
	 
	 ML = monlift.getInstance();
	 
	 return {
 		
		LoginForm:React.createClass({displayName:'LoginForm',
			
			getInitialState: function() {
    			return {errorMessage: ''};
  			},
			
			loginFailed: function(message){
				console.log("loginFailed called with message: ");
				console.log(arguments);
				this.setState({errorMessage:message});
			},
			
			validateForm: function(email, password){
				var missing_fields = [];
				
				if(!email)
				{
					missing_fields.push("email");
				}
				if(!password)
				{
					missing_fields.push("password");
				}
				
				if(missing_fields.length == 0)
					return true;
				if(missing_fields.length == 1)
					var message = "The value for field \"" + missing_fields[0] +" is missing";  
				else
					var message = "The values for fields \"" + missing_fields.toString() + " are missing";
				this.setState({errorMessage:message});
				return false;
			},
			
			handleSubmit:function(e){
				e.preventDefault();
				var email = this.refs.email.getDOMNode().value;
				var password  = this.refs.password.getDOMNode().value;
				if(this.validateForm(email, password))
				{
					auth.login(email, password);
				}
				console.log(ML._session);	
			},
			
			componentWillUnmount: function(){
				EventProvider.clear('auth.loginFailed');
			},
			
			componentDidMount: function(){
				var that = this;
				EventProvider.subscribe('auth.loginFailed', ML.bind(that, 'loginFailed'));
			},
			
			render: function(){
				return (
					<form id = "login-form"  className = "form-horizontal" onSubmit= {this.handleSubmit} >
						{this.state.errorMessage? <p>{this.state.errorMessage} </p>:''}
						<input type="email" className="input-xlarge" id="email" name="email" placeholder="Email" ref= "email" required />
						<input type="password" className ="form-control" placeholder="Password" ref = "password" required />
                		<label className="checkbox pull-left">
                		<input type="checkbox" value="remember-me" />
                 				Remember me
                		</label>
                		<a href="#" className="pull-right need-help">Need help? </a>
						<span className="clearfix"></span>
                		<button className="btn btn-primary btn-block" type = "submit">Sign in</button>
            		</form> 
                		
				);
			}
		
		}),
		
		RegisterForm: React.createClass({displayName:'RegisterForm', 
			
			handleSubmit: function(e){
				e.preventDefault();
				var firstname = this.refs.firstname.getDOMNode().value;
				var lastname = this.refs.lastname.getDOMNode().value;
				var email = this.refs.email.getDOMNode().value;
				var password = this.refs.password.getDOMNode().value;
				var phone = this.refs.phone.getDOMNode().value;
				if(this.validateForm(firstname, lastname, email, password, phone))
				{
					auth.register(firstname, lastname, email, password, phone);
				}
			},
			validateForm: function(firstname, lastname, email, password, phone)
			{
				var missing_fields = [];
				if(!firstname)
					missing_fields.push("firstname");
				if(!lastname)
					missing_fields.push("lastname");
				if(!email)
					missing_fields.push("email");
				if(!password)
					missing_fields.push("password");
				if(!phone)
					missing_fields.push("phone");
					
				if(missing_fields.length == 0)
					return true;
				if(missing_fields.length == 1)
					var message = "The value for field \"" + missing_fields[0] +" is missing";  
				else
					var message = "The values for fields \"" + missing_fields.toString() + " are missing";
				this.setState({errorMessage:message});
				return false;
			},
			registrationFailed: function(message)
			{
				console.log("RegistrationFailed called with message: ");
				console.log(arguments);
				this.setState({errorMessage:message});
			},
			
			getInitialState: function() {
    			return {errorMessage: ''};
  			},
			
			componentWillUnmount: function(){
				var that = this;
				EventProvider.clear('auth.registerFailed');
			},
			
			componentDidMount: function(){
				var that = this;
				EventProvider.subscribe('auth.registerFailed', ML.bind(that, 'registrationFailed'));
			},
			render: function(){
				
				return (
					<form id="register" className="form-horizontal" onSubmit={this.handleSubmit}>
						{this.state.errorMessage? <p>{this.state.errorMessage} </p>:''}
						<div className="control-group">
							<div className="controls">
								<div className="input-prepend">
									<span className="add-on"><i className="icon-user"></i> </span>
									<input type="text" className="input-xlarge" id="fname" name="fname" placeholder="First Name" ref="firstname" required/>
								</div>
							</div>
						</div>
						<div className="control-group ">
							<div className="controls">
								<div className="input-prepend">
									<span className="add-on"><i className="icon-user"></i></span>
									<input type="text" className="input-xlarge form-control" name="lname" placeholder="Last Name" ref="lastname" required />
								</div>
							</div>
						</div>
						<div className="control-group">
							<div className="controls">
								<div className="input-prepend">
									<span className="add-on"><i className="icon-envelope"></i></span>
									<input type="email" className="input-xlarge" id="email" name="email" placeholder="Email" ref="email" required />
								</div>
							</div>
						</div>
			
						<div className="control-group">
							<div className="controls">
								<div className="input-prepend">
									<span className="add-on"><i className="icon-lock"></i></span>
									<input type="Password" className="input-xlarge" name="password" ref="password" required placeholder="Password" />
								</div>
							</div>
						</div>
								
						<div className="control-group">
							<div className="controls">
								<div className="input-prepend">
									<span className="add-on"><i className="icon-lock"></i></span>
									<input type="text" className="input-xlarge" name="phone" ref="phone" placeholder="Your phone number" required />
								</div>
							</div>
						</div>
						
						<div className="control-group">
							<label className="control-label"></label>
							<div className="controls">
								<button type="submit" className="btn btn-primary btn-block">Create My Account</button>
							</div>
						</div>
	  				</form>

				);
			}
		}),
		
		ToDriverForm: function(){
			
		},
		
		addLiftForm : React.createClass({displayName:'addliftFromForm',
			handleSubmit: function(e){
				e.preventDefault();
				var from = this.refs.from.getDOMNode().value;
				var to = this.refs.to.getDOMNode().value;
				var time = this.refs.time.getDOMNode().value;
				var meetingPlace = this.refs.meetingPlace.getDOMNode().value;
				var totalPlace = this.refs.totalPlace.getDOMNode().value;
				var car = this.refs.car.getDOMNode().value;
				
				if(this.validateForm(from, to, time, meetingPlace, totalPlace, car))
				{
					var endpoint = "lifts/create";
 					var jsonRequest = {
						"from" : from,
						"to": to,
						"time" : time,
						"meetingPlace" : meetingPlace,
						"totalPLace" : totalPlace,
						"car" : car
 					
 						}
				ML.post(endpoint, jsonRequest, function(response, status){
						if(status === "ok")
						{
							ML.log("lift  ajouté");
							
							
						}
						else
						{
							ML.log("add lift  failed: " + response);
							
						}
 						})
					}		
			},
			validateForm: function(from, to, time, meetingPlace, totalPlace, car)
			{
				var missing_fields = [];
				if(!from)
					missing_fields.push("from");
				if(!to)
					missing_fields.push("to");
				if(!time)
					missing_fields.push("time");
				if(!meetingPlace)
					missing_fields.push("meetingPlace");
				if(!totalPlace)
					missing_fields.push("totalPlace");
				if(!car)
					missing_fields.push("car");
					
				if(missing_fields.length == 0)
					return true;
				if(missing_fields.length == 1)
					var message = "The value for field \"" + missing_fields[0] +" is missing";  
				else
					var message = "The values for fields \"" + missing_fields.toString() + " are missing";
				this.setState({errorMessage:message});
				return false;
			},
		render:function(){
			return(
			 			
						<form  className="input-group" id ="fromFormInfo" onSubmit={this.handleSubmit}>
							
							<input type="text" placeholder=	"Départ" ref="from"/>
							
							<input type="text" placeholder="Arrivée" ref="to"/>
					
							<input type="datetime" placeholder="Heure" ref="time"/>
							
							<input type="text" placeholder="Lieu de Départ" ref="meetingPlace"/>
							<input type="text" placeholder="Nombre de place" ref="totalPlace"/>

	
							<select name="carlist" form="fromFormInfo" ref = "car">
								<option value="volvo">Car1</option>
								<option value="saab">Car2</option>
								<option value="opel">Car3</option>
								<option value="audi">Car4</option>
								
							</select>
								
						
							<button type="submit" className="btn btn-primary btn-block ">Publier</button>
							
						</form>
						
					
			);
			
		}
		}),
		

		addCarForm : React.createClass({displayName:'addCarForm',
		handleSubmit: function(e){
				e.preventDefault();
				var name = this.refs.name.getDOMNode().value;
				var matricule = this.refs.matricule.getDOMNode().value;
				var description = this.refs.description.getDOMNode().value;
				
				if(this.validateForm(name, matricule, description))
				{
					var endpoint = "cars/create";
 					var jsonRequest = {
						"name" : name,
						"matricule": matricule,
						"description" : description,
						
 					
 						}
				ML.post(endpoint, jsonRequest, function(response, status){
						if(status === "ok")
						{
							ML.log("lift  ajouté");
							
							
						}
						else
						{
							ML.log("add car  failed: " + response);
							
						}
 						})
					}		
			},
			validateForm: function(name, matricule, description)
			{
				var missing_fields = [];
				if(!name)
					missing_fields.push("name");
				if(!matricule)
					missing_fields.push("matricule");
				if(!description)
					missing_fields.push("description");
				
					
				if(missing_fields.length == 0)
					return true;
				if(missing_fields.length == 1)
					var message = "The value for field \"" + missing_fields[0] +" is missing";  
				else
					var message = "The values for fields \"" + missing_fields.toString() + " are missing";
				this.setState({errorMessage:message});
				return false;
			},
			render:function(){
				return(
					<form  CalssName = "input-groupid" ="fromCarInfo" onSubmit={this.handleSubmit}>
						<input type = "text" name = "name" placeholder = "Name" ref = "name"/>
						<input type = "text" name = "matricule" placeholder = "Matricule" ref = "matricule"/>
						<textarea name = "description" placeholder = "Description" ref = "description"></textarea>
						<button type = "submit" className = "btn btn-primary btn-block ">Add</button>	
					</form>				
				);
			
			}
		}),
		
		AddUsernameForm: React.createClass({displayName: "UserName Form",
			
			getInitialState: function() {
    			return {errorMessage: ''};
  			},
			
			promoteFailed: function(message){
				console.log("promoteFailed called with message: ");
				console.log(arguments);
				this.setState({errorMessage:message});
			},
			
			handleSubmit:function(e){
				e.preventDefault();
				var username = this.refs.username.getDOMNode().value;
				console.log(username);
				if(this.validateForm(username))
				{
					ML.promoteUserToDriver(username);
				}
				console.log(ML._session.user);	
			},
			
			componentWillUnmount: function(){
				EventProvider.clear('ML.promoteUserFailed');
			},
			
			componentDidMount: function(){
				var that = this;
				EventProvider.subscribe('ML.promoteUserFailed', ML.bind(that, 'promoteFailed'));
			},
			validateForm : function(username) {
				if(!username) {
					var message = "The username is required";
					this.setState({errorMessage:message});
					return false;
				}
				
				return true;
			},
			
			render:function() {
				
				return(
					
					<form id = "UserNameForm" className = "input-group" onSubmit= {this.handleSubmit}>
						{this.state.errorMessage? <p>{this.state.errorMessage} </p>:''}
						<div className = "control-group">
							<div className = "controls">
								<input type = "text" name = "username" ref = "username" placeholder = "Add your driver username here" />
							</div>
						</div>
						
						<div className = "control-group submit-button">
							<div className = "controls">
								<button type = "submit" className="btn btn-primary btn-block">Next <span className="icon icon-right"></span> </button>
							</div>
						</div>
						
					</form>
				);
			}
		}),
		
		
		SearchForm : React.createClass({displayName:'SearchForm',
			render: function(){
				return (
					<form id="search-form">
                        <input type="text" name="from-place" placeholder="From" />
                        <input type="text" name="to-place" placeholder="To" />
                        <div className="more-option">
                            <span className="icon icon-caret">
                                more options
                            </span>
                        </div>
						<button className="btn btn-primary btn-block">Search</button>
						 
                    </form>
				);
			}
		
		})
		 
	 }
 	
 })