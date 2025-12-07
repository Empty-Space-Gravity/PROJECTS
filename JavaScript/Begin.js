let arr  =  ["Hello","Ye","Nic","e"];



let element_array =


arr.filter((element)=>
{
     if(element.length > 2)
     {
        return element;
     }
});

console.log(element_array);