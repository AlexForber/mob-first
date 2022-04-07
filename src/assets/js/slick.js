// find elements
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let slideImage = document.getElementById("img-gallery");

//subscript listener
prevBtn.addEventListener('click', onPrevBtnClick);
nextBtn.addEventListener('click', onNextBtnClick);

//create images array
let imagesArray = ['../assets/images/gallery1.jpg', '../assets/images/gallery2.jpg', '../assets/images/gallery3.jpg'];

let currentImageIndex = 0;


slideImage.src = imagesArray[currentImageIndex];




//function defenitions
function onPrevBtnClick(){
    // if(currentImageIndex < imagesArray.length){
    //     currentImageIndex = imagesArray.length - 1;
    //     slideImage.src = imagesArray[currentImageIndex];
    // }   else{
    //     currentImageIndex--;
    //     slideImage.src = imagesArray[currentImageIndex];
    // }

    currentImageIndex--;
    slideImage.src = imagesArray[currentImageIndex];

    
    

};

function onNextBtnClick(){
if(currentImageIndex < imagesArray.length){
    currentImageIndex++;
    slideImage.src = imagesArray[currentImageIndex];
    
}   else{
    currentImageIndex--;
}
    
    
};

