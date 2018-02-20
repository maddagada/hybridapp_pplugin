import Component from '@ember/component';

export default Component.extend({
	
actions:{
vibrate()
{
	try{
// create a new contact object
var contact = navigator.contacts.create();
contact.displayName = document.getElementById("fn").value + document.getElementById("ln").value;
contact.nickname = "MA";            // specify both to support all devices
contact.name = {givenName:document.getElementById("fn").value,familyName:document.getElementById("ln").value};

// save to device
contact.save(function(contact){alert("Save Success"+contact);},function(error){alert("Error = " + error.code);});
	}
catch(error){alert("failed"+error)}
}
}});
