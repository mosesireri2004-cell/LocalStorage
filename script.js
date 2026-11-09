const saveBtn = document.querySelector(".save");
const showBtn = document.querySelector(".show");

saveBtn.addEventListener("click", () => processData("save"));
showBtn.addEventListener("click", () => processData("show"));

function processData(type) {
  if (type === "save") {
    const name = document.querySelector("#name").value;
    localStorage.setItem("username", name);
    alert("Data Saved!");
    return;
  } else {
    const name = localStorage.getItem("username");
    const output = document.querySelector("#output");

    if (name) {
      output.textContent = `Welcome ${name}`;
      output.style.color = "green";
    } else {
      output.textContent = "No Data Found!";
      output.style.color = "red";
    }
  }
}
