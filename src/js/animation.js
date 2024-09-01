gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('.animation-container');
const logo = document.querySelector('.logo');

const slide1 = document.querySelector('.slide__1');
const letterI = document.querySelector('.letter-i');
const intro1 = document.querySelector('.slide__intro--1');
const intro2 = document.querySelector('.slide__intro--2');

let containerRect = container.getBoundingClientRect();
let logoRect = logo.getBoundingClientRect();

let translateX = logoRect.left - containerRect.left;
let translateY = logoRect.top - containerRect.top;

window.addEventListener('resize', () => {
    containerRect = container.getBoundingClientRect();
    logoRect = logo.getBoundingClientRect();

    translateX = logoRect.left - containerRect.left;
    translateY = logoRect.top - containerRect.top;

    console.log({ translateX, translateY });
});

document.addEventListener('DOMContentLoaded', () => {
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.animation-container',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
        },
    });

    tl.to(logo, {
        x: -translateX,
        y: -translateY,
        scale: 0.5,
        duration: 3,
    })
        .fromTo(
            slide1,
            {
                y: '60%',
            },
            {
                y: '0%',
                duration: 3,
            },
            '<'
        )
        .to(letterI, {
            scaleY: 3,
            transformOrigin: 'bottom',
            duration: 3,
            delay: 2,
        })
        .to(
            slide1,
            {
                y: '10%',
                duration: 3,
            },
            '<'
        )
        .fromTo(
            intro1,
            {
                autoAlpha: 0,
                y: 40,
            },
            {
                y: 0,
                duration: 3,
                autoAlpha: 1,
            }
        )
        .to(slide1, { y: '40%', duration: 3 })
        .to(
            letterI,
            {
                scaleY: 4,
                duration: 3,
            },
            '<'
        ).fromTo(
            intro2,
            {
                autoAlpha: 0,
                y: 40,
            },
            {
                y: 0,
                duration: 3,
                autoAlpha: 1,
            },
            '<'
        );
});
