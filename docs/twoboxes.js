function setActive(input) {

    var elements = document.getElementsByClassName("box");

    for(var i=0; i<elements.length; i++) {
        document.getElementById(elements[i].id).classList.remove('clicked');
    }

    var thisElement = document.getElementById(input.id);
    thisElement.classList.add('clicked'); 
}
