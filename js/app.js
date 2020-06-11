// Application
class APP {
  constructor() {
    this.currentPage = 1;
    this.animationTime = 2;
  }

  // MESSAGES
  animateMessages() {}

  // INTRO
  animateIntro() {
    let tl = gsap.timeline({
      defaults: {
        ease: "easeInOut"
      }
    });
    // tl.to('.noise', {
    //   duration: .5,
    //   width: '100vw',
    //   height: '5vh'
    // });
    // tl.to('.noise', {
    //   duration: .5,
    //   borderRadius: 0,
    //   height: '10vh'
    // })
    // tl.to('.noise', {
    //   duration: .5,
    //   height: '100vh'
    // })
    tl.to('.channel-number', {
      duration: 0,
      opacity: 1
    }, '+=.5')
    // delay before channel change
    tl.to('.channel-number', {
      duration: 1,
      onComplete: () => {
        let it = $('.channel-number').text('AV1');
      }
    }, 'textAppears')
    tl.to('.noise', {
      duration: .1,
      opacity: .1,
    });
    tl.to('.page1', {
      duration: .5,
      opacity: 1
    }, '+=.5')
    tl.from('.page1 .name', {
      duration: 2,
      x: -20,
      transform: 'skewX(-5deg)',
    }, '<');
    tl.from('.page1 img', {
      duration: 2,
      x: -40,
    }, '<');
    tl.from('.page1 .text .titles', {
      duration: 2,
      opacity: 0,
    });
    tl.set('.channel-number', {
      opacity: 0
    }, 'textAppears+=3');
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
      $('.page1').css({
        display: "block"
      })
      tl.to('.page1', {
        duration: .5,
        opacity: 1
      })
      tl.from('.page1 .name', {
        duration: 2,
        x: -20,
        transform: 'skewX(-5deg)',
        ease: "power2.out"
      }, '<');
      tl.from('.page1 img', {
        duration: 2,
        x: -50,
        ease: "power2.out"
      }, '<');
      tl.to('.page1 .text .titles', {
        duration: 2,
        opacity: 1,
        ease: "power2.out"
      });
    }
    if (this.currentPage > 1) {
      //PAGE 2
      if (this.currentPage == 2) {

        // timer for mouseover
        setTimeout(mouseover, 7000)

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

        let tl = gsap.timeline();
        // hide other pages
        tl.to('.page1, .page3', {
          duration: .5,
          opacity: 0,
          onComplete: () => {
            $('.page1, .page3').css({
              display: "none"
            })
          }
        });
        // show page 2
        $('.page2').css({
          display: "block"
        })
        tl.to('.page2', {
          duration: .5,
          opacity: 1
        });
        tl.to('.page2 .bg', {
          duration: 1,
          opacity: .5
        }, '+=5');
        tl.to('.page2 .credit', {
          duration: 1,
          opacity: .5,
        }, '<');
      };

      // PAGE 3
      if (this.currentPage == 3) {
        let tl = gsap.timeline();
        tl.to('.noise', {
          duration: .1,
          opacity: 1,
          width: '100vw',
          height: '100vh',
        });
        tl.set('.page1, .page2', {
          opacity: 0,
          onComplete: () => {
            $('.page1, .page2').css({
              display: "none"
            })
          }
        });
        tl.to('.channel-number', {
          duration: 0,
          opacity: 1
        }, '<')
        tl.to('.channel-number', {
          duration: 1,
          onComplete: () => {
            let it = $('.channel-number').text('AV2');
          }
        }, 'textAppears')
        tl.to('.page2, .page1', {
          duration: .5,
          opacity: 0,
        });
        tl.to('.noise', {
          duration: .1,
          opacity: .1,
        }, '<');
        $('.page3').css({
          display: "block"
        })
        tl.to('.page3', {
          duration: .5,
          opacity: 1
        });
        tl.to('.page3 .text', {
          duration: 1,
          opacity: 1
        }, '+=1')
        tl.to('.video-preview1, .video-preview2', {
          duration: 2,
          opacity: 1,
          stagger: .5
        }, '+=1')
        tl.to('.video-preview1, .video-preview2', {
          duration: 5,
          transform: "rotate(0deg)",
          ease: "elastic.out(1, 0.3)",
          stagger: .5
        }, '<');
        tl.set('.channel-number', {
          opacity: 0,
          onComplete: () => {
            let it = $('.channel-number').text('AV1');
          }
        }, 'textAppears+=3');
      };
    }
  }
}


function initializeApp() {
  let wheelTimeOut = 1500;
  let introDelay = 500;

  app = new APP();

  // trigger animations
  setTimeout(app.animateIntro, introDelay)

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