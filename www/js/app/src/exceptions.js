define([], function(){
	
	function LoginException(message) {
		this.message = message;
		this.name = "LoginException";
	}
	
	function PageAccessDeniedException(message) {
		this.message = message;
		this.name = "PageAccessDeniedException";
	}
	return {
		LoginException:LoginException,
		PageAccessDeniedException : PageAccessDeniedException
      
	}
});