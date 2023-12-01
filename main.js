function test (){
    var img =document.getElementById("imgmsi");
   img.setAttribute("src","assets/img/new product on click/msi laptop black.webp");
}
function test1 (){
    var img =document.getElementById("imgmsi");
   img.setAttribute("src","assets/img/NEW PRODUCTS/msi laptop.webp");
}

function earphone (){
    var img =document.getElementById("imgwire");
    img.setAttribute("src","assets/img/new product on click/wireless bluetooth earphone black.webp");
   
}
function earphone1 (){
    var img =document.getElementById("imgwire");
    img.setAttribute("src","assets/img/NEW PRODUCTS/wireless bluetooth earphone.webp");
}

function ComputerSpeakers1 (){
    var img =document.getElementById("imgspeak");
    img.setAttribute("src","assets/img/NEW PRODUCTS/computer speaker.webp");
   
}
function ComputerSpeakers (){
    var img =document.getElementById("imgspeak");
    img.setAttribute("src","assets/img/new product on click/computer speaker black.webp");
}

function playamloyed (){
    var img =document.getElementById("imgamloyed");
    img.setAttribute("src","assets/img/NEW PRODUCTS/play amoled.webp");
}
function playamloyed1 (){
    var img =document.getElementById("imgamloyed");
    img.setAttribute("src","assets/img/new product on click/play amoled black.webp");
}
function playamloyed2 (){
    var img =document.getElementById("imgamloyed");
    img.setAttribute("src","assets/img/new product on click/play amoled pink.webp");
}
function playamloyed3 (){
    var img =document.getElementById("imgamloyed");
    img.setAttribute("src","assets/img/new product on click/play amoled green.webp");
}
function playamloyed4 (){
    var img =document.getElementById("imgamloyed");
    img.setAttribute("src","assets/img/new product on click/play amoled silver.webp");
}

function wirlesspeaker (){
    var img =document.getElementById("imgspeaker");
    img.setAttribute("src","assets/img/NEW PRODUCTS/wireless speaker.webp");
}
function wirlesspeaker1 (){
    var img =document.getElementById("imgspeaker");
    img.setAttribute("src","assets/img/new product on click/wireless speaker green.webp");
}
function wirlesspeaker2 (){
    var img =document.getElementById("imgspeaker");
    img.setAttribute("src","assets/img/new product on click/wireless speaker black.webp");
}
function wirlesspeaker3 (){
    var img =document.getElementById("imgspeaker");
    img.setAttribute("src","assets/img/new product on click/wireless speaker blue.webp");
}

const loading= document.querySelector('.loading')
window.addEventListener('load',function(){
    this.setTimeout(function(){
         loading.classList.add('opacity-0','invisible')  
    },2000)
})
const topcategories=document.querySelector('.top-categories')
const scrolltotopbtn=document.querySelector('.scroll-to-top')
scrolltotopbtn.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})


const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; 
     
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); 
    });
});
const autoSlide = () => {
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); 
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) { 
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);



