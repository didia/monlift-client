 /**
 * @author Trispa
 *
 */
 define(function(){
 function Lift(lift)
 {
	if(!(this instanceof Lift)){
		throw new typeError("Lift constructor cannot be called as a function.");
	}	this.id = lift.id;
		this.from = lift.from;
		this.to = lif.to;
		this.time = lif.time;
		this.meetingPLace = lift.meetingPlace;
		this.totalPlace = lift.totalPlace;
		this.availablePLace = lift.availablePlace;
		this.driver = lift.p_driver;
		this.car = lift.p_car;
 }
 
 Lift.prototype = {
	 constructor: Lift,
	 
	 getAvailablePLace:function(){
		 return this.availablePLace;
	 },

	 getCar:function(){
		 return this.car;
	 },

	 getDriver:function(){
		 return this.driver;
	 },

	 getFrom:function(){
		 return this.from;
	 },

	 getMeetingPLace:function(){
		 return this.meetingPlace;
	 },

	 gettime:function(){
	 	return this.time;
	 },

	 getTo:function(){
		 return this.to;
	 },
	  
	 getTotalPlace:function(){
		 return this.totalPlace;
	 }
	 
	 
	 
 
 };
 return Lift;
 });
