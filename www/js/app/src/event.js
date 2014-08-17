/** @jsx React.DOM */
define(["app/exceptions"], function(exceptions){
	
	return {
		
        subscribers: function() {
			  
			if (!this._subscribersMap) {
			  this._subscribersMap = {};
			}
			return this._subscribersMap;
		  },
		 
		subscribe: function(name, cb) {
 			var subs = this.subscribers();
			 if (!subs[name]) {
                 subs[name] = [cb];
             } else {
                 subs[name].push(cb);
             }
		  },
		  
		unsubscribe: function(name, cb) {
			var subs = this.subscribers()[name];
			console.log(subs);
			subs.forEach(function(value, key) {
      			if (value == cb) {
					console.log("Unsubscribing from " + name);
        			subs[key] = null;
      			}
    		});
  		},
		
		monitor: function(name, callback) {
			if (!callback()) {
			  var
				ctx = this,
				fn = function() {
				  if (callback.apply(callback, arguments)) {
					ctx.unsubscribe(name, fn);
				  }
				};
		
			  this.subscribe(name, fn);
			}
		},	
  		
		clear: function(name) {
    		delete this.subscribers()[name];
  		},
		
		fire: function() {
			try{
    			var
      				args = Array.prototype.slice.call(arguments),
      				name = args.shift();
				console.log("Firing event: " + name);
				this.subscribers()[name].forEach(function(sub) {
					if (sub) {
						sub.apply(this, args);
					}
				});
			} catch(e){
				if(e instanceof exceptions.LoginException) {
					
					console.log(e.message);
				}
				else {
					throw e;
				}
  			} 
			
		}
		
	}
	
});// JavaScript Document