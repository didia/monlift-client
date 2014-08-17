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
	 
	 getFrom:function(){
		 return this.from ;
	 },
	 getTo:function(){
		 return this.to;
	 },
	 gettime:function(){
	 	return this.time;
	 },
	 getMeetingPLace:function(){
		 return this.meetingPlace;
	 },
	 getTotalPlace:function(){
		 return this.totalPlace;
	 },
	 getAvailablePLace:function(){
		 return this.availablePLace;
	 },
	 getDriver:function(){
		 return this.driver;
	 },
	 getCar:function(){
		 return this.car;
	 }
 
 };
 return Lift;
 });
