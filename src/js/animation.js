gsap.registerPlugin(ScrollTrigger);

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

const scene4 = document.querySelector('.scene__4');
const scene5 = document.querySelector('.scene__5');

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: '.animation-container',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
    end: '+=18000',
  },
});

gsap.set(scene2, { autoAlpha: 0 });
gsap.set(scene3, { autoAlpha: 0 });
gsap.set(scene4, { autoAlpha: 0 });
gsap.set(scene5, { autoAlpha: 0 });

function pulseCircles() {
  gsap.to(s2OuterCircles, {
    scale: 3.75,
    opacity: 0,
    duration: 3.6,
    stagger: {
      each: 0.6,
      repeat: -1,
    },
  });
}

// scene 1
tl.fromTo(
  scene1,
  {
    y: '100vh',
  },
  {
    y: '0vh',
    duration: 3,
  },
  '<'
)
  .to(letterI, {
    scaleY: isMobile || isTablet ? 12 : 4,
    transformOrigin: 'bottom',
    duration: 3,
    ease: 'power4.inOut',
  })
  .to(scene1, {
    y: '18vh',
    duration: 3,
    ease: 'power4.inOut',
  })
  .fromTo(
    intro1,
    {
      autoAlpha: 0,
      y: '100vh',
    },
    {
      y: 0,
      duration: 3,
      autoAlpha: 1,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(scene1, { y: '30vh', duration: 3, ease: 'power4.inOut' })
  .to(
    letterI,
    {
      scaleY: isMobile || isTablet ? 20 : 8,
      duration: 3,
      ease: 'power4.inOut',
    },
    '<'
  )
  .fromTo(
    intro2,
    {
      autoAlpha: 0,
      y: '100vh',
    },
    {
      y: 0,
      duration: 3,
      autoAlpha: 1,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(scene1, { y: '55vh', duration: 3, ease: 'power4.inOut' })
  .fromTo(
    chevronUp,
    {
      y: '100vh',
      autoAlpha: 0,
    },
    {
      y: 0,
      duration: 3,
      autoAlpha: 1,
      ease: 'power4.inOut',
    },
    '<'
  )
  .fromTo(
    intro3,
    {
      autoAlpha: 0,
      y: '100vh',
    },
    {
      y: 0,
      duration: 3,
      autoAlpha: 1,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to('.theme-changer', { autoAlpha: 0, duration: 3 }, '<')
  .to(scene1, {
    y: '200vh',
    duration: 3,
    ease: 'power4.inOut',
  })
  .to(chevronUp, { y: '-150vh', duration: 3, ease: 'power4.inOut' }, '<')
  .to(
    chevronArrow,
    {
      yPercent: 120,
      autoAlpha: 0,
      duration: '3',
      ease: 'power4.inOut',
      stagger: {
        each: 0.2,
        from: 'end',
      },
    },
    '<'
  )
  .to(
    letterI,
    {
      scaleY: isMobile || isTablet ? 32 : 12,
      duration: 3,
      ease: 'power4.inOut',
    },
    '<'
  )
  .set(chevronUp, { autoAlpha: 0 });

// Scene 2
tl.fromTo(
  scene2,
  { y: '-150vh', autoAlpha: 1 },
  { y: '0vh', autoAlpha: 1, duration: 5 },
  '-=3'
)
  .set('.animation-container', { backgroundColor: '#0000e0' }, '<')
  .set(letterI, { backgroundColor: '#f749d4' }, '<')
  .set('#intro-title', { color: '#f749d4' }, '<')
  // .fromTo(
  //   s2Circles,
  //   {
  //     x: (index) => (index % 2 === 0 ? '-100%' : '100%'),
  //   },
  //   {
  //     x: '0%',
  //     duration: 5,
  //     stagger: 0.2,
  //     ease: 'power4.inOut',
  //   },
  //   '<'
  // )
  .fromTo(
    s2Text1,
    { yPercent: -100, autoAlpha: 0 },
    { yPercent: 0, autoAlpha: 1, duration: 5, ease: 'power4.inOut' },
    '<'
  )
  .fromTo(
    s2Text2,
    { xPercent: -100, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1, duration: 5, ease: 'power4.inOut' },
    '<'
  )
  .fromTo(
    [s2Text2, s2Text3, s2Text4],
    { xPercent: -100, autoAlpha: 0 },
    {
      xPercent: 0,
      autoAlpha: 1,
      duration: 5,
      stagger: 0.1,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to('.animation-container', {
    backgroundColor: '#11f3f3',
    duration: 6,
    ease: 'power4.inOut',
  })
  // .to(s2OuterCircles, { autoAlpha: 1, duration: 5, ease: 'power4.inOut' }, '<')
  .to(s2OuterCircles, { yPercent: 100, duration: 6, ease: 'power4.inOut' }, '<')
  .to(
    document.querySelectorAll('.scene__2 .description'),
    {
      yPercent: 100,
      duration: 6,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(
    s2OuterCircles,
    {
      width: 0,
      duration: 6,
      ease: 'power4.inOut',
    },
    '<'
  )
  .set(scene2, { autoAlpha: 0 })
  .set(scene3, { autoAlpha: 1 });

// scene 3
tl.set('.circle__replace', { autoAlpha: 0 })
  .to('.animation-container', {
    backgroundColor: '#f5e400',
    duration: 3,
    ease: 'power4.inOut',
  })

  .from(
    '.scene__3 .circles .circle__random:nth-child(1)',
    {
      xPercent: 100,
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(2)',
    {
      xPercent: -100,
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(3)',
    {
      xPercent: 100,
      yPercent: 100,
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(4)',
    {
      xPercent: 200,
      yPercent: 100,
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(5)',
    {
      y: '100vh',
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(6)',
    {
      xPercent: -100,
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(7)',
    {
      xPercent: -100,
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(8)',
    {
      yPercent: -100,
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(9)',
    {
      xPercent: -100,
      yPercent: -100,
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(10)',
    {
      yPercent: -100,
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(11)',
    {
      y: '-100vh',
      duration: 3,
      margin: 0,
      ease: 'power4.inOut',
    },
    '<'
  )
  // SCENE 3 CIRCLES EXIT
  .set(
    [
      '.scene__3 .circles .circle__random:nth-child(1)',
      '.scene__3 .circles .circle__random:nth-child(3)',
      '.scene__3 .circles .circle__random:nth-child(4)',
      '.scene__3 .circles .circle__random:nth-child(7)',
      '.scene__3 .circles .circle__random:nth-child(9)',
      '.scene__3 .circles .circle__random:nth-child(10)',
      '.scene__3 .circles .circle__main',
    ],
    { autoAlpha: 0 }
  )
  .to(
    [
      '.scene__3 .circles .circle__random:nth-child(2)',
      '.scene__3 .circles .circle__random:nth-child(5)',
      '.scene__3 .circles .circle__random:nth-child(6)',
    ],
    { y: '-100vh', duration: 3, ease: 'power4.inOut' },
    '<'
  )
  .to(
    '.scene__3 .circles .circle__random:nth-child(5)',
    {
      xPercent: -60,
      duration: 2,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(
    [
      '.scene__3 .circles .circle__random:nth-child(2)',
      '.scene__3 .circles .circle__random:nth-child(5)',
      '.scene__3 .circles .circle__random:nth-child(6)',
    ],
    {
      scale: 0.4,
      backgroundColor: '#f749d4',
      duration: 3,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(
    [
      '.scene__3 .circles .circle__random:nth-child(8)',
      '.scene__3 .circles .circle__random:nth-child(11)',
    ],
    {
      y: '-100vh',
      xPercent: -100,
      backgroundColor: '#f749d4',
      duration: 3,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(
    letterI,
    {
      x: '50vw',
      duration: 3,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(
    letterI,
    {
      scaleX: 5,
      duration: 5,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(
    '.animation-container',
    { backgroundColor: '#0000e0', duration: 3, ease: 'power4.inOut' },
    '<'
  )
  .from(
    '.scene__3 .description > *',
    {
      x: '100vw',
      duration: 5,
      autoAlpha: 0,
      stagger: 0.5,
      ease: 'power4.inOut',
    },
    '<'
  )
  .fromTo(
    '.circles-vertical__inner',
    { x: isMobile || isTablet ? '-40vw' : '-20vw' },
    {
      x: isMobile || isTablet ? '3vw' : '10vw',
      duration: 5,
      ease: 'power4.inOut',
    },
    '<'
  )
  // CIRCLE FORM VERTICAL
  .set('.circle__replace', { autoAlpha: 1 }, '<')
  .from(
    '.circle__fixed',
    {
      x: (index) => (index % 2 === 0 ? 100 : -100),
      duration: 3,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.circle__replace--1',
    {
      xPercent: isMobile || isTablet ? 205 : 225,
      yPercent: isMobile || isTablet ? 13 : -1,
      width: isMobile || isTablet ? '38vw' : '28vw',
      height: isMobile || isTablet ? '38vw' : '28vw',
      duration: 5,
      ease: 'power4.inOut',
    },
    '<'
  )

  .from(
    '.circle__replace--2',
    {
      xPercent: isMobile || isTablet ? 205 : 225,
      yPercent: isMobile || isTablet ? 93 : 92,
      width: isMobile || isTablet ? '38vw' : '28vw',
      height: isMobile || isTablet ? '38vw' : '28vw',
      duration: 5,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.circle__replace--3',
    {
      xPercent: isMobile || isTablet ? 100 : 118,
      yPercent: isMobile || isTablet ? -40 : -30,
      width: isMobile || isTablet ? '38vw' : '28vw',
      height: isMobile || isTablet ? '38vw' : '28vw',
      duration: 5,
      ease: 'power4.inOut',
    },
    '<'
  )
  .from(
    '.circle__replace--4',
    {
      xPercent: isMobile || isTablet ? 100 : 118,
      yPercent: isMobile || isTablet ? -171 : -151,
      width: isMobile || isTablet ? '38vw' : '28vw',
      height: isMobile || isTablet ? '38vw' : '28vw',
      duration: 5,
      ease: 'power4.inOut',
    },
    '<'
  )

  .from(
    '.circle__replace--5',
    {
      xPercent: isMobile || isTablet ? 311 : 332,
      yPercent: isMobile || isTablet ? -92 : -59,
      width: isMobile || isTablet ? '38vw' : '28vw',
      height: isMobile || isTablet ? '38vw' : '28vw',
      duration: 5,
      ease: 'power4.inOut',
    },
    '<'
  )

  .from(
    '.circle__replace--6',
    {
      xPercent: isMobile || isTablet ? 312 : 332,
      yPercent: isMobile || isTablet ? -12 : 34,
      width: isMobile || isTablet ? '38vw' : '28vw',
      height: isMobile || isTablet ? '38vw' : '28vw',
      duration: 5,
      ease: 'power4.inOut',
    },
    '<'
  )

  .from(
    '.circle__replace--7',
    {
      xPercent: isMobile || isTablet ? -11 : 11,
      yPercent: isMobile || isTablet ? -195 : -195,
      width: isMobile || isTablet ? '38vw' : '28vw',
      height: isMobile || isTablet ? '38vw' : '28vw',
      duration: 5,
      ease: 'power4.inOut',
    },
    '<'
  );

// scene 4
tl.to(letterI, {
  scaleX: 1,
  x: 0,
  duration: 3,
  ease: 'power4.inOut',
})
  .to(
    '.scene__3 .description',
    {
      scale: 0.7,
      transformOrigin: '10vw bottom',
      y: '100vh',
      duration: 3,
    },
    '<'
  )
  .to('.circles-vertical__inner', { y: '-50vh', duration: 3 }, '<')
  .to(
    '.animation-container',
    { backgroundColor: '#11f3f3', duration: 3, ease: 'power4.inOut' },
    '<'
  )
  .to('.circles-vertical__inner', {
    y: '100vh',
    duration: 3,
  })
  .set(scene4, { autoAlpha: 1 }, '<')
  .fromTo('.scene__4', { yPercent: -150 }, { yPercent: 0, duration: 3 }, '<')
  .to('.scene__4 > .gear__1', { rotate: -120, duration: 3 }, '<')
  .to('.scene__4 > .gear__2', { rotate: 120, duration: 3 }, '<')
  .to('.scene__4 > .gear__1', { y: '100vh', duration: 1 })
  .set(scene3, { autoAlpha: 0 }, '<')
  // gear 2
  .to('.scene__4 > .gear__2', { y: '200vh', duration: 2 }, '<')
  .to('.scene__4 > .gear__2', { x: '-100vw', duration: 6 }, '<')
  .to('.scene__4 > .gear__2', { rotate: 0, duration: 2 }, '<')
  // gear 3
  .fromTo(
    '.scene__4 > .gear__3',
    { y: '-100vh' },
    { y: '100vh', duration: 2.5 },
    '-=6'
  )
  .to('.scene__4 > .gear__3', { rotate: 180, duration: 3 }, '<')
  // gear 4
  .fromTo(
    '.scene__4 > .gear__4',
    { y: '-100vh' },
    { y: '100vh', duration: 2 },
    '-=6'
  )
  .to('.scene__4 > .gear__4', { rotate: -180, duration: 3 }, '<')

  // gear 5
  .fromTo(
    '.scene__4 > .gear__5',
    { y: '-120vh' },
    { y: '100vh', duration: 4 },
    '<'
  )
  .to('.scene__4 > .gear__5', { x: '65vw', duration: 4 }, '-=6')
  .to('.scene__4 > .gear__5', { rotate: 240, duration: 3 }, '<')

  // gear 6
  .fromTo(
    '.scene__4 > .gear__6',
    { y: '-200vh' },
    { y: '100vh', duration: 6 },
    '-=6'
  )
  .to('.scene__4 > .gear__6', { rotate: 90, duration: 3 }, '-=4.5')

  // gear 7
  .fromTo(
    '.scene__4 > .gear__7',
    { y: '-200vh' },
    { y: '100vh', duration: 2 },
    '-=3.5'
  )
  .to('.scene__4 > .gear__7', { rotate: 180, duration: 3 }, '<')

  // gear 8
  .fromTo(
    '.scene__4 > .gear__8',
    { y: '-210vh' },
    { y: '100vh', duration: 5 },
    '-=3.5'
  )
  .to('.scene__4 > .gear__8', { xPercent: 20, duration: 3 }, '-=4.5')
  .to('.scene__4 > .gear__8', { rotate: 180, duration: 3 }, '-=4.5')

  // gear 9
  .fromTo(
    '.scene__4 > .gear__9',
    { y: '-200vh' },
    { y: '100vh', duration: 5 },
    '-=5.5'
  )
  .to('.scene__4 > .gear__9', { rotate: 180, duration: 3 }, '-=5')

  .fromTo(
    '.scene__4 .closing',
    { y: '-200vh' },
    { y: '0vh', duration: 5 },
    '-=3'
  )
  .fromTo(
    '.scene__4 .description > *',
    {
      x: (index) => (index === 0 ? '-100vw' : '100vw'),
      autoAlpha: 0,
    },
    {
      x: 0,
      duration: 5,
      autoAlpha: 1,
      stagger: 0.5,
    },
    '<'
  )
  .to('.scene__4 .closing .gear', { rotate: -90, duration: 5 }, '<')
  .set(letterI, { autoAlpha: 0 })
  .to('.scene__4 .closing', { y: '280vh', duration: 5 })
  .to('.scene__4 .closing .gear', { rotate: -180, duration: 5 }, '<')
  .to('.animation-container', { backgroundColor: '#f5e400', duration: 3 }, '<')
  .to(
    '.hamburger-menu > .line',
    { backgroundColor: '#0000e0', duration: 3 },
    '<'
  )
  .set(scene1, { display: 'none' })
  .set(scene2, { display: 'none' })
  .set(scene3, { display: 'none' })
  .set(scene4, { display: 'none' })
  .fromTo(
    '.scene__5',
    { autoAlpha: 0, yPercent: -40 },
    { autoAlpha: 1, yPercent: 0, duration: 3 },
    '-=2'
  );

pulseCircles();
