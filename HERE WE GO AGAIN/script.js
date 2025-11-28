let body = document.body;

fetch("db.json")
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch((err) => console.log(err))


function showData(data) {
    data.products.forEach(element => {
        Insidehtml(element);
    });
}

function Insidehtml(ele) {
    console.log(ele)
    let div = document.createElement("div");
    div.className = "Elements";

    div.innerHTML = `
    <div class="container">

        <img src="${ele.image}" alt="img">
        <h1>${ele.product_name}</h1>
        <p>Rs.${ele.price}</p>
    </div> 
    `

    body.appendChild(div);

}
