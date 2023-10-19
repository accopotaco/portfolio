const body = document.querySelectorAll('body')
const btn = document.querySelectorAll('li a')
const works = document.getElementById('works')
const contact = document.getElementById('contact')
const close = document.querySelector('.close-btn')
const audio = document.querySelector('.audio')
const heart = document.querySelector('#heart')


//circles
  document.addEventListener('mousemove', (e)=> {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to('.circle', {
      x:mouseX,
      y:mouseY,
      stagger: 0.1,//遅延
    })
      //cursor
  gsap.set('.cursor',{
    x:mouseX,
    y:mouseY,
  })
  })

//works
btn[0].addEventListener('click', ()=> {
  gsap.to('#works',2,
  {
    x:'0',
  }
  )
})
works.addEventListener('click',()=> {
  gsap.set('#works',
  {
    x:'0',
  }
  )
  gsap.fromTo('#works',2,
    {
      x:'0'
    },
    {
      x:'200%'
    },
  )
})

//contact
btn[1].addEventListener('click', ()=> {
  gsap.to('#contact',2,
  {
    x:'0',
  }
  )
})
close.addEventListener('click',()=> {
  gsap.set('#contact',
  {
    x:'0',
  }
  )
  gsap.fromTo('#contact',2,
    {
      x:'0'
    },
    {
      x:'200%'
    },
  )
})
//audio
btn[2].addEventListener('click', ()=> {
  if (audio.paused) {
    audio.play() 
  }else if (audio.played) {
    audio.pause()
  }
})
