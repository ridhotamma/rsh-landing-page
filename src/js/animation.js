gsap.registerPlugin(ScrollTrigger);

const body = document.body;
const container = document.querySelector('.animation-container');
const logo = document.querySelector('.logo');

const scene1 = document.querySelector('.scene__1');
const letterI = document.querySelector('.letter-i .text');
const chevronUp = document.querySelector('.letter-i .chevron');
const chevronArrow = document.querySelectorAll('.letter-i .chevron div');
const intro1 = document.querySelector('.scene__intro--1');
const intro2 = document.querySelector('.scene__intro--2');
const intro3 = document.querySelector('.scene__intro--3');

const scene2 = document.querySelector('.scene__2');
const s2Desc = document.querySelector('.scene__2 .description');
const s2Text1 = document.querySelector('.scene__2 .description .text__1');
const s2Text2 = document.querySelector('.scene__2 .description .text__2');
const s2Text3 = document.querySelector('.scene__2 .description .text__3');
const s2Text4 = document.querySelector('.scene__2 .description .text__4');
const s2Circles = document.querySelectorAll('.scene__2 .circles .circle');
const [s2InnerCircle, ...s2OuterCircles] = s2Circles;

const scene3 = document.querySelector('.scene__3');
const s3MainCircle = document.querySelector('.scene__3 .circle__main');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.animation-container',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
    pin: true,
    end: '+=6000',
  },
});

tl.set(scene2, { autoAlpha: 0 })
tl.set(scene3, { autoAlpha: 0 })

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
    duration: 3
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
  .to(logo, { autoAlpha: 0, duration: 3 }, '<');

// Scene 2
tl.to(scene2, { autoAlpha: 1, duration: 3 }, '-=1.5')
  .fromTo(
    s2Circles,
    {
      x: (index) => (index % 2 === 0 ? '-100%' : '100%'),
    },
    {
      x: '0%',
      duration: 3,
      stagger: 0.2,
    }
  )
  .fromTo(
    s2Text1,
    { xPercent: -100, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1, duration: 3 },
    '<'
  )
  .fromTo(
    s2Text2,
    { xPercent: 100, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1, duration: 3 },
    '<'
  )
  .fromTo(
    s2Text3,
    { yPercent: -100, autoAlpha: 0 },
    { yPercent: 0, autoAlpha: 1, duration: 3 },
    '-=1.5'
  )
  .fromTo(
    s2Text4,
    { yPercent: -100, autoAlpha: 0 },
    { yPercent: 0, autoAlpha: 1, duration: 3 },
    '-=1.5'
  )
  .to(body, { backgroundColor: '#11f3f3', duration: 6 })
  .to(s2OuterCircles, { autoAlpha: 1 }, '<')
  .to(s2OuterCircles, { yPercent: 100, duration: 6 }, '<')
  .to(
    document.querySelectorAll('.scene__2 .description'),
    {
      yPercent: 100,
      duration: 6,
    },
    '<'
  )
  .to(
    s2OuterCircles,
    {
      width: 0,
      duration: 6,
    },
    '<'
  )
  .set(scene2, { autoAlpha: 0 })
  .set(scene3, { autoAlpha: 1 });
