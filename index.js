let img=document.querySelector("#img");// Select the image element
const ligtbox=document.querySelector(".lightbox");// Select the lightbox element
const lightboxImg=document.querySelector(".lightbox img");// Select the image inside the lightbox
const closeBtn=document.querySelector(".close");// Select the close button

const images=["./images/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg","./images/halo-of-neon-ring-illuminated-in-the-stunning-landscape-of-yosemite.jpg",
    "./images/images.jpeg","./images/istockphoto-814423752-612x612.jpg","./images/istockphoto-1419410282-612x612.jpg",
    "./images/MainBefore.jpg","./images/pexels-souvenirpixels-414612.jpg"
]; // Array of image paths
// You can add more images to this array
let currentIndex=0; // Current index of the image being displayed
img.src=images[currentIndex]; // Set the initial image source
const nextImage=()=>{
    
    currentIndex ++;
    img.src=images[currentIndex];
    if(currentIndex>=images.length){ 
        currentIndex=0
        img.src=images[currentIndex];
    }
};// Function to show the next image
const prevImage=()=>{
    currentIndex--;
    img.src=images[currentIndex];
    if(currentIndex<0){ currentIndex=images.length-1
    img.src=images[currentIndex];}

};// Function to show the previous image

img.addEventListener("click",()=>{
    ligtbox.classList.add("active"); // Show the lightbox when the image is clicked
    lightboxImg.src=img.src; // Set the lightbox image source to the clicked image
    lightboxImg.classList.add("cc"); // Add active class to the lightbox image
});
closeBtn.addEventListener("click",()=>{
    ligtbox.classList.remove("active"); // Hide the lightbox when the close button is clicked
});