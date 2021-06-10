import "./styles.css";

const onClickAdd = () => {
  const inputTxt = document.getElementById("add-txt").value;
  document.getElementById("add-txt").value = "";
  const li = document.createElement("li");
  li.className = "list-item";

  const p = document.createElement("p");
  p.innerText = inputTxt;

  li.appendChild(p);

  const compleatBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  compleatBtn.innerText = "完了";
  deleteBtn.innerText = "削除";
  compleatBtn.addEventListener("click", () => {
    deleteFromImcompleteList(compleatBtn.parentNode);
    const addTarget = compleatBtn.parentNode;
    const text = addTarget.firstElementChild.innerText;

    // TODoのないようのテキストを取得
    addTarget.textContent = null;
    const p = document.createElement("p");
    p.innerText = text;
    //
    const backBtn = document.createElement("button");
    backBtn.innerText = "戻す";
    addTarget.appendChild(p);
    addTarget.appendChild(backBtn);
    console.log(addTarget);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  deleteBtn.addEventListener("click", () => {
    deleteFromImcompleteList(deleteBtn.parentNode);
  });

  li.appendChild(compleatBtn);
  li.appendChild(deleteBtn);
  document.getElementById("imcomplete-list").appendChild(li);
};

const deleteFromImcompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
};
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
