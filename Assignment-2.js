// Q.1

function add_num(num1){

    return function (num2){
        return num1 + num2;
    };
};

let sum = add_num(5);
console.log(sum(6));


// Q.2