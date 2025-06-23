# Accessible Image Gallery Slider

A lightweight, accessible image gallery slider built with **vanilla JavaScript** — no dependencies, mobile-ready, and easy to drop into any project.

---

## Features

- Pure JavaScript (no frameworks)
- Keyboard and button navigation
- Keyboard and simple pointer operable controls
- WCAG 2.2 AA conformant 
- Easy to customize and extend

---

## Screenshots

### Desktop
![Desktop version of the image gallery, showing 4 dot navigation dots, backwards and forward arrows, and an image showing the text "Image 1"](images/repo/desktop-demo.png)

### Mobile 
![Mobile version of the image gallery, showing 4 dot navigation dots, backwards and forward arrows, and an image showing the text "Image 1"](images/repo/mobile-demo.png)

---

## Usage

### HTML
```html
<section class="gallery-section">
    <h2>Gallery</h2>
    <div id="gallery-container" class="gallery-container">
        <div class="next-prev-controls" id="next-prev-controls">
            <button type="button" id="next" class="next" aria-label="Next Image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z">
                </svg>
            </button>
            <button type="button" id="prev" class="prev" aria-label="Preivous Image">    
                <svg aria-hidden="true" role="presentation" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                    <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z">
                </svg>
            </button>
        </div>
        <div id="gallery-images" class="gallery-content">
            <img src="images/example/example-image-1.png" class="gallery-image" id="image1" alt="Image 1" >
            <img src="images/example/example-image-2.png" class="gallery-image" id="image2" alt="Image 2" hidden>
            <img src="images/example/example-image-3.png" class="gallery-image" id="image3" alt="Image 3" hidden>
            <img src="images/example/example-image-4.png" class="gallery-image" id="image4" alt="Image 4" hidden>
        </div>
        <div id="dot-navigation" class="dot-navigation">
            <ol role="list">
                <li><button type="button" class="dot" aria-current="true"  aria-labelledby="image1"></button></li>
                <li><button type="button" class="dot" aria-current="false" aria-labelledby="image2"></button></li>
                <li><button type="button" class="dot" aria-current="false" aria-labelledby="image3"></button></li>
                <li><button type="button" class="dot" aria-current="false" aria-labelledby="image4"></button></li>
            </ol>
        </div>
    </div>
</section>