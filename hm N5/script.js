const input = document.querySelector("#input");
const button = document.querySelector("#button");


function addHandler () {
    const tag = document.createElement("div");

    tag.setAttribute("class", "block");
    tag.innerText = input.value ;
    

    document.body.append(tag);
    input.value = "";

    //кнопка удаления
     let deleteButton = document.createElement("button");
     deleteButton.innerText = "Delete";

     deleteButton.onclick = () => {
        tag.remove()
     }
tag.append(deleteButton)
}
button.addEventListener("click", addHandler)