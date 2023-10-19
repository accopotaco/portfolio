(()=>{
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  const btn = document.querySelectorAll('button');
  const category = document.querySelector('.category');
  const openBtn= document.querySelector('.open-btn');

  //h1
    const options ={
    duration: 2000,
    direction:'alternate',
    iterations:Infinity,
    };
  const Keyframes ={
  color:['#033270','#05f5bd','#85f505','#f58105','#f50561',
]};
h1.animate(Keyframes, options);





//bgColorBtn
btn[0].addEventListener('click',()=>{
body.style.background ='#033270',
body.style.color=' #fff';
});
btn[1].addEventListener('click',()=>{
body.style.background ='#000',
body.style.color=' #fff';
});
//sidebar
setTimeout(() => {
  category.classList.add('on');
}, 2000);
addEventListener('click',()=> {
  category.classList.remove('on');
});
//openBtn
openBtn.addEventListener('mouseover', ()=>{
  category.classList.add('on');
});
})();