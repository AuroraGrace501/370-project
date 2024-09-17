let active = "button_container1";
let active_id = "1000";
const loadData = async () => {
  console.log("hey");
  const response = await fetch("fake_department.json");
  const data = await response.json();
  const container = document.getElementById("main-button");
  data.forEach((item) => {
    const new_button = `<button class="btn">${item}</buttongi>`;
    container.innerHTML += new_button;
  });
};

loadData();
