
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button"); 

searchByButton.addEventListener('click', () => {
    let searchBy = searchBySelect.value;
    let query = searchByInput.value.toLowerCase();

    if (searchBy === "title") {
        let filtered = Product_data.filter(el => el.title && el.title.toLowerCase().includes(query));
        retreived_data(filtered);
    } else if (searchBy === "founder") {
        let filtered = Product_data.filter(el => el.founder && el.founder.toLowerCase().includes(query));
        retreived_data(filtered);
    } else {
        retreived_data(Product_data);
    }
});


// Problem 1. List of pitches on page load [3}

// let pitchTitleInput = document.getElementById("pitch-title");
// let pitchImageInput = document.getElementById("pitch-image");
// let pitchCategoryInput = document.getElementById("pitch-category");
// let pitchfounderInput = document.getElementById("pitch-founder");
// let pitchPriceInput = document.getElementById("pitch-price");
// let pitchCreateBtn = document.getElementById("add-pitch");

let Product_data = [];


fetch("/pitches")
.then((res) => res.json())
.then((data)=>{retreived_data(data)
    Product_data = data
})
.catch((err)=>console.log(err));


function retreived_data(data)
{
    let output = data.map( el=>Show_Datacard(el.id, el.image,el.price,el.percentage, el.description,el.founder,el.category,el.year,el.title)).join('');
    mainSection.innerHTML = output;

}
function Show_Datacard(id, image , price , percentage , description , founder , category, year ,title )
{
  return `
  
    <div>
        <h3 data-id=${id}> id : ${id} </h3>
        <img src="${image}" height="200px" width="200px">
        <h2>Founder : ${founder}</h2>
        <p>Description : ${description} </p>
        <p>Title : ${title} </p>
        <p> Price : ${price} </p>
        <p>category : ${category} </p>
        <p>percentage : ${percentage}</p>
        <a href="#" class="card-link" data-id=${id}> Edit </a> &nbsp;&nbsp;&nbsp;
        <button class="card-button" data-id=${id}> Delete </button>
 </div> 
 `
}

 pitchCreateBtn.addEventListener('click',()=>
{
    let user_inputs = 
    {
        title:pitchTitleInput.value,
        image:pitchImageInput.value,
        category:pitchCategoryInput.value,
        founder:pitchfounderInput.value,
        price:pitchPriceInput.value
    }

    fetch('/pitches',{
        method:"POST",
        headers: 
        {
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(user_inputs)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        fetch("/pitches")
        .then(res => res.json())
        .then(data => {
            Product_data = data;
            retreived_data(data);
        });
    })
    .catch((err)=>console.log(err))


})


document.addEventListener("click",(e)=>
{
    if(e.target.classList.contains("card-button")){
        delete_Card(e.target.dataset.id)
    }
})

function delete_Card(id)
{
     fetch(`/pitches/${id}`,{
        method:"DELETE"
     })
     .then((res)=>res.json())
     .then(()=>{
        Product_data = Product_data.filter((el) => el.id != id);
        retreived_data(Product_data);
     })
}

document.addEventListener('click' , (e)=>{

    if(e.target.classList.contains("card-link")){
        Update_data(e.target.dataset.id);
    }
})


// let updatePitchIdInput = document.getElementById("update-pitch-id");
// let updatePitchTitleInput = document.getElementById("update-pitch-title");
// let updatePitchImageInput = document.getElementById("update-pitch-image");
// let updatePitchfounderInput = document.getElementById("update-pitch-founder");
// let updatePitchCategoryInput = document.getElementById("update-pitch-category");
// let updatePitchPriceInput = document.getElementById("update-pitch-price");
// let updatePitchBtn = document.getElementById("update-pitch");


function Update_data(id)
{
    fetch(`/pitches/${id}`)
    .then((res)=>res.json())
    .then((data)=>{
        updatePitchIdInput.value= data.id,
        updatePitchTitleInput.value = data.title,
        updatePitchImageInput.value = data.image,
        updatePitchfounderInput.value = data.founder,
        updatePitchCategoryInput.value = data.category,
        updatePitchPriceInput.value= data.price 
    })
    .catch((err)=>console.log(err))
}


updatePitchBtn.addEventListener('click', ()=> 
{
    let obj = {
        id:updatePitchIdInput.value,
        title: updatePitchTitleInput.value,
        image: updatePitchImageInput.value ,
        founder:updatePitchfounderInput.value,
        category: updatePitchCategoryInput.value,
        price:updatePitchPriceInput.value
    }

    fetch(`/pitches/${obj.id}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json",
            // "Accept":"application/json"
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        fetch("/pitches")
        .then(res => res.json())
        .then(data => {
            Product_data = data;
            retreived_data(data);
        });
    })
    .catch((err)=>console.log(err));

})



// let sortAtoZBtn = document.getElementById("sort-low-to-high");
// let sortZtoABtn
//  = document.getElementById("sort-high-to-low");



sortAtoZBtn.addEventListener('click' ,()=>{

   let lwtohigh = Product_data.sort((a,b)=>{
        return a.price - b.price 
    })

    retreived_data(lwtohigh)
})



sortZtoABtn.addEventListener('click' ,()=>{

   let hightolw = Product_data.sort((a,b)=>{
        return b.price - a.price 
    })

    retreived_data(hightolw);
})

filterFood.addEventListener('click' , ()=>{

        let food = Product_data.filter((element)=>{

            if(element.category == "Food") 
            {
                return element;
            }
    })

        retreived_data(food);

})


filterElectronics.addEventListener('click' , ()=>{

        let food = Product_data.filter((element)=>{

            if(element.category == "Electronics") 
            {
                return element;
            }
    })

        retreived_data(food);

})


filterPersonalCare.addEventListener('click' , ()=>{

        let food = Product_data.filter((element)=>{

            if(element.category == "Personal Care") 
            {
                return element;
            }
    })

        retreived_data(food);

})


// let updatePricePitchId = document.getElementById("update-price-pitch-id");
// let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
// let updatePricePitchPriceButton = document.getElementById("update-price-pitch");
updatePricePitchPriceButton.addEventListener('click',()=>{

    let updatedPrice = {
        id:updatePricePitchId.value,
        price:updatePricePitchPrice.value
    }
    fetch(`/pitches/${updatedPrice.id}`,{
        method:"PATCH",
        headers: 
        {
            "Content-Type":"application/json"
        },
        body:JSON.stringify(updatedPrice)
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        fetch("/pitches")
        .then(res => res.json())
        .then(data => {
            Product_data = data;
            retreived_data(data);
        });
    })
    .catch((err)=>console.log(err))

})

