let pictures = [`assets/bali.jpg`, `assets/mainbora.jpg`, `assets/palawan.jpg`];
const maincontainer = document.querySelector('.main_container');
const allbgchangerdiv = document.querySelectorAll('.bgchanger .show');
const mainname = document.querySelector('.main_ct');
const description = document.querySelector('.desc_ct');
const [menu, hamburger] = [document.querySelector('.menu'), document.querySelector('.hambtn')];
let toggler = true;
const allinfo = [
    {
        ilandname: 'bali',
        landinfo: 'it is an indonesian known and beautiful for its lush active volcanic mountains.'
    },
    {
        ilandname: 'bora bora',
        landinfo: 'small south pacific island northwest of tahiti in french polynesia, surrounded by motus.'
    },
    {
        ilandname: 'palawan',
        landinfo: 'also known as la paragua, it is the largest island in the province of palawan.'
    }
    
];

Animationfunc();
hamburger.addEventListener('click', () => {
    if(toggler == true){
        menu.style.transform = `translateX(0%)`;
        toggler = false;
    }else{
        menu.style.transform = `translateX(100%)`;
        toggler = true;
    }
})



allbgchangerdiv.forEach((current) => {
    current.addEventListener('click', () => {
        clearanimationfirst();
         current.style.transform = `scale(1.1)`;

        let gettingclassname = current.getAttribute('class');
        let gettingbgno = gettingclassname.split('').slice(-1);

        if(gettingbgno == 1){
            backgroundchanger(0);
        }else if(gettingbgno == 2){
            backgroundchanger(1);
        }else if (gettingbgno == 3) {
            backgroundchanger(2);
        }
      
    })
});






function clearanimationfirst() {
    allbgchangerdiv.forEach((curr) => {
        curr.style.transform = `scale(1)`;
    })
}



function backgroundchanger(parameter) {
    maincontainer.style.background = `url(${pictures[parameter]})`;
    maincontainer.style.position = `center`;
    maincontainer.style.backgroundSize = `cover`;
    maincontainer.style.repeat = `no-repeat`;
    mainname.textContent = allinfo[parameter].ilandname;
    description.textContent = allinfo[parameter].landinfo;

}




function Animationfunc() {
    const sr = ScrollReveal({
distance: '60px',
duration: 2800,
//reset : true
});


sr.reveal(`.main_home`,{
origin: 'top',
interval: 100,
})
}