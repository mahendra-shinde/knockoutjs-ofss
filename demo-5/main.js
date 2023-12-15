var viewModel = function(){
    this.people = ko.observableArray();
    
    this.people.push(new person("Jitendra","Kapoor","M","03-09-1940"));
    this.people.push(new person("Dharmendra","Deol","M","03-12-1935"));
    this.people.push(new person("Amitabh","Shrivastav","M","13-07-1940"));
    this.people.push(new person("Madhuri","Dixit","F","01-01-1967"));
    this.people.push(new person("Bhanurekha","Ganesan","F","02-08-1972"));
    
    this.person = new person();

    //Operation "addPerson"
    this.addPerson = function(){
        this.people.push(this.person);
    };

}
// Model Object : constructor function
var person = function(fname, lname, gender, dob){
    this.firstName = ko.observable( fname || "" );
    this.lastName = ko.observable( lname || "" );
    this.gender = ko.observable(gender || "M" );
    this.dob = ko.observable( dob || "") ;    
}
// wait for page load
window.onload = function(){
    ko.applyBindings(new viewModel());
}