var viewModel = function(personObject){
    this.title = personObject.gender == "M" ? "Mr." : "Ms.";
    this.name = personObject.firstName + " " + personObject.lastName;
    this.age = calcAge(personObject.dob);
    this.skills = ko.observableArray(personObject.skills);
}
// Model Object : constructor function
var person = function(fname, lname, gender, dob, skills){
    this.firstName = fname;
    this.lastName = lname;
    this.gender = gender;
    this.dob = dob;    
    this.skills = skills;
}
function calcAge(dob){
    var thisYear = new Date().getFullYear();
    var birthYear = parseInt(dob.substring(6));
    return thisYear - birthYear;
}
// wait for page load
window.onload = function(){
    //var skills = ["Java", "C++", "JS", "TS" ];
    var skills  = new Array();
    skills.push("Java");
    skills.push("JS");
    person1 = new person("Dharam singh", "Deol","M", "10-12-1935", skills );
    
    ko.applyBindings(new viewModel(person1));
}