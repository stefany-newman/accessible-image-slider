/* Gallery */
const dots = document.querySelectorAll(".dot");
const dotsParent = document.querySelector("#dot-navigation");
const galleryImagesArray = Array.from(document.querySelectorAll(".gallery-image"));
const nextPrevControls = document.querySelector("#next-prev-controls");

const numberOfImages = galleryImagesArray.length; // Default is 4

/* Functions */ 
const activate = (index, type) => {
    if(type === "image")
    {
        document.querySelectorAll(".gallery-image")[index].toggleAttribute("hidden");
    }
    if(type === "dot")
    {
        dots[index].setAttribute("aria-current", "true");
    }
};
const deactivateDot = (dot) => {
    dot.setAttribute("aria-current", "false");
};
const deactivateImage = (image) => {
    image.toggleAttribute("hidden");

}; 

nextPrevControls.addEventListener("click", (e) => {
    const isAButtonClicked = (e.target.tagName === "BUTTON") ? true : false;
    if(isAButtonClicked) {
    /* 
        We fetch the current image and dot each time the function is invoked, since the
        the current ones rotate, when the user invokes the function.
    */
    const currentImageElement = document.querySelector("img:not([hidden])"); // The only image without a "hidden" attribute.
    const activeDot = document.querySelector(".dot[aria-current='true'"); // The only dot with aria-current=true
    let currentImageIndex = galleryImagesArray.findIndex(image => !image.hidden);
    /*
       Since we placed the listener on the parent of the next & prev buttons, 
       we want to check when the user actually clicks the buttons, not their parent.
    */
    const buttonType = (type) => (type === e.target.id); // Next or prev button?
    const switchImageIndex = (type) => {
        if(type === "next"){
            /* 
               Get the current image index and increment is by one - this returns the index of the NEXT image. 
               If the next image has an index that doesn't exist in the image array (i.e. the user has reached the end), then we cycle to the 
               first image. 
            */
            return currentImageIndex < (numberOfImages-1) ? ++currentImageIndex : 0;
        }
        if(type === "prev"){
            /* 
               Get the current image index and decrement it by one, IF the index is larger than 1.
               If the index equals to 0, then we can't subtract the index number. If that happens, 
               the index equals the last image of the array.
            */
            return (currentImageIndex > 0) ? --currentImageIndex : (numberOfImages -1);
        }
    };
        let differentImageIndex = (buttonType("next")) ? switchImageIndex("next") : switchImageIndex("prev");
        deactivateDot(activeDot);
        deactivateImage(currentImageElement);
        activate(differentImageIndex, "image");
        activate(differentImageIndex, "dot");
    }
});

dotsParent.addEventListener("click", (e) => {
    let isDotClicked = e.target;
    if(!isDotClicked.classList.contains("dot")){
        return;
    }  
    const activeDot = document.querySelector(".dot[aria-current='true'");
    const currentImageElement = document.querySelector("img:not([hidden])");
    const dotsArray = Array.from(dots);
    let nextDotIndex = dotsArray.findIndex(dot => dot === isDotClicked);
        deactivateDot(activeDot);
        deactivateImage(currentImageElement);
        activate(nextDotIndex, "image");
        activate(nextDotIndex, "dot");
});