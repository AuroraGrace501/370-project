let active = "button_container1";
let active_id = "1000";
const loadData = async () => {
  console.log("hey");
  const response = await fetch("fake_department.json");
  const data = await response.json();
  const container = document.getElementById("button-group");
  data.forEach((item) => {
    const new_button = `
    <div class= "button-container"> 
      <button class="btn">${item}</button>
    </div>
    `;
    container.innerHTML += new_button;
  });
};

loadData();
