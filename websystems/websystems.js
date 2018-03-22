
function smoothScrollTo(str){
    document.querySelector(str).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.getElementById('go-to-top').onclick = function() {
    smoothScrollTo('#main-body')
    return false;
};

