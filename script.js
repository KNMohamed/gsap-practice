import { gsap } from 'gsap';

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the box element
    const box = document.querySelector('.box');
    
    // Animate the box across the screen
    gsap.to(box, {
        x: 200,                // Move 300px to the right
        duration: 2,           // Animation duration in seconds
    });
});
