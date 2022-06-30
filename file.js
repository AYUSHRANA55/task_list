// document.querySelector(".tasktitle").style.visibility = "hidden";
document.querySelector(".list").classList.add("hidden");

document.querySelector(".addbutton").addEventListener("click", function () {
  let task = prompt("Enter the task:");

  document.querySelector(".tabledata").innerHTML = task;
  document.querySelector(".list").classList.remove("hidden");
  document.querySelector(".done").addEventListener("click", function () {
    let done = task.strike();
    document.querySelector(".modal").classList.remove("hidden");

    document.querySelector(".tabledata").innerHTML = done;
  });
  document.querySelector(".delete").addEventListener("click", function () {
    document.querySelector(".list").classList.add("hidden");
  });
});

document.querySelector(".close-modal").addEventListener("click", function () {
  document.querySelector(".modal").classList.add("hidden");
});
