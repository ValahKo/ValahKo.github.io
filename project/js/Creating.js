  
  
  let button = document.querySelector('.animac');
 let buttonDisamble = document.querySelector('.disamble');
  let popupWin = document.querySelector('.popupwindow');


  button.onclick = function clickDisable() {
    popupWin.classList.add('open');
   
  };

  buttonDisamble.onclick = function () {
    popupWin.classList.remove('open');
    
  };
// INPUT
let shape = document.querySelector('.Shape');
let shapeInput = document.querySelector('.Shape__input__button');
 let popupblok = document.querySelector('.popupblok');


 shape.onclick = function clickDisable() {
   popupblok.classList.add('openblok');
  
 };

 shapeInput.onclick = function () {
   popupblok.classList.remove('openblok');
   
 };

                  // SLIDER

let sliderItime = document.querySelector('slider__item');
let slides

  let offset = 0; //смещение от левого края
  let edge = 2070;
  let color = '#FFCC2A'; // фон кнопки желтый
  let colorGrey = '#C0C2C3';// фон кнопки серый
  const sliderLine = document.querySelector('.slider__line');
  const buttonNext = document.querySelector('.slick-next');
  const buttonPrew = document.querySelector('.slick-prew');
  const buttonColor = document.querySelector('.slick-arow');
  const clicPoster = document.querySelector('.poster__img');// постер1 
  const clicPosterTwo = document.querySelector('.poster__img2'); // постер2
  const clicPosterТhree = document.querySelector('.poster__img3'); // постер3
  const clicPosterFour = document.querySelector('.poster__img4'); // постер4
  buttonNext.onclick = function(){
     offset = offset + 345;
     if(offset > 1035){
      offset = 0;
     }
     sliderLine.style.left = -offset + 'px';
     buttonNext.style.background = color;
     buttonPrew.style.background = colorGrey;
  };
  buttonPrew.onclick = function(){
    offset = offset - 345;
     if(offset < 0){
      offset = 1035;
     }
     sliderLine.style.left = -offset + 'px';
     buttonPrew.style.background = color;
     buttonNext.style.background = colorGrey;
 };
    clicPoster.onclick = function(){
      offset = offset + 345;
      if(offset > 1035){
      offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
      
    };
    clicPosterTwo.onclick = function(){
      offset = offset + 345;
      if(offset > 1035){
      offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
      
    };
    clicPosterТhree.onclick = function(){
      offset = offset + 345;
      if(offset > 1035){
      offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
      
    };
    clicPosterFour.onclick = function(){
      offset = offset + 345;
      if(offset > 1035){
      offset = 0;
      }
      sliderLine.style.left = -offset + 'px';
      
    };

   



