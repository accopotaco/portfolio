const body = document.querySelector('body');
const btn = document.querySelectorAll('.btn');
const h1 =document.querySelector('h1');
const contBtn = document.querySelectorAll('.cont-btn');
const audio = document.getElementById('audio');

  contBtn[0].addEventListener('mouseover', ()=> {
    body.classList.add('on');
    body.classList.remove('off');
    body.classList.remove('act');
    h1.style.color ='#fff';
  });

  contBtn[1].addEventListener('mouseover', ()=> {
    body.classList.add('off');
    body.classList.remove('on');
    body.classList.remove('act');
    h1.style.color ='#fff';
  });

  contBtn[2].addEventListener('mouseover', ()=> {
    body.classList.add('act');
    body.classList.remove('on');
    body.classList.remove('off');
    h1.style.color ='#fff';
  });


contBtn[8].addEventListener('click', ()=> {
  if (audio.paused) {
    audio.play();
  }else if(audio.played){
    audio.pause();
  };
});
