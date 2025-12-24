const projects = [
    {
        city: "Rostov-on-Don LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request"
    },
    {
        city: "Sochi Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request"
    },
    {
        city: "Rostov-on-Don Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request"
    }
];

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    let textTabs = document.getElementsByClassName("text-tab");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active");
    }

    for (let i = 0; i < textTabs.length; i++) {
        textTabs[i].classList.remove("active");
    }

    const currentProject = projects[slideIndex - 1];

    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].classList.add("active");
    textTabs[slideIndex - 1].classList.add("active");

    document.querySelector('.city-text a').textContent = currentProject.city;
    document.querySelector('.apartment-area-text a').textContent = currentProject.area;
    document.querySelector('.repair-time-text a').textContent = currentProject.time;
    document.querySelector('.repair-cost-text a').textContent = currentProject.cost;
}