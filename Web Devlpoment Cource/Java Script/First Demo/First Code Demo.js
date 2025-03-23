let nameb = document.querySelector('button');
nameb.addEventListener('click', show);

function show(){
    let name = prompt('Enetr The Number');
    nameb.textContent = 'Roll No. 01: ' + name;
}
