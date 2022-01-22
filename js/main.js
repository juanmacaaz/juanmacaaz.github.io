
// JS

function clickC__(elm) {
    let proyects = document.getElementsByClassName('p-item');
    console.log(elm);
    for (let i = 0; i < proyects.length; i++) {
        proyects[i].style.display = 'none';
    }

    let proyectsSelected = document.getElementsByClassName(elm.textContent);
    for (let i = 0; i < proyects.length; i++) {
        try {
            proyectsSelected[i].style.display = 'block';
        } catch (error) {}
    }

    $('#filtros li').each(function (i, obj) {
        $(obj).removeClass('filtro-activado');
    });

    $('tag').each(function (i, obj) {
        $(obj).removeClass('filtro-activado');
    });

    $('#reset-filtros').removeClass('filtro-activado');

    $(elm).addClass('filtro-activado');
}

function set_view(name) {
    $('#main-content').load('view/' + name + '.html');
}

function reset() {
    let proyects = document.getElementsByClassName('p-item');

    for (let i = 0; i < proyects.length; i++) {
        proyects[i].style.display = 'block';
    }

    $('#filtros li').each(function (i, obj) {
        $(obj).removeClass('filtro-activado');
    });

    $('tag').each(function (i, obj) {
        $(obj).removeClass('filtro-activado');
    });

    $('#reset-filtros').addClass('filtro-activado');
}

$('#header').load('view/header.html');
$('#main-content').load('view/proyects.html');
$('#footer').load('view/footer.html');