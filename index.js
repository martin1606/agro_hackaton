//ELEMENTOS DO HEADER
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const lineNav = document.querySelector('.lineNav');
const containerMenu = document.querySelector('.containerMenu');
const buttonmenu = document.querySelector('.buttonmenu');
const checkboxMenu = document.querySelector('#checkbox-menu');
const menuItemb = document.querySelector('.menuItemb');
const menuItemc = document.querySelector('.menuItemc');
const menuItemd = document.querySelector('.menuItemd');
const menuIteme = document.querySelector('.menuIteme');
const buttonSM = document.querySelector('.buttonSM');
const textMain = document.querySelector('.textMain');
const produtorB = document.querySelector('.produtorB');
const armazemB = document.querySelector('.armazemB');


menuItemb.addEventListener('click', () => {checkboxMenu.click()});
menuItemc.addEventListener('click', () => {checkboxMenu.click()});
menuItemd.addEventListener('click', () => {checkboxMenu.click()});
menuIteme.addEventListener('click', () => {checkboxMenu.click()});


window.onscroll = () => {
    if (/*document.body.scrollTop > 50 && */document.documentElement.scrollTop > 50 && window.matchMedia("(min-width: 800px)").matches){
        navbar.classList.add('navbarRoll');
        if(lineNav){
        lineNav.style.display = 'none';
        }
        menuItemb.classList.add('menuItemHover');
        menuItemc.classList.add('menuItemHover');
        menuItemd.classList.add('menuItemHover');
        menuIteme.classList.add('menuItemHover');
    }  else if (document.body.scrollTop < 20 && document.documentElement.scrollTop < 20 && window.matchMedia("(min-width: 800px)").matches) {
        navbar.classList.remove('navbarRoll');
        if(lineNav){
        lineNav.style.display = 'block';
    }       
        removeButtonColor();
}  
}

checkboxMenu.addEventListener('click', () => {
    let buttonmenuPos = buttonmenu.offsetLeft;
    let containerMenuPos = containerMenu.offsetLeft;
    const navWidth = navbar.offsetWidth;
    if(navWidth <= 800){
        removeButtonColor();
    }  
    setTimeout(() => {
    if (buttonmenuPos > 30){
        console.log('siuuuu');
        containerMenu.style.animation = 'containerMenuB .5s forwards';
        buttonmenu.classList.add('buttonmenuB');
    } else if (containerMenuPos < 80) {
        removeBar();   
    };
}, 200);
})

function removeButtonColor (){
    menuItemb.classList.remove('menuItemHover');
    menuItemc.classList.remove('menuItemHover');
    menuItemd.classList.remove('menuItemHover');
    menuIteme.classList.remove('menuItemHover');
}

function removeBar(){
buttonmenu.classList.remove('buttonmenuB');
    containerMenu.style.animation = 'containerMenuC .5s forwards';
    setTimeout(() => {
        containerMenu.style.animation = 'none';
    }, 500);
};


function buttonSt (){
    textMain.innerHTML ='Você é:';
    buttonSM.style.display = 'none';
    produtorB.style.display = 'initial';
    armazemB.style.display = 'initial';

    console.log('s');
}