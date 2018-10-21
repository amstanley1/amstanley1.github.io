

    setUpPage();
  
    function setUpPage() {
        addModalEventListeners();
        addSliderEventListeners();
        addNavEventListeners();
        addProjectListeners();
    }

    function addNavEventListeners() {

        const nav = document.querySelector('nav');
    
        const navClickHandler = function() {
          this.classList.toggle('open');
          event.stopPropagation();
        };
    
        nav.addEventListener('click', navClickHandler);
    
        const bodyClickHandler = function() {
          nav.classList.remove('open');
        };
    
        document.body.addEventListener('click', bodyClickHandler);
      }
    

    // Modal can be opened
  function addModalEventListeners() {

    const modalTriggerElement = document.querySelector('#modal-trigger');

    const modalTriggerClickHandler = function() {
      document.body.classList.add('modal-open');
    };

    modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

    // Modal can be closed
    const modalCloseButton = document.querySelector('#modal button');

    const modalCloseButtonClickHandler = function() {
      document.body.classList.remove('modal-open');
    };

    modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
  }

  // Image Carousel / Slider
  function addSliderEventListeners() {

    const sliderPrev = document.getElementById('slider-prev');
    const sliderNext = document.getElementById('slider-next');
    const sliderFrame = document.getElementById('slider-frame');
    const sliderCaption = document.getElementById('slider-caption');

    const slides =
      Array.from(sliderFrame.querySelectorAll('div[data-src]'))
        .map(div => {
          return {
            imageUrl: div.getAttribute('data-src'),
            caption: div.textContent.trim(),
          };
        });

    let sliderIndex = 0;
    displaySliderImage();

    function displaySliderImage() {
      let { imageUrl, caption } = slides[sliderIndex];
      sliderFrame.style.backgroundImage = `url('${imageUrl}')`;
      let count = `(${sliderIndex+1}/${slides.length}) `;
      sliderCaption.innerHTML = count + caption;
      sliderCaption.classList.add('flash');
      setTimeout(() => {
        sliderCaption.classList.remove('flash');
      }, 0);
    }

    function displayPrevSliderImage() {
      sliderIndex--;
      if (sliderIndex < 0) {
        sliderIndex = slides.length - 1;
      }
      displaySliderImage();
    }

    function displayNextSliderImage() {
      sliderIndex++;
      if (sliderIndex === slides.length) {
        sliderIndex = 0;
      }
      displaySliderImage();
    }

    sliderPrev.addEventListener('click', displayPrevSliderImage);
    sliderNext.addEventListener('click', displayNextSliderImage);

    setInterval(function() {
      displayNextSliderImage();
    }, 4000);
  }

  // Resizing the window resets open/closed product details
  // Resizing the window resets nav visibility
  function addWindowEventListeners() {

    const windowResizeHandler = function() {

      const nav = document.querySelector('nav');
      nav.classList.remove('open');

      
      
      
    };

    window.addEventListener('resize', windowResizeHandler); 
  }

  function addProjectListeners() {
    const projects = document.querySelectorAll('#project-grid article');

    for (let i = 0; i < projects.length; i++) {
      project[i].addEventListener('click', function() {

        let projectDescription = project[i].querySelector('#projectDescription');
        projectDescription.style.display = "block";
      });
    };

   };

   function addModalEventListeners() {

    const modalTriggerElement = document.querySelector('#modal-trigger');

    const modalTriggerClickHandler = function() {
      document.body.classList.add('modal-open');
    };

    modalTriggerElement.addEventListener('click', modalTriggerClickHandler);

    // Modal can be closed
    const modalCloseButton = document.querySelector('#modal button');

    const modalCloseButtonClickHandler = function() {
      document.body.classList.remove('modal-open');
    };

    modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
  }