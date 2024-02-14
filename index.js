const currentImg = document.getElementById("current-img")
const closeBtn = document.getElementById("close-btn")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const imageArray = document.querySelectorAll(".img-gallary")
const imgBox = document.getElementById("viewfull")

closeBtn.addEventListener("click",function(){
    imgBox.style.display = "none"
});

function viewimage(imageSource){

    currentImg.src = imageSource;
    imgBox.style.display = "flex"
}

function currentIndex() {
    let currentImageSrc = currentImg.getAttribute("src");
    let currentIndex = Array.from(imageArray).findIndex(
      (element) => element.src === currentImageSrc
    );
    return currentIndex;
}

prevBtn.addEventListener("click",function(){
    let currentIndexValue = currentIndex()
    let imageArray_length = imageArray.length
    let prevImageSrc = ''
    if(currentIndexValue === 0){
         prevImageSrc = imageArray[imageArray_length-1].src
    }
    else{
        prevImageSrc = imageArray[currentIndexValue-1].src
    }

    viewimage(prevImageSrc)
});

nextBtn.addEventListener("click",function(){
    let currentIndexValue = currentIndex()
    let imageArray_length = imageArray.length
    let nextImageSrc = ''
    if(currentIndexValue === imageArray_length-1){
        nextImageSrc = imageArray[0].src
    }
    else{
        nextImageSrc = imageArray[currentIndexValue+1].src
    }

    viewimage(nextImageSrc)
});

