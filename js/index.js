const dark = document.querySelector('#dark');
const auto = document.querySelector('#auto');
const light = document.querySelector('#light');
const lighMode = document.querySelector('#lighMode');
const autoThem = document.querySelector('#autoThem');
const darkMode = document.querySelector('#darkMode');
const body = document.querySelector('#body');
const text = document.querySelector('.text')

dark.addEventListener('click', function(){
    dark.style.backgroundColor = 'black';
    dark.style.color = 'white';
    dark.style.border = '1px solid white';
    darkMode.style.backgroundColor = 'black';
    darkMode.style.border = '1px solid white';
    darkMode.style.color = 'white';
    body.style.backgroundColor = 'black';
    text.style.color = 'white';
    lighMode.style.backgroundColor = 'white';
    lighMode.style.color = 'gray';
    autoThem.style.backgroundColor = 'wheat';
    autoThem.style.color = 'gray';
})
auto.addEventListener('click', function(){
    auto.style.backgroundColor = 'wheat';
    auto.style.color = 'white';
    auto.style.border = '1px solid white'
    autoThem.style.backgroundColor = 'wheat';
    autoThem.style.color = 'gray';
    body.style.backgroundColor = 'wheat';
    darkMode.style.backgroundColor = 'black';
    darkMode.style.color = 'white';
    lighMode.style.backgroundColor = 'white';
    lighMode.style.color = 'gray';
})
light.addEventListener('click', function(){
    light.style.backgroundColor = 'white';
    light.style.color = 'black';
    light.style.border = '1px solid white'
    lighMode.style.backgroundColor = 'white';
    lighMode.style.color = 'gray';
    body.style.backgroundColor = 'white';
    text.style.color = 'gray';
    darkMode.style.backgroundColor = 'black';
    darkMode.style.color = 'white';
    autoThem.style.backgroundColor = 'wheat';
    autoThem.style.color = 'gray';
})
darkMode.addEventListener('click', function(){
    darkMode.style.backgroundColor = 'black';
    darkMode.style.color = 'white';
    darkMode.style.border = '1px solid white';
    dark.style.backgroundColor = 'black';
    dark.style.color = 'white';
})
lighMode.addEventListener('click', function(){
    lighMode.style.backgroundColor = 'white';
    lighMode.style.color = 'gray';
    lighMode.style.border = '1px solid white';
    light.style.backgroundColor = 'white';
    light.style.color = 'gray';
})
autoThem.addEventListener('click', function(){
    autoThem.style.backgroundColor = 'wheat';
    autoThem.style.color = 'gray';
    autoThem.style.border = '1px solid white';
    auto.style.backgroundColor = 'wheat';
    auto.style.color = 'gray';
})

