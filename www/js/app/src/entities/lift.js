 /**
 * @author Trispa
 *
 */
 define(function(){
 function Lift(p_from, p_to, p_time, p_meetingPlace, p_totalPlace, p_availablePlace, p_driver, p_car)
 {
	if(!(this instanceof Lift)){
		throw new typeError("Lift constructor conot be called as a function.");
	}
		this.m_from = p_from;
		this.m_to = p_to;
		this.m_time = p_time;
		this.m_meetingPLace = p_meetingPlace;
		this.m_totalPlace = p_totalPlace;
		this.m_availablePLace = p_availablePlace;
		this.m_driver = p_driver;
		this.m_car = p_car;
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