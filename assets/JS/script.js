$ = document;
var deleteICONs = $.querySelectorAll("i");
var input = $.querySelector("input");
var unOrderedList = $.querySelector("ul");

// prevent refreshing page on f5
document.body.addEventListener("keydown", (e) => {
  if (e.keyCode === 116) {
    e.preventDefault();
  }
});

// // delete
let delHandler = (icon) => {
  icon.addEventListener("click", () => {
    icon.parentNode.remove();
  });
};
deleteICONs.forEach(delHandler);

// skip this read verify input then comback on fucntion recall
function addNewTodo(newTodoValue) {
  //   create li with class
  let newLi = $.createElement("li");
  newLi.className = "list-group-item";
  // create div with value
  let newDiv = $.createElement("div");
  newDiv.innerHTML = newTodoValue;
  // create icon with class adnd event Listener
  let newTrashIco = $.createElement("i");
  newTrashIco.className = "bi bi-trash3-fill";
  newTrashIco.addEventListener("click", () => {
    newTrashIco.parentNode.remove();
  });
  // append icon + div to li
  newLi.append(newDiv, newTrashIco);

  unOrderedList.append(newLi);
}

// verify input
input.addEventListener("keyup", (e) => {
  // let newTodoValue = input.value; or we can code :
  // trim() removes extra spaces from string
  let newTodoValue = e.target.value.trim();

  if (e.keyCode === 13) {
    e.currentTarget.value = "";
    // if you put this in form tag prevent sumbit form defualt of the form :)
    if (newTodoValue) {
      addNewTodo(newTodoValue);
    } else {
      alert("Please Type before pressing Enter");
    }
  }
});
