// document.addEventListener('wheel', (listenToWheel));

// function listenToWheel(e) {
//   if (e.deltaY > 0) {
//     document.removeEventListener('wheel', (listenToWheel));
//     console.log('Scrolled down');
//     setTimeout(() => {
//       document.addEventListener('wheel', (listenToWheel));
//     }, 2000)
//   } else if (e.deltaY < 0) {
//     document.removeEventListener('wheel', (listenToWheel));
//     console.log('Scrolled up');
//     setTimeout(() => {
//       document.addEventListener('wheel', (listenToWheel));
//     }, 2000)
//   }
// }

// // parallax setup
// var scene = document.getElementById('scene');
// var parallaxInstance = new Parallax(scene, {
//   // relativeInput: true,
//   // hoverOnly: true
// });

// fullpage setup
// new fullpage('#fullPage', {
//   navigation: true,
//   onLeave: function (origin, desination, direction) {
//     var leavingSection = this;
//     console.log(leavingSection);


//     // animations for the second section (first scroll)
//     if (leavingSection.isFirst == true) {
//       gsap.to('.page2 .bg', {
//         duration: 2,
//         delay: 2,
//         opacity: .25,
//         ease: "power2.out"
//       });
//       gsap.to('.credit', {
//         duration: 2,
//         delay: 2,
//         opacity: 1,
//         ease: "power2.out"
//       });
//       setTimeout(() => {
//         document.addEventListener('mouseover', (e) => {
//           if (e.target.parentElement.classList.contains('credit')) {
//             gsap.to('.page2 .bg', {
//               duration: 2,
//               opacity: 1,
//               ease: "power2.out"
//             });
//             gsap.to('.page2 .text', {
//               duration: 2,
//               opacity: .25,
//               ease: "power2.out"
//             });
//           } else {
//             gsap.to('.page2 .bg', {
//               duration: 2,
//               opacity: .25,
//               ease: "power2.out"
//             });
//             gsap.to('.page2 .text', {
//               duration: 2,
//               opacity: 1,
//               ease: "power2.out"
//             });
//           }
//         })
//       }, 4000);

//     } else {
//       // animations for any other section
//       if (leavingSection.index == 1) {
//         console.log('here');
//         gsap.to('.page3 .text', {
//           delay: .5,
//           duration: 2,
//           opacity: 1,
//           ease: "power2.out"
//         });
//         gsap.to('.page3 .bg', {
//           delay: 2,
//           duration: 3,
//           height: "100vh",
//           // ease: "power2.out"
//         });
//       }
//     };
//   }
// })


// GSAP animations
// gsap.from('#gc-half', {
//   duration: 2,
//   x: 20,
//   filter: 'blur(2px)',
//   ease: "power2.out"
// });
// gsap.from('.page1 .text .name', {
//   duration: 2,
//   x: -10,
//   ease: "power2.out"
// });
// gsap.from('.page1 .text .titles', {
//   duration: 2,
//   delay: 1,
//   opacity: 0,
//   ease: "power2.out"
// })

// Application
class APP {
  constructor() {
    this.currentPage = 1;
    this.animationTime = 2;
  }

  // MESSAGES
  animateMessages() {

  }

  // PAGE 1
  animatePage1() {
    let tl = gsap.timeline();
    tl.to('.noise', {
      duration: .5,
      width: '100vw',
      height: '5vh',
    });
    tl.to('.noise', {
      duration: .5,
      borderRadius: 0,
      height: '10vh',
      ease: "easeInOut"
    })
    tl.to('.noise', {
      duration: .2,
      height: '100vh',
      ease: "easeInOut"
    })
    tl.to('.channel-number', {
      duration: 0,
      opacity: 1
    }, '+=.5')
    tl.to('.channel-number', {
      duration: 1.5,
      onComplete: () => {
        let it = $('.channel-number').text('AV1');
      }
    })
    tl.to('.noise', {
      duration: .1,
      opacity: .05,
    }, '>');
    tl.to('.page1', {
      delay: .5,
      duration: 2,
      opacity: 1
    })
    tl.from('.page1 .text', {
      duration: 2,
      x: -20,
      transform: 'skewX(-10deg)',
      ease: "power2.out"
    }, '<');
    tl.from('.page1 img', {
      duration: 2,
      x: -40,
      ease: "power2.out"
    }, '<');
    tl.from('.page1 .text .titles', {
      delay: .5,
      duration: 2,
      opacity: 0,
      ease: "power2.out"
    });
    tl.to('.channel-number', {
      duration: 0,
      opacity: 0
    }, '-=1.5');    
  };

  animatePages() {
    // PAGE 1
    if (this.currentPage == 1) {
      let tl = gsap.timeline();
      tl.to('.page2, .page3', {
        duration: .5,
        opacity: 0,
        onComplete: () => {
          $('.page2, .page3').css({
            display: "none"
          })
        }
      });
      $('.bit-announcement').text('<<');
      tl.to('.bit-announcement', {
        duration: 0,
        opacity: 1          
      }, '-=.5')
      tl.to('.bit-announcement', {
        delay: 2,
        duration: 0,
        opacity: 0          
      })
      $('.page1').css({
        display: "block"
      })
      tl.to('.page1', {
        duration: .4,
        opacity: 1
      }, '-=2')
      tl.from('.page1 .name', {
        duration: 2,
        x: -20,
        transform: 'skewX(-10deg)',
        ease: "power2.out"
      }, '<');
      tl.from('.page1 img', {
        duration: 2,
        x: -50,
        ease: "power2.out"
      }, '-=2');
      tl.to('.page1 .text .titles', {
        delay: .5,
        duration: 2,
        opacity: 1,
        ease: "power2.out"
      });
    }
    if (this.currentPage > 1) {

      // timer for mouseover
      setTimeout(mouseover, 4000)

      function mouseover() {
        document.addEventListener('mouseover', (e) => {
          if (e.target.parentElement.classList.contains('credit')) {
            gsap.to('.page2 .bg, .page2 .credit', {
              duration: 1,
              opacity: 1
            });
            gsap.to('.page2 .announcement', {
              duration: 1,
              opacity: .30
            });
          } else {
            gsap.to('.page2 .bg', {
              duration: 1,
              opacity: .5
            });
            gsap.to('.page2 .credit', {
              duration: 1,
              opacity: .5
            });
            gsap.to('.page2 .announcement', {
              duration: 1,
              opacity: 1
            });
          }
        })
      }

      //PAGE 2
      if (this.currentPage == 2) {
        let tl = gsap.timeline();
        tl.to('.page1, .page3', {
          duration: .5,
          opacity: 0,
          onComplete: () => {
            $('.page1, .page3').css({
              display: "none"
            })
          }
        });
        $('.bit-announcement').text('>>');
        tl.to('.bit-announcement', {
          duration: 0,
          opacity: 1          
        }, '-=.5')
        tl.to('.bit-announcement', {
          delay: 2,
          duration: 0,
          opacity: 0          
        })
        $('.page2').css({
          display: "block"
        })
        tl.to('.page2', {
          duration: .4,
          opacity: 1
        }, '-=2');
        tl.to('.page2 .bg', {
          delay: 4,
          duration: 1,
          opacity: .5
        });
        tl.to('.page2 .credit', {
          duration: 2,
          opacity: .5,
        }, '<');
      };
      if (this.currentPage == 3) {
        let tl = gsap.timeline();

        tl.to('.page2', {
          duration: .5,
          opacity: 0,
          onComplete: () => {
            $('.page2').css({
              display: "none"
            })
          }
        });
        $('.page3').css({
          display: "block"
        })
        tl.to('.page3', {
          duration: .4,
          opacity: 1
        });
        tl.to('.page2 .bg', {
          delay: 4,
          duration: 1,
          opacity: .5
        });
      };
    }
  }
}


function initializeApp() {
  let wheelTimeOut = 1500;
  let initialShowTimeOut = 750;

  app = new APP();

  // trigger animations
  setTimeout(app.animatePage1, initialShowTimeOut)

  // wheel listener
  document.addEventListener('wheel', (listenToWheel));

  function listenToWheel(e) {
    if (e.deltaY > 0) {
      document.removeEventListener('wheel', (listenToWheel));
      console.log('Scrolled down');
      app.currentPage++
      app.animatePages();
      console.log(app.currentPage);
      setTimeout(() => {
        document.addEventListener('wheel', (listenToWheel));
      }, wheelTimeOut)
    } else if (e.deltaY < 0) {
      document.removeEventListener('wheel', (listenToWheel));
      console.log('Scrolled up');
      if (app.currentPage > 1) {
        app.currentPage--;
        app.animatePages();
      }
      console.log(app.currentPage);
      setTimeout(() => {
        document.addEventListener('wheel', (listenToWheel));
      }, wheelTimeOut)
    }
  }
}

// On content loaded...
document.addEventListener('DOMContentLoaded', initializeApp())