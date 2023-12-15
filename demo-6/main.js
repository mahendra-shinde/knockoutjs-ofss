// Model Object : constructor function
var viewModel = function(fname, lname, gender){
    this.firstName = ko.observable(fname);
    this.lastName = ko.observable(lname);
    this.gender = ko.observable(gender);

    //Computed Property
    this.fullName = ko.pureComputed(function(){
       return this.firstName() + " "+ this.lastName(); 
    }, this );

    this.message = ko.pureComputed(function(){
        return (this.gender()=="M"? "Mr" : "Ms.") +" "+ this.fullName();
    }, this);
}

// wait for page load
window.onload = function(){

    ko.applyBindings(new viewModel("Dharam singh", "Deol","M"));
}