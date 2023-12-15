var viewModel = function(name){
    // Observable is wrapper to allow Dynamic / Two way Binding !
    // The other requirement is INPUT element
    this.name = ko.observable(name);  
}
// wait for page load
window.onload = function(){
    // We pass MODEL objects to ViewModel
    // The ViewModel is then made Available for Binding to View
    ko.applyBindings(new viewModel("Mahendra"));
}