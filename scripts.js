var a ="Containers are a fundamental building block of Bootstrap that contain, pad, and align your content within a given device or viewport.";
var b = "Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Containers are used to contain, pad, and (sometimes) center the content within them. While containers can be nested, most layouts do not require a nested container.";
function point() {
    document.getElementById("points").innerHTML=    "<h2>"+"Containers"+"</h2>"+"<br>";
document.getElementById("points").innerHTML="<li>"+a+"</li>"+"<li>"+b+"</li>";
}

var c = "Powerful mobile-first flexbox grid to build layouts of all shapes and sizes in a twelve column system, six default responsive tiers, and dozens of predefined classes.";
var d = "Bootstrap’s grid system can adapt across all six default breakpoints, and any breakpoints you customize. The six default grid tiers are as follows:"
function grids(){
   document.getElementById("grids").innerHTML = "<li>"+c+"</li>"+"<li>"+d+"</li>"+"<li>"+"Extra small (xs)"+"</li>"+"<li>"+"Small (sm)"+"</li>"+"<li>"+"Medium (md)"+"</li>"+"<li>"+"Extra large (xl)"+"</li>"+"<li>"+"Extra extra large (xxl)"+"</li>";
}