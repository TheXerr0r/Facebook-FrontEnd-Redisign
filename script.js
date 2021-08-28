var settingsMenu = document.querySelector('.settings-menu');
var darkBTN = document.querySelector('.dark-btn');
function settingsMenuToggle(){
    settingsMenu.classList.toggle('settings-menu-height');
}
darkBTN.onclick = function(){
    darkBTN.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

    if(localStorage.getItem('theme') = 'light'){
        localStorage.setItem('theme', 'dark');
    }else{
        localStorage.setItem('theme', 'light');
    }
}