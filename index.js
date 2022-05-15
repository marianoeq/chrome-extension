let myLeads = [];

let inputEl = document.querySelector("#input-el");
let ulEl = document.querySelector("#ul-el");

let inputBtn = document.querySelector("#input-btn");
let deleteBtn = document.querySelector("#delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLEads();
}

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  ulEl.innerText = "";
  renderLEads();
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  myLeads = [];
  ulEl.innerText = "";
});

function renderLEads() {
  myLeads.map((lead) => {
    let a = document.createElement("a");
    let li = document.createElement("li");
    ulEl.appendChild(li);
    li.appendChild(a);
    a.target = "_blank";
    a.href = `${lead}`;
    a.innerText = lead;
  });
}
