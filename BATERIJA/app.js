let percentage = document.querySelector('.percentage');
let percent = document.querySelector('.percent');
navigator.getBattery().then(function(battery){
    percentage.style.width = battery.level * 100 + '%';
    percent.innerHTML = battery.level * 100 + '%';
 
    
});

let section = document.querySelector('.section');
let toggle = document.querySelector('.toggle');
toggle.onclick = function() {
    section.classList.toggle('dark')
}