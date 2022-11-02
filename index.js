// console.log('i am just a man');
'use strict';

const calcage = function (birthyeah){
    return 2037 - birthyeah;
}

const yearsUntilRetitement = function(birthyeah,firstName) {
    const age = calcage(birthyeah);
    const retirement = 65 -age;
    
    if(retirement > 0){
        return retirement;
    }else{
        return 'already went home';
    }

    
}
console.log(yearsUntilRetitement(1991,'mwenda'));
console.log(yearsUntilRetitement(1958,'mwenda'));