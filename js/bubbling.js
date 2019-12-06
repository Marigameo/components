let result = document.querySelector('#result');
let res = document.querySelector('#res');

document.querySelector('#grandParent')
.addEventListener('click',()=>{
    let p = document.createElement('p');
    p.setAttribute('style','text-align:center');
    p.innerText = 'Grandparent event triggered';
    let line = document.createElement('hr');
    result.appendChild(p);
    result.appendChild(line);
})

document.querySelector('#parent')
.addEventListener('click',()=>{
    let p = document.createElement('p');
    p.setAttribute('style','text-align:center');
    p.innerText = 'Parent event triggered';
    result.appendChild(p);
})

document.querySelector('#child')
.addEventListener('click',()=>{
    let p = document.createElement('p');
    p.setAttribute('style','text-align:center');
    p.innerText = 'Child event triggered';
    result.appendChild(p);
})

document.querySelector('#ceo')
.addEventListener('click',()=>{
    let p = document.createElement('p');
    p.setAttribute('style','text-align:center');
    p.innerText = 'Grandparent event triggered';
    res.appendChild(p);
},true)

document.querySelector('#manager')
.addEventListener('click',()=>{
    let p = document.createElement('p');
    p.setAttribute('style','text-align:center');
    p.innerText = 'Parent event triggered';
    res.appendChild(p);
},true)

document.querySelector('#engineer')
.addEventListener('click',()=>{
    let p = document.createElement('p');
    p.setAttribute('style','text-align:center');
    p.innerText = 'Child event triggered';
    res.appendChild(p);
    let line = document.createElement('hr');
    res.appendChild(line);
},true)