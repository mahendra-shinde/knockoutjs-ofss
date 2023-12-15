// Model Object : constructor function
var viewModel = function(pr, rt, du){
  this.principal = pr;
  this.roi = rt;
  this.duration = du;
  this.interestRates = [ "4.5", "5.5", "6.3"];
  this.optionMonths = [ "12", "24", "36", "48"];
  this.interest = ko.observable();  

  this.calcInterest = function(){
    console.log(this.principal+", "+this.roi+", "+this.duration);
    this.interest(parseFloat(this.principal) * (parseFloat(this.roi)/12) * parseInt(this.duration)) ;
  };
}

// wait for page load
window.onload = function(){

    ko.applyBindings(new viewModel());
}