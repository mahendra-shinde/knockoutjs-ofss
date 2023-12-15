var viewModel = function(personObject){
    this.title = personObject.gender == "M" ? "Mr." : "Ms.";
    this.name = personObject.firstName + " " + personObject.lastName;
    this.age = calcAge(personObject.dob);
}
// Model Object : constructor function
var person = function(fname, lname, gender, dob){
    this.firstName = fname;
    this.lastName = lname;
    this.gender = gender;
    this.dob = dob;    
}
function calcAge(dob){
    var thisYear = new Date().getFullYear();
    var birthYear = parseInt(dob.substring(6));
    return thisYear - birthYear;
}
// wait for page load
window.onload = function(){
    
    person1 = new person("Dharam singh", "Deol","M", "10-12-1935" );
    
    ko.applyBindings(new viewModel(person1));
}