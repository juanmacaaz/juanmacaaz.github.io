
// JS

function clickC__(elm) {
    let proyects = document.getElementsByClassName('p-item');

    for (let i = 0; i < proyects.length; i++) {
        proyects[i].style.display = "none"
    }


    let proyectsSelected = document.getElementsByClassName(elm.textContent);
    for (let i = 0; i < proyects.length; i++) {
        proyectsSelected[i].style.display = "block"
    }
}