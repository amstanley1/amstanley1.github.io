

    setUpPage();
  
    function setUpPage() {
        addModalEventListeners();
        addNavEventListeners();
    }

    function addNavEventListeners() {
     
  
    const navIcon = document.querySelector('a.nav-bars');

    const nav = document.querySelector('nav');

    
        const navClickHandler = function() {
          console.log(this);
          console.log(nav);
          nav.classList.toggle('open');
          event.stopPropagation();
        };
    
        navIcon.addEventListener('click', navClickHandler);
    
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


  // Resizing the window resets open/closed product details
  // Resizing the window resets nav visibility
  function addWindowEventListeners() {

    const windowResizeHandler = function() {

      const nav = document.querySelector('nav');
      nav.classList.remove('open');

      
      
      
    };

    window.addEventListener('resize', windowResizeHandler); 
  }

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