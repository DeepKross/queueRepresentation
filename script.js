const MY_AGE = 18;

function isEmpty() {
  let li = document.querySelector(".list");
  let numberOfItems = li.childElementCount;

  if (!numberOfItems) {
    return true;
  } else return false;
}

//Function that iteratates through ".list" and adds each item to local storage
function loadLocalStorage() {
  let li = document.querySelector(".list");
  let numberOfItems = li.childElementCount;

  for (let i = 1; i <= numberOfItems; i++) {
    localStorage.setItem(i.toString(), li.children[i - 1].innerHTML.toString());
  }
}

//Function that loads the local storage into the ".list"
function loadList() {
  let li = document.querySelector(".list");
  let numberOfItems = localStorage.length;

  for (let i = 1; i <= numberOfItems; i++) {
    li.innerHTML += `<li>${localStorage.getItem(i.toString())}</li>`;
  }

  if (isEmpty()) {
    let isEmpty = document.querySelector(".is-empty");
    isEmpty.style.display = "block";
  } else {
    let isEmpty = document.querySelector(".is-empty");
    isEmpty.style.display = "none";
  }
}

function addItem() {
  let item = document.querySelector(".input").value;
  let li = document.querySelector(".list");
  let numberOfItems = li.childElementCount;

  if (!item) {
    alert("Please enter an item");
  } else if (numberOfItems === MY_AGE) {
    alert("Sorry, the queue is full");
  } else {
    li.innerHTML += `<li>${item}</li>`;
    localStorage.clear();
    loadLocalStorage();
  }

  if (!isEmpty()) {
    let isEmpty = document.querySelector(".is-empty");
    isEmpty.style.display = "none";
  }

  document.querySelector(".input").value = "";
}

//Function that removes the first item in the list
function removeItem() {
  let li = document.querySelector(".list");
  let numberOfItems = li.childElementCount;

  if (numberOfItems === 0) {
    alert("The queue is empty");
  } else {
    li.removeChild(li.firstElementChild);
    localStorage.clear();
    loadLocalStorage();
  }

  if (isEmpty()) {
    let isEmpty = document.querySelector(".is-empty");
    isEmpty.style.display = "block";
  }
}

//call loadList on page refresh
loadList();
const add_btn = document.querySelector(".btn-add");
const remove_btn = document.querySelector(".btn-remove");
add_btn.addEventListener("click", addItem);
remove_btn.addEventListener("click", removeItem);
