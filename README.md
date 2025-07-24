# Lazy Loading Swiper Slider with Background Images

This project implements a performant full-screen image slider using **React**, **Swiper**, and **lazy loading techniques**. It dynamically loads background images only when needed.

## Technologies used

- React
- Swiper
- Tailwind CSS

## How Lazy Loading Works

- The slider starts with only the **first image loaded**
- When the user moves to the next slide:
  - The current and **next slide's image** are marked as `loaded`
- This reduces the number of background images loaded at once
- Preloading logic prevents **white flicker or delay** when user clicks "Next"
