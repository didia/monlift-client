
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
		 this.nom = p_nom
                       if(p_matricule.length >= 5 && p_matricule.length <= 7)
		 {
                            this.matricule = p_matricule ;
                       }
                       else
                       {
                            this.matricule = " ";
                       }
		 this.description = p_description;
		 this.owner = p_owner;
 }
 
 Car.prototype = {
	 constructor: Car,
	 
            getDescription:function(){
                        return this.description;
            },

            getMatricule:function(){
                        return this.matricule ;
            },

	 getNom:function(){
		 return this.nom;
	 },

	 getOwner:function(){
	 	return this.owner;
	 }
	
	
	 
 };
 return Car;
 });
// JavaScript Document