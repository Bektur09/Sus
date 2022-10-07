let block_1 = document.querySelector(".block_1");
let block_2 = document.querySelector(".block_2");

  block_1.style.backgroundColor = "purple"
  block_2.style.backgroundColor = "black"

  block_1.onclick = () => {
 block_1.innerBlock = block_1.style.backgroundColor = "red"
}


block_2.onclick = () => {
    block_2.innerBlock = block_2.style.backgroundColor = "green"
}


block_1.addEventListener("click", change)
block_2.addEventListener("click", change1)