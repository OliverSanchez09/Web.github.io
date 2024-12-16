//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}

var menu = document.getElementById("menu");
        var nav = document.querySelector(".nav");
        var li = document.querySelectorAll(".nav ul li a");

        nav.style.right = "-100%";

        li.forEach((link)=>{
            link.onclick = (e)=> {
                nav.style.right = "-100%";
                menu.src = "img/icons8-menu-30.png";
            }
        })

        menu.onclick = function () {
            if (nav.style.right == "-100%") {
                nav.style.right = "0%";
                menu.src = "img/icons8-cancel-64.png";
            }
            else {
                nav.style.right = "-100%";
                menu.src = "img/icons8-menu-30.png";
            }
        }
        let nextBtn = document.querySelector('.next')
        let prevBtn = document.querySelector('.prev')
        
        let slider = document.querySelector('.slider')
        let sliderList = slider.querySelector('.slider .list')
        let thumbnail = document.querySelector('.slider .thumbnail')
        let thumbnailItems = thumbnail.querySelectorAll('.item')
        
        thumbnail.appendChild(thumbnailItems[0])
        
        // Function for next button 
        nextBtn.onclick = function() {
            moveSlider('next')
        }
        
        
        // Function for prev button 
        prevBtn.onclick = function() {
            moveSlider('prev')
        }
         
        function moveSlider(direction) {
            let sliderItems = sliderList.querySelectorAll('.item')
            let thumbnailItems = document.querySelectorAll('.thumbnail .item')
            
            if(direction === 'next'){
                sliderList.appendChild(sliderItems[0])
                thumbnail.appendChild(thumbnailItems[0])
                slider.classList.add('next')
            } else {
                sliderList.prepend(sliderItems[sliderItems.length - 1])
                thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
                slider.classList.add('prev')
            }
        
        
            slider.addEventListener('animationend', function() {
                if(direction === 'next'){
                    slider.classList.remove('next')
                } else {
                    slider.classList.remove('prev')
                }
            }, {once: true}) // Remove the event listener after it's triggered once
        }