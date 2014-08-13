 /**
 * @author Trispa
 *
 */
 define(function(){
 function Car(p_nom, p_matricule, p_description, p_owner)
 {
	if(!(this instanceof Car)){
		throw new typeError("Car constructor conot be called as a function.");
	}
		 thia.nom = p_nom
		 this.matricule = p_matricule ;
		 this.description = p_description;
		 this.owner = p_owner;
 }
 
 Car.prototype = {
	 constructor: Car,
	 
	 getNom:function(){
		 return this.nom;
	 },
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