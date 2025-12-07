let arr = [1,1,3,1,1,2,2,3,5,6,2,2,5,9,10];
let user_input = prompt("Enter A Number That is Repeated in the array to have its sum!!");

Number(user_input);
let ele=arr.filter((item)=>{
   if(item == user_input) return item;
})
let  sum = 0;
for (let i = 0 ; i<ele.length ; i++){
    sum +=ele[i];
}
alert(`The Sum is ${sum}`);

