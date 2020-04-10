//Smooth Scrolling Effects 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//Typing Effect for Home Page

var typed = new Typed(".type", {
    strings:[
        "Web Designer.", "Programmer.", "Problem Solver."],
    loop: true,
    typeSpeed: 135,
    smartBackspace: true  
});

