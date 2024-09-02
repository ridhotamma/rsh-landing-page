gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('.animation-container');
const logo = document.querySelector('.logo');

const scene1 = document.querySelector('.scene__1');
const letterI = document.querySelector('.letter-i .text');
const chevronUp = document.querySelector('.letter-i .chevron');
const intro1 = document.querySelector('.scene__intro--1');
const intro2 = document.querySelector('.scene__intro--2');
const intro3 = document.querySelector('.scene__intro--3');

const scene2 = document.querySelector('.scene__2');
const text1 = document.querySelector('.text__1');
const text2 = document.querySelector('.text__2');
const text3 = document.querySelector('.text__3');
const text4 = document.querySelector('.text__4');
const circles = document.querySelectorAll('.circle');

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.animation-container',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        pin: true,
        end: "+=4000"
    },
});

// scene 1
tl.fromTo(
    logo,
    { xPercent: -50, yPercent: -50, left: '50%', top: '50%' },
    { duration: 3, xPercent: 0, yPercent: 0, left: '2%', top: '2%' }
)
    .fromTo(
        scene1,
        {
            y: '70%',
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
    .to(scene1, {
        y: '10%',
        duration: 3,
    })
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
    .to(scene1, { y: '40%', duration: 3 })
    .to(
        letterI,
        {
            scaleY: 4,
            duration: 3,
        },
        '<'
    )
    .fromTo(
        intro2,
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
    .to(scene1, { y: '50%', duration: 3 })
    .fromTo(
        chevronUp,
        {
            autoAlpha: 0,
            yPercent: -40,
        },
        {
            yPercent: -70,
            duration: 3,
            autoAlpha: 1,
        }
    )
    .fromTo(
        intro3,
        {
            autoAlpha: 0,
            yPercent: 30,
        },
        {
            yPercent: 0,
            duration: 3,
            autoAlpha: 1,
        },
        '<'
    )
    .to(scene1, { yPercent: 100, duration: 10 })
    .to(letterI, { scaleY: 8, duration: 3 }, '<')
    .to(logo, { autoAlpha: 0 }, '<');

// Scene 2
tl.fromTo(
    scene2,
    { autoAlpha: 0 },
    { autoAlpha: 1, duration: 3 },
    '-=1.5'
)
    .fromTo(
        circles,
        {
            x: (index) => (index % 2 === 0 ? '-100%' : '100%'),
        },
        {
            x: '0%',
            duration: 4,
            stagger: 0.2,
        },
    )
    .fromTo(
        text1,
        { xPercent: -100, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: 4 },
        "<"
    )
    .fromTo(
        text2,
        { xPercent: 100, autoAlpha: 0 },
        { xPercent: 0, autoAlpha: 1, duration: 4 },
        '-=1.5'
    )
    .fromTo(
        text3,
        { yPercent: 100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 4 },
        '-=1.5'
    )
    .fromTo(
        text4,
        { yPercent: -100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1, duration: 4 },
        '-=1.5'
    );
