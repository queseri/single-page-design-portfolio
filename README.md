# Frontend Mentor - Single-page design portfolio solution

This is a solution to the [Single-page design portfolio challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/singlepage-design-portfolio-2MMhyhfKVo). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![mobile](./assets/output/mobile.png)
![tablet](./assets/output/tablet.png)
![desktop](./assets/output/desktop.png)
### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

#### Making the carousel
[Html and css carousel](https://css-tricks.com/css-only-carousel/)
- inspiration was drawn from the above example to build the scroll carousel. Notably it was created using the `anchor` element.

```html
<ul class="slide-container">
        <li id="slide1" class="slide" tabindex="0">
          <img class="slide-img" src="./assets/image-slide-1.jpg" alt="ui and ux animations">
        </li>
        <li id="slide2" class="slide" tabindex="0">
          <img class="slide-img" src="./assets/image-slide-2.jpg" alt="illustrations">
        </li>
        <li id="slide3" class="slide" tabindex="0">
          <img class="slide-img" src="./assets/image-slide-3.jpg" alt="photographic solutions">
        </li>
        <li id="slide4" class="slide" tabindex="0">
          <img class="slide-img" src="./assets/image-slide-4.jpg" alt="Graphic design solutions">
        </li>
        <li id="slide5" class="slide" tabindex="0">
          <img class="slide-img" src="./assets/image-slide-5.jpg" alt="Mobile and web applications">
        </li>
      </ul>
```
```css
.slide-container {   
    display: flex;
    overflow-x: scroll;
    counter-reset: item;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;   
    gap: 1rem;
}
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
