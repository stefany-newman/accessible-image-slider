/* Gallery */
const nextPrevControls = document.querySelector('#next-prev-controls');
const galleryImagesArray = Array.from(document.querySelectorAll('.gallery-image'));
const dots = document.querySelectorAll('.dot');
const dotsParent = document.querySelector("#dot-navigation");
const numberOfImages = galleryImagesArray.length;

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

nextPrevControls.addEventListener("click", (e) => {
    const currentImageElement = document.querySelector("img:not([hidden])");
    const activeDot = document.querySelector(".dot[aria-current='true'");
    let currentImageIndex = galleryImagesArray.findIndex(image => !image.hidden);
    const isAButtonClicked = (e.target.tagName === "BUTTON") ? true : false;
    const buttonType = (type) => (type === e.target.id);
    const switchImageIndex = (type) => {
        if(type === "next"){
            return currentImageIndex < (numberOfImages-1) ? ++currentImageIndex : 0;
        }
        if(type === "prev"){
            return (currentImageIndex > 0) ? --currentImageIndex : (numberOfImages -1);
        }
    };
    if(isAButtonClicked) {
        let differentImageIndex = (buttonType("next")) ? switchImageIndex("next") : switchImageIndex("prev");
        deactivateDot(activeDot);
        deactivateImage(currentImageElement);
        activate(differentImageIndex, "image");
        activate(differentImageIndex, "dot");
    }

});

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