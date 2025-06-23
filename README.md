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
<div id="gallery-container" class="gallery-container">
  <img src="img1.jpg" alt="Image 1" />
  <img src="img2.jpg" alt="Image 2" hidden />
  <img src="img3.jpg" alt="Image 3" hidden />
  
  <div class="next-prev-controls">
    <button id="prev" aria-label="Previous image">←</button>
    <button id="next" aria-label="Next image">→</button>
  </div>
</div>