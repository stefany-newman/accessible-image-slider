/* Gallery */
const dots = document.querySelectorAll(".dot");
const dotsParent = document.querySelector("#dot-navigation");
const imagesNodeList = document.querySelectorAll(".gallery-image");
const galleryImagesArray = Array.from(imagesNodeList);
const nextPrevControls = document.querySelector("#next-prev-controls");

const numberOfImages = galleryImagesArray.length; // Default is 4

/* Functions */ 

const activateImage = (imagesNodeList, index) => {
    imagesNodeList[index].toggleAttribute("hidden");
};
const activateDot = (dotsNodeList, index) => {
    dotsNodeList[index].setAttribute("aria-current", "true");
};
const deactivateDot = (dot) => {
    dot.setAttribute("aria-current", "false");
};
const deactivateImage = (image) => {
    image.toggleAttribute("hidden");
}; 

nextPrevControls.addEventListener("click", (e) => {
    /*
       Since listener is attached on the parent of the next & prev buttons, 
       we check if the user has clicked the either one of the buttons.
    */
    const isAButtonClicked = (e.target.tagName === "BUTTON") ? true : false;
    if(isAButtonClicked) {
    /* 
        We fetch the current image and dot each time the function is invoked, since the
        the current ones rotate, when the user invokes the function.
    */
    const currentImageElement = document.querySelector("img:not([hidden])"); // The only image without a "hidden" attribute.
    const activeDot = document.querySelector(".dot[aria-current='true'"); // The only dot with aria-current=true
    let currentImageIndex = galleryImagesArray.findIndex(image => !image.hidden);
    const buttonType = (type) => (type === e.target.id); // Next or prev button?
    const switchImageIndex = (type) => {
        if(type === "next"){
            /* 
               Get the current image index and increment it by one - this returns the index of the NEXT image. 
               If the next image has an index that doesn't exist in the image array (i.e. the user has reached the end), then we cycle to the 
               first image. 
            */
            return currentImageIndex < (numberOfImages-1) ? ++currentImageIndex : 0;
        }
        if(type === "prev"){
            /* 
               Get the current image index and decrement it by one, if the index is larger than 1.
               If the index equals to 0, then we can't subtract the index number. If that happens, 
               the index equals the last image of the array.
            */
            return (currentImageIndex > 0) ? --currentImageIndex : (numberOfImages -1);
        }
    };
        let differentImageIndex = (buttonType("next")) ? switchImageIndex("next") : switchImageIndex("prev");
        /*
            Every time another image is selected, the following must happen:
            - Current dots and images are de-activated, visually and programmatically. 
            - The new dots and images are activated, visually and programmatically. 
        */
        deactivateDot(activeDot);
        deactivateImage(currentImageElement);
        activateImage(imagesNodeList, differentImageIndex);
        activateDot(dots, differentImageIndex);
    }
});

dotsParent.addEventListener("click", (e) => {
    /*
       Since listener is attached on the parent of the dots, 
       we check if the user has clicked the dots, and not
       the gap between them, or the padding around them.
    */
    let isDotClicked = (e.target.classList.contains("dot")) ? true : false;
    if(isDotClicked){
        let clickedDot = e.target; // The dot the user clicked
        // Getting the current and visible dot and image 
        const activeDot = document.querySelector(".dot[aria-current='true'");
        const currentImageElement = document.querySelector("img:not([hidden])");
        const dotsArray = Array.from(dots); // Convert the dots to an array so we can use findIndex on them
        let nextDotIndex = dotsArray.findIndex(dot => dot === clickedDot); // Find the index of the dot clicked
        /*
            Change the visible image and activate the clicked dot    
        */
            deactivateDot(activeDot);
            deactivateImage(currentImageElement);
            activateImage(imagesNodeList, nextDotIndex);
            activateDot(dots, nextDotIndex);
        }
});