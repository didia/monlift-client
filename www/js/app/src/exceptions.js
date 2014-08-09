define([], function(){
	function LoginException(message) {
		this.message = message;
		this.name = "LoginException";
	}
	return {
		LoginException:LoginException,
      
	}
});