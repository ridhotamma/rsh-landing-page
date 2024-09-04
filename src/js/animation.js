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
    end: '+=9000',
    anticipatePin: true,
  },
});

tl.set(scene2, { autoAlpha: 0 });
tl.set(scene3, { autoAlpha: 0 });

// scene 1
tl.fromTo(
  logo,
  { xPercent: -50, yPercent: -50, left: '50%', top: '50%' },
  {
    duration: 3,
    xPercent: 0,
    yPercent: 0,
    left: '2%',
    top: '2%',
    ease: 'power4.inOut',
  }
)
  .fromTo(
    scene1,
    {
      y: '70%',
    },
    {
      y: '0%',
      duration: 3,
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(letterI, {
    scaleY: 5,
    transformOrigin: 'bottom',
    duration: 3,
    ease: 'power4.inOut',
  })
  .to(scene1, {
    y: '10%',
    duration: 3,
    ease: 'power4.inOut',
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
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(scene1, { y: '40%', duration: 3, ease: 'power4.inOut' })
  .to(
    letterI,
    {
      scaleY: 8,
      duration: 3,
      ease: 'power4.inOut',
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
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(scene1, { y: '50%', duration: 3, ease: 'power4.inOut' })
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
      ease: 'power4.inOut',
    },
    '<'
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
      ease: 'power4.inOut',
    },
    '<'
  )
  .to(scene1, { yPercent: 100, duration: 3, ease: 'power4.inOut' })
  .to(letterI, { scaleY: 8, duration: 3, ease: 'power4.inOut' }, '<')
  .set(chevronUp, { autoAlpha: 0 });

// Scene 2
tl.to(scene2, { autoAlpha: 1 })
  .to(logo, { autoAlpha: 0, duration: 3 }, '<')
  .fromTo(
    s2Circles,
    {
      x: (index) => (index % 2 === 0 ? '-100%' : '100%'),
    },
    {
      x: '0%',
      duration: 3,
      stagger: 0.2,
      ease: 'power4.inOut',
    }
  )
  .fromTo(
    s2Text1,
    { xPercent: -100, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1, duration: 3, ease: 'power4.inOut' },
    '<'
  )
  .fromTo(
    s2Text2,
    { xPercent: 100, autoAlpha: 0 },
    { xPercent: 0, autoAlpha: 1, duration: 3, ease: 'power4.inOut' },
    '<'
  )
  .fromTo(
    s2Text3,
    { yPercent: -100, autoAlpha: 0 },
    { yPercent: 0, autoAlpha: 1, duration: 3, ease: 'power4.inOut' },
    '-=1.5'
  )
  .fromTo(
    s2Text4,
    { yPercent: -100, autoAlpha: 0 },
    { yPercent: 0, autoAlpha: 1, duration: 3, ease: 'power4.inOut' },
    '-=1.5'
  )
  .to(body, { backgroundColor: '#11f3f3', duration: 6, ease: 'power4.inOut' })
  .to(s2OuterCircles, { autoAlpha: 1, duration: 5, ease: 'power4.inOut' }, '<')
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
  .to(body, { backgroundColor: '#f5e400', duration: 3 })

  .from('.scene__3 .circles .circle__random:nth-child(1)', {
    xPercent: 100,
    duration: 3,
    margin: 0,
  })
  .from(
    '.scene__3 .circles .circle__random:nth-child(2)',
    {
      xPercent: -100,
      duration: 3,
      margin: 0,
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
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(5)',
    {
      yPercent: 100,
      duration: 3,
      margin: 0,
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(6)',
    {
      xPercent: -100,
      duration: 3,
      margin: 0,
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(7)',
    {
      xPercent: -100,
      duration: 3,
      margin: 0,
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(8)',
    {
      yPercent: -100,
      duration: 3,
      margin: 0,
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
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(10)',
    {
      yPercent: -100,
      duration: 3,
      margin: 0,
    },
    '<'
  )
  .from(
    '.scene__3 .circles .circle__random:nth-child(11)',
    {
      yPercent: -100,
      duration: 3,
      margin: 0,
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
    { y: '-100vh', duration: 3 },
    '<'
  )
  .to(
    '.scene__3 .circles .circle__random:nth-child(5)',
    {
      xPercent: -60,
      duration: 2,
    },
    '<'
  )
  .to(
    [
      '.scene__3 .circles .circle__random:nth-child(2)',
      '.scene__3 .circles .circle__random:nth-child(5)',
      '.scene__3 .circles .circle__random:nth-child(6)',
    ],
    { scale: 0.4, backgroundColor: '#f749d4', duration: 3 },
    '<'
  )
  .to(
    [
      '.scene__3 .circles .circle__random:nth-child(8)',
      '.scene__3 .circles .circle__random:nth-child(11)',
    ],
    { yPercent: -100, xPercent: -100, backgroundColor: '#f749d4', duration: 3 },
    '<'
  )
  .to(
    letterI,
    {
      x: '50vw',
      duration: 3,
    },
    '<'
  )
  .to(
    letterI,
    {
      scaleX: 5,
      duration: 3,
    },
    '<'
  )
  .to(body, { backgroundColor: '#0000e0', duration: 3 }, '<')
  .from(
    '.scene__3 .description > *',
    { x: '100vw', duration: 3, autoAlpha: 0, stagger: 0.5 },
    '<'
  )
  .fromTo(
    '.circles-vertical__inner',
    { x: '-20vw' },
    { x: '10vw', duration: 3 },
    '<'
  )
  // CIRCLE FORM VERTICAL
  .set('.circle__replace', { autoAlpha: 1 }, '<')
  .from(
    '.circle__fixed',
    {
      x: (index) => (index % 2 === 0 ? 100 : -100),
      duration: 3,
    },
    '<'
  )
  .from(
    '.circle__replace--1',
    {
      xPercent: 225,
      yPercent: -1,
      width: '28vw',
      height: '28vw',
      duration: 3,
    },
    '<'
  )

  .from(
    '.circle__replace--2',
    {
      xPercent: 225,
      yPercent: 90,
      width: '28vw',
      height: '28vw',
      duration: 3,
    },
    '<'
  )
  .from(
    '.circle__replace--3',
    {
      xPercent: 118,
      yPercent: -30,
      width: '28vw',
      height: '28vw',
      duration: 3,
    },
    '<'
  )
  .from(
    '.circle__replace--4',
    {
      xPercent: 118,
      yPercent: -151,
      width: '28vw',
      height: '28vw',
      duration: 3,
    },
    '<'
  )

  .from(
    '.circle__replace--5',
    {
      xPercent: 332,
      yPercent: -59,
      width: '28vw',
      height: '28vw',
      duration: 3,
    },
    '<'
  )

  .from(
    '.circle__replace--6',
    {
      xPercent: 332,
      yPercent: 34,
      width: '28vw',
      height: '28vw',
      duration: 3,
    },
    '<'
  )

  .from(
    '.circle__replace--7',
    {
      xPercent: 11,
      yPercent: -195,
      width: '28vw',
      height: '28vw',
      duration: 3,
    },
    '<'
  );
