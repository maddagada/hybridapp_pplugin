import Component from '@ember/component';

export default Component.extend({
	
actions:{
vibrate()
{
// create a new contact object
var contact = navigator.contacts.create();
contact.displayName = document.getElementById("fn").value + document.getElementById("fn").value;
contact.nickname = "MA";            // specify both to support all devices
contact.name = {givenName:document.getElementById("fn").value,familyName:document.getElementById("fn").value};

// save to device
contact.save(function(contact){alert("Save Success"+contact);},function(error){alert("Error = " + error.code);});
}
}});
