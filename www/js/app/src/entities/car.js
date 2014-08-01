 /**
 * @author Trispa
 *
 */
 define(function(){
 function Car(p_matricule, p_description, p_owner)
 {
	if(!(this instanceof Car)){
		throw new typeError("Car constructor conot be called as a function.");
	}
		 this.matricule = p_matricule ;
		 this.description = p_description;
		 this.owner = p_owner;
 }
 
 Car.prototype = {
	 constructor: Car,
	 
	 getMatricule:function(){
		 return this. this.matricule ;
	 },
	 getDescription:function(){
		 return this.description;
	 },
	 getOwner:function(){
	 	return this.owner;
	 },
	
	
	 
 };
 return Car;
 });
// JavaScript Document