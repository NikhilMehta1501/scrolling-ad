// $(document).ready(function() {
//   $(".owl-carousel").owlCarousel();
// });

// $('.owl-carousel').owlCarousel({
//   loop: true,
//   items: 1,
//   margin: 10,
//   autoplay: true,
//   autoplayTimeout: 2500,
//   autoplayHoverPause: true,
// })

var dots = [
  1000,
  860,
  720,
  610,
  470,
  330,
  0
];

$(function() { // wait for document ready

  var controller = new ScrollMagic.Controller();

  var slidesRight = document.getElementsByClassName("slide-right");
  for (var i = 0; i < slidesRight.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slidesRight[i],
        triggerHook: 'onLeave'
      })
      .setClassToggle(`.slide` + (i + 1) + `.slide-right`, "show")
      .setPin(slidesRight[i])
      .addTo(controller);
  };

  var slidesLeft = document.getElementsByClassName("slide-left");
  for (var i = 0; i < slidesLeft.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slidesLeft[i],
        triggerHook: 'onLeave'
      })
      .setClassToggle(`.slide` + (i + 1) + `.slide-left`, "show")
      .setPin(slidesLeft[i])
      .addTo(controller);
  };

  for (var i = 0; i < slidesLeft.length; i++) {
    new ScrollMagic.Scene({
        triggerElement: slidesLeft[i],
        triggerHook: 'onLeave'
      })
      .setClassToggle(".svg-bg", `svg-bg-` + (i + 1))
      .addTo(controller);
  };

  for (var i = 0; i < slidesLeft.length; i++) {
    var scroll = new ScrollMagic.Scene({
        triggerElement: slidesLeft[i],
        triggerHook: 0,
        offset: 0
      })
      .setTween(new TimelineMax()
        .fromTo(".transrgwht", 1, {
          strokeDashoffset: dots[i - 1]
        }, {
          strokeDashoffset: dots[i],
          ease: Power3.easeInOut
        })
      )
      .setClassToggle(`.dot-unfill` + (i + 1), "dot-fill")
      .addTo(controller);
  }

  for (var i = 0; i < slidesLeft.length; i++) {
    var text = new ScrollMagic.Scene({
        triggerElement: slidesLeft[i],
        triggerHook: 0,
        offset: 0
      })
      .setTween(new TimelineMax()
        .set(`.inactive` + (i + 1), {
          opacity: 0,
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50% -50px",
          transformPerspective: 1000
        })
        .fromTo(`.inactive` + (i + 1), 0.5, {
          rotateX: (90),
          opacity: 0,
          ease: Linear.easeNone
        }, {
          rotateX: (0),
          opacity: 1,
          ease: Linear.easeNone
        }, 1)
        .to(`.inactive` + i, 0.5, {
          rotateX: (-90),
          opacity: 0,
          ease: Linear.easeNone
        }, "+1")
      )
      .addTo(controller);
  }

  var slide1Pic1On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[0],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide1-pic1-desktop", {
        opacity: 0,
      })
      .fromTo("#slide1-pic1-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide1Pic1Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[0],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide1-pic1-desktop", {
        opacity: 1,
      })

      .to("#slide1-pic1-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide1Pic2On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[0],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide1-pic2-desktop", {
        opacity: 0,
      })
      .fromTo("#slide1-pic2-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide1Pic2Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[0],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide1-pic2-desktop", {
        opacity: 1,
      })

      .to("#slide1-pic2-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide2Pic1On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[1],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide2-pic1-desktop", {
        opacity: 0,
      })
      .fromTo("#slide2-pic1-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide2Pic1Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[1],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide2-pic1-desktop", {
        opacity: 1,
      })

      .to("#slide2-pic1-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide2Pic2On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[1],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide2-pic2-desktop", {
        opacity: 0,
      })
      .fromTo("#slide2-pic2-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide2Pic2Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[1],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide2-pic2-desktop", {
        opacity: 1,
      })

      .to("#slide2-pic2-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide3Pic1On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic1-desktop", {
        opacity: 0,
      })
      .fromTo("#slide3-pic1-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide3Pic1Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic1-desktop", {
        opacity: 1,
      })

      .to("#slide3-pic1-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide3Pic2On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic2-desktop", {
        opacity: 0,
      })
      .fromTo("#slide3-pic2-desktop", 0.5, {
        x: -100,
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide3Pic2Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic2-desktop", {
        opacity: 1,
      })

      .to("#slide3-pic2-desktop", 0.5, {
        x: -100,
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide3Pic3On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic3-desktop", {
        opacity: 0,
      })
      .fromTo("#slide3-pic3-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide3Pic3Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic3-desktop", {
        opacity: 1,
      })

      .to("#slide3-pic3-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide3Pic4On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic4-desktop", {
        opacity: 0,
      })
      .fromTo("#slide3-pic4-desktop", 0.5, {
        x: 100,
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide3Pic4Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic4-desktop", {
        opacity: 1,
      })

      .to("#slide3-pic4-desktop", 0.5, {
        x: 100,
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide3Pic5On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic5-desktop", {
        opacity: 0,
      })
      .fromTo("#slide3-pic5-desktop", 0.5, {
        x: 100,
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide3Pic5Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[2],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide3-pic5-desktop", {
        opacity: 1,
      })

      .to("#slide3-pic5-desktop", 0.5, {
        x: 100,
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide4Pic1On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[3],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide4-pic1-desktop", {
        opacity: 0,
      })
      .fromTo("#slide4-pic1-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide4Pic1Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[3],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide4-pic1-desktop", {
        opacity: 1,
      })

      .to("#slide4-pic1-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide4Pic2On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[3],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide4-pic2-desktop", {
        opacity: 0,
      })
      .fromTo("#slide4-pic2-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide4Pic2Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[3],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide4-pic2-desktop", {
        opacity: 1,
      })

      .to("#slide4-pic2-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);


  var slide5Pic13On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[4],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set(["#slide5-pic1-desktop", "#slide5-pic3-desktop"], {
        opacity: 0,
      })
      .fromTo(["#slide5-pic1-desktop", "#slide5-pic3-desktop"], 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide5Pic13Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[4],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set(["#slide5-pic1-desktop", "#slide5-pic3-desktop"], {
        opacity: 1,
      })

      .to(["#slide5-pic1-desktop", "#slide5-pic3-desktop"], 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);


  var slide5Pic25On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[4],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set(["#slide5-pic2-desktop", "#slide5-pic5-desktop"], {
        opacity: 0,
      })
      .fromTo(["#slide5-pic2-desktop", "#slide5-pic5-desktop"], 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide5Pic25Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[4],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set(["#slide5-pic2-desktop", "#slide5-pic5-desktop"], {
        opacity: 1,
      })

      .to(["#slide5-pic2-desktop", "#slide5-pic5-desktop"], 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide5Pic4On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[4],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide5-pic4-desktop", {
        opacity: 0,
      })
      .fromTo("#slide5-pic4-desktop", 0.5, {
        x: 100,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        x: 0,
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide5Pic4Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[4],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide5-pic4-desktop", {
        opacity: 1,
      })

      .to("#slide5-pic4-desktop", 0.5, {
        x: 100,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide6Pic1On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[5],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide6-pic1-desktop", {
        opacity: 0,
      })
      .fromTo("#slide6-pic1-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide6Pic1Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[5],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide6-pic1-desktop", {
        opacity: 1,
      })

      .to("#slide6-pic1-desktop", 0.5, {
        y: -200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide6Pic2On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[5],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set("#slide6-pic2-desktop", {
        opacity: 0,
      })
      .fromTo("#slide6-pic2-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide6Pic2Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[5],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set("#slide6-pic2-desktop", {
        opacity: 1,
      })

      .to("#slide6-pic2-desktop", 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

  var slide7Pic12On = new ScrollMagic.Scene({
      triggerElement: slidesLeft[6],
      triggerHook: 0,
      offset: 0
    })
    .setTween(new TimelineMax()
      .set(["#slide7-pic1-desktop", "#slide7-pic2-desktop"], {
        opacity: 0,
      })
      .fromTo(["#slide7-pic1-desktop", "#slide7-pic2-desktop"], 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, {
        y: 0,
        opacity: 1,
        ease: Linear.easeNone
      }, 1)
    )
    .addTo(controller);

  var slide7Pic125Off = new ScrollMagic.Scene({
      triggerElement: slidesLeft[6],
      triggerHook: 0,
      offset: 600
    })
    .setTween(new TimelineMax()
      .set(["#slide7-pic1-desktop", "#slide7-pic2-desktop"], {
        opacity: 1,
      })

      .to(["#slide7-pic1-desktop", "#slide7-pic2-desktop"], 0.5, {
        y: 200,
        opacity: 0,
        ease: Linear.easeNone
      }, "+1")
    )
    .addTo(controller);

});