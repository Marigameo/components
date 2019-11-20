let counter = 0;
const getData = function(){
    document.getElementById('status').innerHTML = "API call made "+counter++ +" times";
}

const throttling = function(throttle,limit){
    let flag = 1;
    return function(){
        let context = this,
        args = arguments;
        if(flag){
            throttle.apply(context,args);
            flag = 0;
        }
        setTimeout(function(){
            flag = 1;
        },limit)
    }
}

const betterFunction = throttling(getData,300);