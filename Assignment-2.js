// Q.1

// function add_num(num1){

//     return function (num2){
//         return num1 + num2;
//     };
// };

// let sum = add_num(5);
// console.log(sum(6));

// Q.2

// function FindNum(num, arr) {
//     if(arr.length === 0)
//     {
//         return false;
//     }
    
//     else if(arr[0] === num)
//     {
//         // flag = true;
//         return true;
//     }
    
//     return FindNum(num,arr.slice(1));

// }

// let arr = [1, 2, 3, 5, 6, 7];

// console.log(FindNum(5,arr));


// Q.3 

// function insertPara(txt){
//     Parent = document.getElementById("myPara");
//     myPara = document.createElement("p");
//     myParatxt = document.createTextNode(txt);
//     myPara.appendChild(myParatxt);
//     Parent.appendChild(myPara);
// }

// insertPara("My name is Daniyal");

// Q.4

// function AddListItem(txt){
//     parent = document.querySelector('ul');
//     myli = document.createElement('li');
//     myli.textContent = txt;
//     parent.appendChild(myli);
// }

// AddListItem("Mushtaq");

