document.querySelector('#components')
.addEventListener('click',(e)=>{
    // console.log(e.target.id);
    window.open(
        '/components/'+e.target.id+'.html',
        '_blank'
    )
})

document.querySelector('#form')
.addEventListener('keyup',(e)=>{
    console.log(e.target.dataset);
    if(e.target.dataset.uppercase!=undefined){
        e.target.value = e.target.value.toUpperCase();
    }
})