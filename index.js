let myInterest = [];

let inputEl = document.querySelector("#input-el");
let ulEl = document.querySelector("#ul-el");

const inputBtn = document.querySelector("#input-btn");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

const InterestFromLocalStorage = JSON.parse(localStorage.getItem("myInterest"));

if (InterestFromLocalStorage) {
  myInterest = InterestFromLocalStorage;
  render(myInterest);
}

function render(interestingThings) {
  interestingThings.map((myThings) => {
    let a = document.createElement("a");
    let li = document.createElement("li");
    ulEl.appendChild(li);
    li.appendChild(a);
    a.target = "_blank";
    a.href = `${myThings}`;
    a.innerText = myThings;
  });
}
inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myInterest.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myInterest", JSON.stringify(myInterest));
  ulEl.innerText = "";
  render(myInterest);
});

tabBtn.addEventListener("click", () => {
  ulEl.innerText = "";
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    myInterest.push(tabs[0].url);
    localStorage.setItem("myInterest", JSON.stringify(myInterest));
    render(myInterest);
  });
});

deleteBtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.clear();
  myInterest = [];
  ulEl.innerText = "";
});
