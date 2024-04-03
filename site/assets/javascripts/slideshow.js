document.addEventListener('DOMContentLoaded', function(){

var slideImages = document.querySelectorAll('.slide'),
    dirRight = document.getElementById('dir-control-right'),
    dirLeft = document.getElementById('dir-control-left'),
    current = 0;
//if javascript is on apply styling
function jsActive(){
    for(var i = 0; i < slideImages.length; i++){
        slideImages[i].classList.add('slider-active');
    }  
}
// Clear images
function reset(){
    for(var i = 0; i < slideImages.length; i++){
        slideImages[i].classList.remove('slide-is-active');
    }
}
//init slider
function startSlide(){
    reset();
    slideImages[0].classList.add('slide-is-active');
    setTimeout(function() {
        for(var i = 0; i < slideImages.length; i++){
            slideImages[i].classList.add('slide-transition');
        }
    }, 20);
        

}

//slide lft
function slideLeft(){
    reset();
    slideImages[current - 1].classList.add('slide-is-active');
    current--;
}
//slide right
function slideRight(){
    reset();
    slideImages[current + 1].classList.add('slide-is-active');
    current++;
}

dirLeft.addEventListener('click', function(){
    if(current === 0){
        current = slideImages.length;
    }
    slideLeft();
})

dirRight.addEventListener('click', function(){
    if(current === slideImages.length-1){
        current = -1;
    }
    slideRight();
})
//apply styling
jsActive();
startSlide();


});