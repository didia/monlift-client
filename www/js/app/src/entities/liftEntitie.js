 /**
 * @author Trispa
 *
 */
 define(function(){
 function Lift(lift)
 {
	if(!(this instanceof Lift)){
		throw new typeError("Lift constructor conot be called as a function.");
	}	this.id = lift.id;
		this.m_from = lift.from;
		this.m_to = lif.to;
		this.m_time = lif.time;
		this.m_meetingPLace = lift.meetingPlace;
		this.m_totalPlace = lift.totalPlace;
		this.m_availablePLace = lift.availablePlace;
		this.m_driver = lift.p_driver;
		this.m_car = lift.p_car;
 }
 
 Lift.prototype = {
	 constructor: Lift,
	 
	 getFrom:function(){
		 return this. this.m_from ;
	 },
	 getTo:function(){
		 return this.m_to;
	 },
	 gettime:function(){
	 	return this.m_time;
	 },
	 getMeetingPLace:function(){
		 return this.m_meetingPlace;
	 },
	 getTotalPlace:function(){
		 return this.m_totalPlace;
	 },
	 getAvailablePLace:function(){
		 return this.m_availablePLace;
	 },
	 getDriver:function(){
		 return this.m_driver;
	 },
	 getCar:function(){
		 return this.m_car;
	 }
 
 };
 return Lift;
 });
// JavaScript Document
// JavaScript Document