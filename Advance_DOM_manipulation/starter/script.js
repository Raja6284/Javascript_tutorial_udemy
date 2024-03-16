'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


/////////////////////////////////////////
/////////////////////////////////////////

// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
//const header = document.querySelector('.header');
// const allSelections = document.querySelectorAll('.section');

//onsole.log(allSelections);

//Creating and inserting elements
//.insertAdjacentHTML

//const message = document.createElement('div');
//message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.<button class = :btn btn--close-cookie"> Got it!</button>';

//message.innerHTML = 'We use cookies for improved functionality and analytics.<button class = "btn btn--close-cookie"> Got it!</button>';

//header.prepend(message);
//header.append(message);
//header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

//Delete elements
//document.querySelector('.btn--close-cookie').addEventListener('click',function(){
 // message.remove();
//})


//Styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';


// console.log(message.style);
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height = Number.parseFloat(getComputedStyle(message).height,10)+30+'px';

//IMPLEMENTING SMOOTH SCROLLING
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click',function(e){
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(X/Y)',window.pageXOffset,window.pageYOffset);

  console.log('height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth);

    // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);

    // window.scrollTo({
    //   left : s1coords.left+window.pageXOffset,
    //   top : s1coords.top+window.pageYOffset,
    //   behavior:'smooth',
    // });

    section1.scrollIntoView({behavior:'smooth'});
})

const h1 = document.querySelector('h1');

const alertH1 = function(e){
  alert('addEventListener: Great! You are reading the heading: D');

  //h1.removeEventListener('mouseenter',alertH1);
};

h1.addEventListener('mouseenter',alertH1);

setTimeout(()=>h1.removeEventListener('mouseenter',alertH1),3000);
// h1.onmouseenter(alert('addEventListener: Great! You are reading the heading: D'));