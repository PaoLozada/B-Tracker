//inicio de animaciones
AOS.init();

//inicializar nav bar
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, options);
});

// Or with jQuery

/*$(document).ready(function() {
    $('.sidenav').sidenav();
});*/

//inicializar carrusel



function desplegableF() {
    document.getElementById("dropdown1").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.miMenu')) {

        var dropdowns = document.getElementsByClassName("dropdown1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    if (!event.target.matches('.miMenud')) {

        var dropdowns = document.getElementsByClassName("dropdown1d");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};


function desplegableFd() {
    document.getElementById("dropdown1d").classList.toggle("show");
};

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
});

var options = {
    indicator: true,
    numVisible: 5,
    padding: 15
};