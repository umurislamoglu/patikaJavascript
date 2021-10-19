let task = document.getElementById("task");
let list = document.getElementById("list");
let ullength = document.getElementsByTagName("li");

for(let i=0; i < ullength.length;i++){ 
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7"; 
    closeButton.classList.add("close"); 
    closeButton.onclick = removeButton; 
    ullength[i].append(closeButton); 
    ullength[i].onclick = check; 
}

function removeButton(){
    this.parentElement.remove(); 
  }

  function check(){
    this.classList.toggle("checked"); 
  }


function newElement() {
  if (task.value == "") {
    $(".error").toast("show"); 
  } else {
    $(".success").toast("show");
    let listItem = document.createElement("li");
    list.appendChild(listItem);
    listItem.innerHTML = task.value;
    task.value = "";

    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.classList.add("close");
    closeButton.onclick = removeButton;











  }
}
