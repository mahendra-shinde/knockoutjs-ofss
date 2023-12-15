var viewModel = function(){
    this.people = new Array();
    
    this.people.push(new person("Jitendra","Kapoor","M","03-09-1940"));
    this.people.push(new person("Dharmendra","Deol","M","03-12-1935"));
    this.people.push(new person("Amitabh","Shrivastav","M","13-07-1940"));
    this.people.push(new person("Madhuri","Dixit","F","01-01-1967"));
    this.people.push(new person("Bhanurekha","Ganesan","F","02-08-1972"));
    
}
// Model Object : constructor function
var person = function(fname, lname, gender, dob){
    this.firstName = fname;
    this.lastName = lname;
    this.gender = gender;
    this.dob = dob;    
}
// wait for page load
window.onload = function(){
    ko.applyBindings(new viewModel());
}