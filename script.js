// ================================
// Modern Image Gallery
// ================================

const preview = document.getElementById("preview");
const previewImage = document.getElementById("previewImage");

const images = Array.from(document.querySelectorAll(".gallery img"));

let currentIndex = 0;

// -------------------------
// Open Image
// -------------------------

function openImage(src){

    currentIndex = images.findIndex(img => img.src === src);

    preview.style.display = "flex";

    previewImage.src = src;

    document.body.style.overflow = "hidden";

}

// -------------------------
// Close Image
// -------------------------

function closeImage(){

    preview.style.display = "none";

    document.body.style.overflow = "auto";

}

// -------------------------
// Previous Image
// -------------------------

function previousImage(){

    currentIndex--;

    if(currentIndex < 0){

        currentIndex = images.length - 1;

    }

    previewImage.src = images[currentIndex].src;

}

// -------------------------
// Next Image
// -------------------------

function nextImage(){

    currentIndex++;

    if(currentIndex >= images.length){

        currentIndex = 0;

    }

    previewImage.src = images[currentIndex].src;

}

// -------------------------
// Keyboard Controls
// -------------------------

document.addEventListener("keydown",(e)=>{

    if(preview.style.display==="flex"){

        if(e.key==="Escape"){

            closeImage();

        }

        if(e.key==="ArrowLeft"){

            previousImage();

        }

        if(e.key==="ArrowRight"){

            nextImage();

        }

    }

});

// -------------------------
// Click Outside to Close
// -------------------------

preview.addEventListener("click",(e)=>{

    if(e.target===preview){

        closeImage();

    }

});

// -------------------------
// Mouse Wheel Navigation
// -------------------------

preview.addEventListener("wheel",(e)=>{

    if(e.deltaY>0){

        nextImage();

    }

    else{

        previousImage();

    }

});

// -------------------------
// Image Fade Effect
// -------------------------

function updateImage(src){

    previewImage.style.opacity = "0";

    setTimeout(()=>{

        previewImage.src = src;

        previewImage.style.opacity = "1";

    },150);

}

// Override navigation with fade

function previousImage(){

    currentIndex--;

    if(currentIndex<0){

        currentIndex=images.length-1;

    }

    updateImage(images[currentIndex].src);

}

function nextImage(){

    currentIndex++;

    if(currentIndex>=images.length){

        currentIndex=0;

    }

    updateImage(images[currentIndex].src);

}