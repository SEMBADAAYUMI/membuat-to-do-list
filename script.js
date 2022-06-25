let input = document.querySelector("#add");
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el = document.getElementsByTagName("li");
//Now we will create a function that will allow us to add element on button click
btn.addEventListener("click", () => {
  let txt = input.value;
  if (txt === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[2]);
    input.value = "";
  }
});
//now lets write the function that will allow us to mark the done subject
//function ini tidak bekerja sebagaimana mestinya di video tutorial padahal sudah diikuti sama persis
list.addEventListener("click", (i) => {
  if (i.target.tagName == "LI") {
    i.target.classList.toggle("checked");
  }
});
