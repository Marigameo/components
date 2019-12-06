document.querySelector('#components')
.addEventListener('click',(e)=>{
    // console.log(e.target.id);
    window.open(
        '/components/'+e.target.id+'.html',
        '_blank'
    )
})