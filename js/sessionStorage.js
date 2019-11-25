let dsItems = sessionStorage.getItem('disabledItems');

dsItems = JSON.parse(dsItems);

if(dsItems != null){
    dsItems.forEach(item => {
        document.getElementById(item).disabled = true;
    });
}
