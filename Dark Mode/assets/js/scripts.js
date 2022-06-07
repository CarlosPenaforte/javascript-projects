const TITLE = document.getElementById('page-title');
const BUTTON = document.getElementById('mode-selector');
const FOOTER = document.getElementsByTagName('footer')[0];
const BODY = document.getElementsByTagName('body')[0];
const DARK_MODE_CLASS = 'dark-mode';

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    BUTTON.classList.toggle(DARK_MODE_CLASS);
    TITLE.classList.toggle(DARK_MODE_CLASS);
    FOOTER.classList.toggle(DARK_MODE_CLASS);
    BODY.classList.toggle(DARK_MODE_CLASS);
}

function changeText(){
    const LIGHT_MODE = 'Light Mode';
    const DARK_MODE = 'Dark Mode';
    if(BODY.classList.contains(DARK_MODE_CLASS)){
        BUTTON.innerHTML = LIGHT_MODE;
        TITLE.innerHTML = DARK_MODE + ' ON';
    } else{
        BUTTON.innerHTML = DARK_MODE;
        TITLE.innerHTML = LIGHT_MODE + ' ON';
    }
}

BUTTON.addEventListener('click',changeMode);
