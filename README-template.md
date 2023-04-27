# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Some Flexbox
- Mobile-first workflow
- Javascript

### What I learned

A key learning for me was getting the slide content to update not only dynamically but also in a responsive manner dependant on screen size this was accomplished by using event listener and template string in the code snippet below, i also attempted to keep the design responsive between sizes provided within the figma file.

```js
function updateContent() {
  if (window.innerWidth > 425) {
    slideBg.style.backgroundImage = `url("./images/desktop-${slides[baseIndex].img}.jpg")`;
  } else {
    slideBg.style.backgroundImage = `url("./images/mobile-${slides[baseIndex].img}.jpg")`;
  }
  slideTitle.innerHTML = slides[baseIndex].title;
  slideDesc.innerHTML = slides[baseIndex].desc;
}

updateContent();
```

### Continued development

I wish to strengthen CSS positioning and usee more javascript in order to make fully dynamic sites whilst looking to start pulling data from external sources

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

## Author

- Frontend Mentor - [@Luke-Satchwell](https://www.frontendmentor.io/profile/Luke-Satchwell)
