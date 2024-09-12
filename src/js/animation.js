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
    onEnter: () => {
      tl.tweenFromTo(0, 'autoScroll').then(() => {
        document.body.style.overflow = 'auto';
        gsap.to(logo, { autoAlpha: 1, duration: 3, ease: 'power4.inOut' });
        playBounce();
      });

      gsap.set('.loading-container', { autoAlpha: 0, delay: 1 });
      gsap.set(scene1, { autoAlpha: 1 });
    },
  },
});

gsap.set(scene1, { autoAlpha: 0 });
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

let chevronUpAnimation = gsap.fromTo(
  chevronUp,
  { y: 0 },
  {
    y: -50,
    duration: 0.5,
    ease: 'power3.inOut',
    repeat: -1,
    yoyo: true,
    paused: true,
  }
);

function playBounce() {
  chevronUpAnimation.play();
}

function stopBounce() {
  chevronUpAnimation.pause();
}

// scene 1
// start auto scroll
tl.fromTo(
  scene1,
  {
    y: '120dvh',
  },
  {
    y: '0dvh',
    duration: 3,
    delay: 1,
  }
)
  .to(letterI, {
    scaleY: isMobile || isTablet ? 12 : 4,
    transformOrigin: 'bottom',
    duration: 3,
    ease: 'power4.inOut',
  })
  .to(scene1, {
    y: '18dvh',
    duration: 3,
    ease: 'power4.inOut',
  })
  .fromTo(
    intro1,
    {
      autoAlpha: 0,
      y: '50dvh',
    },
    {
      y: 0,
      duration: 3,
      autoAlpha: 1,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(scene1, { y: '30dvh', duration: 3, ease: 'power4.inOut' })
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
      y: '50dvh',
    },
    {
      y: 0,
      duration: 3,
      autoAlpha: 1,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(scene1, {
    y: '55dvh',
    duration: 3,
    ease: 'power4.inOut',
  })
  .fromTo(
    chevronUp,
    {
      y: '100dvh',
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
      y: '50dvh',
    },
    {
      y: 0,
      duration: 3,
      autoAlpha: 1,
      ease: 'power4.inOut',
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
  .add('autoScroll');
// end auto scroll

tl.fromTo(
  scene1,
  { y: '55dvh' },
  {
    y: '200dvh',
    duration: 3,
    ease: 'power4.inOut',
    onStart: () => {
      stopBounce();
    },
  }
)
  .fromTo(
    chevronUp,
    { y: '0dvh' },
    { y: '-100dvh', duration: 3, ease: 'power4.inOut' },
    '<'
  )
  // .to('.logo > svg > path', { fill: 'white', duration: 3 }, '<')
  .fromTo(
    chevronArrow,
    {
      yPercent: 0,
      autoAlpha: 1,
    },
    {
      yPercent: 120,
      autoAlpha: 0,
      duration: 3,
      ease: 'power4.inOut',
      stagger: {
        each: 0.2,
        from: 'end',
      },
    },
    '<'
  )
  .to('.theme-changer', { autoAlpha: 0, duration: 3 }, '-=1');
// .to(
//   letterI,
//   {
//     scaleY: isMobile || isTablet ? 32 : 12,
//     duration: 3,
//     ease: 'power4.inOut',
//   },
//   '<'
// )

// Scene 2
tl.fromTo(
  scene2,
  { y: '-150dvh', autoAlpha: 1 },
  { y: '0dvh', autoAlpha: 1, duration: 5 },
  '-=5'
)
  .to(
    '.animation-container',
    { backgroundColor: '#0000e0', duration: 3, ease: 'power4.inOut' },
    '<'
  )
  .to(
    letterI,
    { backgroundColor: '#f749d4', duration: 3, ease: 'power4.inOut' },
    '<'
  )
  .to(
    '#intro-title',
    { color: '#f749d4', duration: 3, ease: 'power4.inOut' },
    '<'
  )
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
    { yPercent: -100 },
    { yPercent: 0, duration: 5, ease: 'power4.inOut' },
    '<'
  )
  .fromTo(
    [s2Text2, s2Text3, s2Text4],
    { xPercent: -100 },
    {
      xPercent: 0,
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
  // .to(s2OuterCircles, { yPercent: 100, duration: 6, ease: 'power4.inOut' }, '<')
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
      height: 0,
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
      y: '100dvh',
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
      y: '-100dvh',
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
    { y: '-100dvh', duration: 3, ease: 'power4.inOut' },
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
      y: '-100dvh',
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
      x: '50dvw',
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
      x: '100dvw',
      duration: 5,
      autoAlpha: 0,
      stagger: 0.5,
      ease: 'power4.inOut',
    },
    '<'
  )
  .fromTo(
    '.circles-vertical__inner',
    { x: isMobile || isTablet ? '-40dvw' : '-20dvw' },
    {
      x: isMobile || isTablet ? '3dvw' : '10dvw',
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
      width: isMobile || isTablet ? '38dvw' : '28dvw',
      height: isMobile || isTablet ? '38dvw' : '28dvw',
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
      width: isMobile || isTablet ? '38dvw' : '28dvw',
      height: isMobile || isTablet ? '38dvw' : '28dvw',
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
      width: isMobile || isTablet ? '38dvw' : '28dvw',
      height: isMobile || isTablet ? '38dvw' : '28dvw',
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
      width: isMobile || isTablet ? '38dvw' : '28dvw',
      height: isMobile || isTablet ? '38dvw' : '28dvw',
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
      width: isMobile || isTablet ? '38dvw' : '28dvw',
      height: isMobile || isTablet ? '38dvw' : '28dvw',
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
      width: isMobile || isTablet ? '38dvw' : '28dvw',
      height: isMobile || isTablet ? '38dvw' : '28dvw',
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
      width: isMobile || isTablet ? '38dvw' : '28dvw',
      height: isMobile || isTablet ? '38dvw' : '28dvw',
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
      y: '100dvh',
      duration: 3,
    },
    '<'
  )
  .to('.circles-vertical__inner', { y: '-50dvh', duration: 3 }, '<')
  .to(
    '.animation-container',
    { backgroundColor: '#11f3f3', duration: 3, ease: 'power4.inOut' },
    '<'
  )
  .to('.circles-vertical__inner', {
    y: '100dvh',
    duration: 3,
  })
  // .fromTo(logo, { autoAlpha: 1 }, { autoAlpha: 0, duration: 1 }, '<')
  .set(scene4, { autoAlpha: 1 }, '<')
  .fromTo('.scene__4', { yPercent: -150 }, { yPercent: 0, duration: 3 }, '<')
  .to('.scene__4 > .gear__1', { rotate: -120, duration: 3 }, '<')
  .to('.scene__4 > .gear__2', { rotate: 120, duration: 3 }, '<')
  .to('.scene__4 > .gear__1', { y: '100dvh', duration: 1 })
  .set(scene3, { autoAlpha: 0 }, '<')
  // gear 2
  .to('.scene__4 > .gear__2', { y: '200dvh', duration: 2 }, '<')
  .to('.scene__4 > .gear__2', { x: '-100dvw', duration: 6 }, '<')
  .to('.scene__4 > .gear__2', { rotate: 0, duration: 2 }, '<')
  // gear 3
  .fromTo(
    '.scene__4 > .gear__3',
    { y: '-100dvh' },
    { y: '100dvh', duration: 2.5 },
    '-=6'
  )
  .to('.scene__4 > .gear__3', { rotate: 180, duration: 3 }, '<')
  // gear 4
  .fromTo(
    '.scene__4 > .gear__4',
    { y: '-100dvh' },
    { y: '100dvh', duration: 2 },
    '-=6'
  )
  .to('.scene__4 > .gear__4', { rotate: -180, duration: 3 }, '<')

  // gear 5
  .fromTo(
    '.scene__4 > .gear__5',
    { y: '-120dvh' },
    { y: '100dvh', duration: 4 },
    '<'
  )
  .to('.scene__4 > .gear__5', { x: '65dvw', duration: 4 }, '-=6')
  .to('.scene__4 > .gear__5', { rotate: 240, duration: 3 }, '<')

  // gear 6
  .fromTo(
    '.scene__4 > .gear__6',
    { y: '-200dvh' },
    { y: '100dvh', duration: 6 },
    '-=6'
  )
  .to('.scene__4 > .gear__6', { rotate: 90, duration: 3 }, '-=4.5')

  // gear 7
  .fromTo(
    '.scene__4 > .gear__7',
    { y: '-200dvh' },
    { y: '100dvh', duration: 2 },
    '-=3.5'
  )
  .to('.scene__4 > .gear__7', { rotate: 180, duration: 3 }, '<')

  // gear 8
  .fromTo(
    '.scene__4 > .gear__8',
    { y: '-210dvh' },
    { y: '100dvh', duration: 5 },
    '-=3.5'
  )
  .to('.scene__4 > .gear__8', { xPercent: 20, duration: 3 }, '-=4.5')
  .to('.scene__4 > .gear__8', { rotate: 180, duration: 3 }, '-=4.5')

  // gear 9
  .fromTo(
    '.scene__4 > .gear__9',
    { y: '-200dvh' },
    { y: '100dvh', duration: 5 },
    '-=5.5'
  )
  .to('.scene__4 > .gear__9', { rotate: 180, duration: 3 }, '-=5')
  .fromTo(
    '.scene__4 .closing',
    { y: '-200dvh' },
    { y: '0dvh', duration: 5 },
    '-=3'
  )
  .fromTo(
    '.scene__4 .description > *',
    {
      x: (index) => (index === 0 ? '-100dvw' : '100dvw'),
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
  // .to(logo, { autoAlpha: 1, duration: 1 }, '<')
  .to('.scene__4 .closing .gear', { rotate: -90, duration: 5 }, '<')
  .set(letterI, { autoAlpha: 0 })
  .to('.scene__4 .closing', { y: '280dvh', duration: 5 })
  .to('.scene__4 .closing .gear', { rotate: -180, duration: 5 }, '<')
  .to('.animation-container', { backgroundColor: '#f5e400', duration: 3 }, '<')
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

document.addEventListener('DOMContentLoaded', () => {
  ScrollTrigger.refresh();
  pulseCircles();
  document.body.style.overflow = 'hidden';
  gsap.to(window, {
    scrollTo: { y: 5000 },
  });
});
