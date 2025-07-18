console.log("Js is writting.");

// -----------Review Carousel
const carousels = document.querySelectorAll(".carousel");
const dots = document.querySelectorAll(".dot");

document.querySelector("#dot-1").addEventListener("click", () =>{
    for(carousel of carousels){
        carousel.classList.add("hide");
        carousel.classList.remove("block");
    }
    for(dot of dots){
        dot.classList.remove("dot-active");
    }
    document.querySelector("#carousel-1").classList.remove("hide");
    document.querySelector("#carousel-1").classList.add("block");
    document.querySelector("#dot-1").classList.add("dot-active");
});
document.querySelector("#dot-2").addEventListener("click", () =>{
    for(carousel of carousels){
        carousel.classList.add("hide");
        carousel.classList.remove("block");
    }
    for(dot of dots){
        dot.classList.remove("dot-active");
    }
    document.querySelector("#carousel-2").classList.remove("hide");
    document.querySelector("#carousel-2").classList.add("block");
    document.querySelector("#dot-2").classList.add("dot-active");
});
document.querySelector("#dot-3").addEventListener("click", () =>{
    for(carousel of carousels){
        carousel.classList.add("hide");
        carousel.classList.remove("block");
    }
    for(dot of dots){
        dot.classList.remove("dot-active");
    }
    document.querySelector("#carousel-3").classList.remove("hide");
    document.querySelector("#carousel-3").classList.add("block");
    document.querySelector("#dot-3").classList.add("dot-active");
});



// ------------Blog Carousel
const blogCarousels = document.querySelectorAll(".blog-carousel");
const blogDots = document.querySelectorAll(".blog-dot");

document.querySelector("#blog-dot-1").addEventListener("click", () =>{
    for(carousel of blogCarousels){
        carousel.classList.add("hide");
        carousel.classList.remove("block");
    }
    for(dot of blogDots){
        dot.classList.remove("dot-active");
    }
    document.querySelector("#blog-carousel-1").classList.remove("hide");
    document.querySelector("#blog-carousel-1").classList.add("block");
    document.querySelector("#blog-dot-1").classList.add("dot-active");
});
document.querySelector("#blog-dot-2").addEventListener("click", () =>{
    for(carousel of blogCarousels){
        carousel.classList.add("hide");
        carousel.classList.remove("block");
    }
    for(dot of blogDots){
        dot.classList.remove("dot-active");
    }
    document.querySelector("#blog-carousel-2").classList.remove("hide");
    document.querySelector("#blog-carousel-2").classList.add("block");
    document.querySelector("#blog-dot-2").classList.add("dot-active");
});
document.querySelector("#blog-dot-3").addEventListener("click", () =>{
    for(carousel of blogCarousels){
        carousel.classList.add("hide");
        carousel.classList.remove("block");
    }
    for(dot of blogDots){
        dot.classList.remove("dot-active");
    }
    document.querySelector("#blog-carousel-3").classList.remove("hide");
    document.querySelector("#blog-carousel-3").classList.add("block");
    document.querySelector("#blog-dot-3").classList.add("dot-active");
});
