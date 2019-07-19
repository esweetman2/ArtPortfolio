const overlayBtn = document.querySelectorAll("#overlay-btn");


const xBtn = document.querySelectorAll(".x-button");
const popUp = document.getElementById("painting-section-pop-up");
const paintingThumbs = document.querySelectorAll(".painting img");
const fullView = document.getElementById("full-view-img");


//===================================================
            // IMG POP UP
// ===================================================

function exitPopUp(){
    if(popUp.style.display = "block"){
        popUp.style.display = "none";
    }
}
 
xBtn[0].addEventListener("click", exitPopUp);  

const paintings = document.querySelectorAll(".painting");



for(let i=0; i < paintings.length; i++){
    paintings[i].addEventListener("click", function(e){
        e.preventDefault;
        popUp.style.display = "block";
        fullView.src = e.target.src;
        
    });
}



// ===============================================

            // DIFFERENT VIEW ON MOBILE

// ===============================================

const rowGallery = document.getElementById("row-gallery");
let paintingGrid = document.querySelector('.paintings-grid');
const singlePainting = document.getElementById("single-pic");

function rowGall(){
        paintingGrid.style.display = "flex";
        paintingGrid.style.flexDirection = 'row';
        paintingGrid.style.flexWrap = "wrap";
        paintingGrid.style.justifyContent = "space-between";
        paintingGrid.style.alignItems = "left";
        for(let i =0; i< paintings.length; i++){
            paintings[i].style.padding = "0";
            paintings[i].style.marginBottom = "1rem";
            paintings[i].style.width = "100px";
            paintings[i].style.border = "none";
            paintings[i].style.boxShadow = "none";
            paintings[i].style.height = '100px';

        }
}

function singleGall(){
    if(paintingGrid.style.flexDirection = "row"){
        paintingGrid.style.flexDirection = 'column';
    }
    for(let i =0; i< paintings.length; i++){
        paintings[i].style.padding = "0";
        paintings[i].style.marginBottom = "30px";
        paintings[i].style.width = "100%";
        paintings[i].style.height = "100%";

    }
}

rowGallery.addEventListener('click', rowGall);
singlePainting.addEventListener("click", singleGall);

