(function(){

  var creative = {};
  
  window.addEventListener('load', function () {
      init();
  }, false);

  function init () {
    creative.banner                         = document.getElementById("viewport");
    creative.click_tag                      = document.getElementById("click_tag");
    creative.totalDivs                      = creative.banner.querySelectorAll("*");
    creative.allDivs                        = creative.banner.children;
    creative.tl                             = new TimelineMax();

    creative.width                          = document.getElementById('viewport').offsetWidth;
    creative.height                         = document.getElementById('viewport').offsetHeight;

    addListeners();
    elements_off();
  }

  function elements_off () {
    for (i = 0; i < creative.allDivs.length; i++) {TweenMax.set(creative.allDivs[i], {opacity:0}); }
    add_preload_class();
  }

  function add_preload_class () {
    addClass(creative.totalDivs, 'load_images');
    imagesLoaded( '#viewport', {
      background: '.load_images'
    }, function( imgLoad ) {
      console.log(imgLoad.images.length + "images loaded")
      frameOne_init();
    });        
  }

  function frameOne_init () {
    TweenMax.set([bg], {opacity:1});
    TweenMax.to([creative.banner, border], 0.2,{autoAlpha:1});
    
    TweenMax.delayedCall(0.2, frameOne);
  }

  function frameOne() {
    TweenMax.set([
      logo1_1,
      ".arrows_F1_1",
      ".arrows_F1_2"
    ], {opacity:1});

    var tl = new TimelineMax({});
    TweenMax.from([arrow1_1], 1, {x:-856, ease:Sine.easeInOut});
    TweenMax.from([logo1_1],  0.5, {opacity:0, x:-30, ease:Sine.easeOut, delay:0.5});
    TweenMax.from([arrow1_4], 1, {x:-856}, {x:0, ease:Sine.easeOut, delay:0.1});
    
    var frameDelay = 2;
    TweenMax.to([arrow1_1], 0.75, {delay:frameDelay, x:555, ease:Sine.easeIn});
    TweenMax.to([arrow1_4], 0.75, {delay:frameDelay+0.2, x:975, ease:Sine.easeInOut}, 0.05);
    TweenMax.set([logo1_1], {delay:frameDelay+0.5, opacity:0});
    TweenMax.delayedCall(frameDelay+0.65, frameTwo);  
  }

  function frameTwo() {
    TweenMax.set([
      logo2_1,
      text2_1,
      text2_2,
      text2_3,
      text2_4,
      text2_5,
      legal2_1,
      legal2_2,
      product2_1,
      product2_2,
      arrow2_1
    ], {alpha:1});

    var tl = new TimelineMax({});
    tl.from([logo2_1],  0.5, {opacity:0, x:-20, ease:Sine.easeOut}, "logo");
    tl.from([text2_1],  0.5, {opacity:0, x:-10, ease:Sine.easeOut});
    tl.from([text2_2, text2_3, text2_4],  0.5, {opacity:0, x:-10, ease:Sine.easeOut}, "-=0.2");
    tl.from([text2_5], 0.5, {scale:0, ease:Back.easeOut.config(0.7), opacity:0, transformOrigin:"89px 142px"}, "-=0.3");  

    tl.from([legal2_1, legal2_2],  0.3, {opacity:0}, "-=0.2");  

    var tl_phone = new TimelineMax({delay:0.3});
    tl_phone.staggerFrom([
      product2_1,
      product2_2  
    ], 0.3, {opacity:0, x:10, ease:Sine.easeOut}, 0.05);

    TweenMax.from([arrow2_1], 0.75, {x:-555, ease:Sine.easeOut});
    
    var frameDelay = 2;
    TweenMax.to([product2_1, product2_2], 0.2, {delay:frameDelay+0.25, ease:Sine.easeIn, opacity:0, x:30});
    TweenMax.to([text2_1, text2_2, text2_3, text2_4, text2_5], 0.2, {delay:frameDelay+0.3, ease:Sine.easeInOut, opacity:0, x:20});
    TweenMax.to([legal2_1, legal2_2], 0.1, {delay:frameDelay+0.25, opacity:0});
    TweenMax.delayedCall(frameDelay+0.3, frameThree);  
  }

  function frameThree() {
    TweenMax.set([
      text3_2,
      text3_3,
      text3_1,
      legal3_1,
      legal3_2     
    ], {opacity:1});

    var tl = new TimelineMax({delay:0.5});
        tl.from([text3_1],  0.3, {x:-10, opacity:0, ease:Sine.easeOut});
        tl.from([text3_2],  0.5, {opacity:0, x:-250, scaleX:2.5, transformOrigin:"150px 105px"}, "-=0.25");
        tl.from([text3_3], 0.5, {scale:0, ease:Back.easeOut.config(0.7), opacity:0, transformOrigin:"71px 158px"}, "-=0.3");  
        tl.from([legal3_1, legal3_2],  0.3, {opacity:0}, "-=0.1");  

    var frameDelay = 2.5;
    TweenMax.to([text3_2, text3_3, text3_1], 0.2, {delay:frameDelay+0.45, ease:Sine.easeIn, opacity:0, x:30});
    TweenMax.to([legal3_1, legal3_2], 0.2, {delay:frameDelay+0.25, opacity:0});
    TweenMax.delayedCall(frameDelay+0.45, frameFour_transition);   
  }
  
  function frameFour_transition(){
    TweenMax.to([arrow2_1], 1, {x:555, ease:Sine.easeInOut}, 0.065);
    
    var frameDelay = 0.75;
    TweenMax.fromTo([arrow4_1], 1, {x:-955}, {x:-220, delay:frameDelay-0.2});
    TweenMax.delayedCall(frameDelay, frameFour);  
  }

  function frameFour() {
    TweenMax.set([
      text4_1,
      text4_2,
      text4_3,
      arrow4_1,
    ], {opacity:1, autoAlpha:1});
        
    var tl = new TimelineMax({});
    tl.staggerFrom([
      text4_1,
      text4_2,
      text4_3    
    ], 0.3, {opacity:0, x:-30, ease:Sine.easeOut}, 0.1, "+=0.1");
    
    var frameDelay = 2;
    TweenMax.to([text4_1, text4_2, text4_3], 0.2, {delay:frameDelay+0.2, ease:Sine.easeIn, opacity:0, x:30});
    TweenMax.delayedCall(frameDelay+0.2, frameFive);          

  }
  
  function frameFive() {
    // TweenMax.set([temp], {opacity:0.5});
    TweenMax.set([
      text5_1,
      text5_2,
      text5_3,
      text5_4,
      text5_5,
      product5_1,
      product5_2,
      legal5_1
    ], {opacity:1, autoAlpha:1, x:0});

    TweenMax.to([arrow2_1], 1, {x:555 + 581,ease:Sine.easeInOut});
    TweenMax.to([arrow4_1], 1, {x:581, ease:Sine.easeInOut});

    var tl = new TimelineMax({delay:0.4});
      tl.from([text5_1], 0.5, {x:-10, opacity:0});
      tl.from([
        text5_2,
        text5_3,
        text5_4
      ], 0.5, {opacity:0, x:-10, ease:Sine.easeOut}, "-=0.3");
      tl.from([text5_5], 0.5, {scale:0, ease:Back.easeOut.config(0.7), opacity:0, transformOrigin:"84px 128px"}, "-=0.3");
      tl.from([legal5_1],  0.3, {opacity:0}, "-=0.1");

    var tl_phone = new TimelineMax({delay:0.4});
        tl_phone.staggerFrom([
          product5_1,
          product5_2  
        ], 0.3, {opacity:0, x:10, ease:Sine.easeOut}, 0.05);    

    var frameDelay = 1.5;
    TweenMax.delayedCall(frameDelay, ctaAnimation);  
  }

  function ctaAnimation () {
      TweenMax.set([cta5_1, legal5_2], {opacity:1});

      var tl = new TimelineMax({});
      tl.from([cta5_1],  0.3, {opacity:0, ease:Power0.easeNone});
      tl.from([legal5_2],  0.3, {opacity:0}, "+=0.1");      

      // Legal
      // creative.legal_overMouse = document.getElementById("legal_hover")
      // creative.legal_overIt = document.getElementById("legal_over")
      // creative.legal_overMouse.addEventListener("mouseover", legal_in); 
  }

  function legal_in () {
      TweenMax.set([legal_over], {opacity:1, y:0});
      TweenMax.from([legal_over],  0.2, {opacity:0, y:creative.height});

      creative.legal_overMouse.addEventListener("mouseout", legal_out); 
      creative.legal_overMouse.addEventListener("click", legalStay);
  }

  function legalStay () {
      TweenMax.set([legal_over], {opacity:1, pointerEvents:"auto"});
      
      addClass("#legal_hover", "clicked");

      if(hasClass(creative.legal_overMouse, "clicked")){
          creative.legal_overMouse.removeEventListener("mouseout", legal_out);
          creative.legal_overMouse.removeEventListener("mouseover", legal_in); 
      }

      creative.legal_overIt.addEventListener("click", legal_out);         
  }

  function legal_out () {
      TweenMax.set([legal_over], {pointerEvents:"none"});
      TweenMax.to([legal_over],  0.2, {opacity:0, y:creative.height});
      
      removeClass(creative.legal_overMouse, "clicked")
      creative.legal_overIt.removeEventListener("click", legal_out);
      creative.legal_overMouse.addEventListener("mouseover", legal_in);
      creative.legal_overMouse.addEventListener("mouseout", legal_out);
  }

  function addListeners () {
      creative.click_tag.addEventListener('click', bgExitHandler, false);
  }

  function bgExitHandler () {
      Enabler.exit('Background Exit');
  }

  /*--------------- Snippets --------------------*/
      
  function Random (max) {
      return Math.random()*max;
  }

  function random (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function hasClass(el, className) {
    if (el.classList)
      return el.classList.contains(className)
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }

  function addClass(elements, myClass) {
    if (!elements) { return; }
    if (typeof(elements) === 'string') {
      elements = document.querySelectorAll(elements);
    }else if (elements.tagName) { elements=[elements]; }
    for (var i=0; i<elements.length; i++) {
      if ( (' '+elements[i].className + ' ').indexOf(' '+myClass+' ') < 0 ) {
        elements[i].className += ' ' + myClass;
      }
    }
  }

  function removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className)
    else if (hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  }

  // Gsap Css Value
  // console.log(element._gsTransform.scaleX);
  
})();
