
// Accordian, from https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_accordion 
// addapted so I do not have to use !Important.

function toggleAccordian(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("show-accordian") == -1)
        x.className = x.className.replace("hide-accordian", "show-accordian");
    
    else 
        x.className = x.className.replace("show-accordian", "hide-accordian");
}

// if accordians, toggle close (they are open by default incase javascript is disabled).
// see this excellent answer for why I wish I could use JQuery $(document).ready would have sufficed as I just need to maniplate the accordians when the DOM is ready.
window.onload = function() {
    var accordians = document.getElementsByClassName("show-accordian");

    // we need to get the ids in an array then toggle each, we do this because if we change the class we are selecting on then the array accordians will be shortened each loop, try it out if you don't believe me (god I hate vanilla javascript, it's like a throw back to the hell of yesteryear).

    var accordianIds = []
    var accordiansLength = accordians.length;

    for (var i = 0; i < accordiansLength; i++)
        accordianIds.push(accordians[i].id);

    for(var i = 0; i < accordiansLength; i ++)
        toggleAccordian(accordianIds[i]);
}

// smooth scroll
function smoothScrollTo(str){
    document.querySelector(str).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

document.getElementById('go-to-top').onclick = function() {
    smoothScrollTo('#main-body')
    return false;
};

