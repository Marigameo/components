let counter = 0;
const getData = function(){
    document.getElementById('status').innerHTML = "API call made "+counter++ + " times";
}

const debouncing = function(debounce,limit){
    let timer;
    return function(){
        let context = this,
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function(){
            getData.apply(context,args);
        },limit)
    }
}

const betterFunction = debouncing(getData,300);