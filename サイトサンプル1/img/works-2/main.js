const tabs = document.querySelectorAll('.tabs li a');
const contents = document.querySelectorAll('.contents li');

for (let index = 0; index < tabs.length; index++) {
    tabs[index].addEventListener('click',(e) => {
        e.preventDefault();

        for (let i =0 ;i < tabs.length; i++) {
            tabs[i].classList.remove('active');
        }
        for (let i =0 ;i < contents.length; i++) {
            contents[i].classList.remove('active');
        }
        tabs[index].classList.add('active');
        contents[index].classList.add('active');
    });
};


