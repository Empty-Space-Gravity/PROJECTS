let form = document.getElementById("form");
let tbody = document.querySelector("tbody");

function displayTask(taskObj, index) {
  let tr = document.createElement("tr");

  let td1 = document.createElement("td");
  let td2 = document.createElement("td");
  let td3 = document.createElement("td");

  td1.innerText = taskObj.name;
  td2.innerText = taskObj.priority;

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.color = "white";
  

  deleteButton.addEventListener("click", () => {
    let data = JSON.parse(localStorage.getItem("Data")) || [];
    data.splice(index, 1); 
    localStorage.setItem("Data", JSON.stringify(data));
    tr.remove();
  });

  td3.append(deleteButton);
  tr.append(td1, td2, td3);
  tbody.append(tr);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let task = document.getElementById("task").value.trim();
  let priority = document.getElementById("priority").value;


  let data = JSON.parse(localStorage.getItem("Data")) || [];

  let user_data = {
    name: task,
    priority: priority
  };

  data.push(user_data);
  localStorage.setItem("Data", JSON.stringify(data));

  displayTask(user_data, data.length - 1);

  form.reset();
});

window.addEventListener("DOMContentLoaded", () => {
  let data = JSON.parse(localStorage.getItem("Data")) || [];
  tbody.innerHTML = ""; 
  data.forEach((element, index) => displayTask(element, index));
});
