// wait for page load
window.onload = function(){
    document.forms["frm1"].elements["save"].onclick = function() {
        var urname = document.forms["frm1"].elements["name"].value.trim();
        document.getElementById("urname").innerHTML = urname;
    }
}