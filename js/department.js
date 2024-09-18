let active = "btn0";
const load_button = async () => {
  const response = await fetch("fake_department.json");
  const data = await response.json();
  const container = document.getElementById("button-group");
  data.forEach((item, id) => {
    const new_button = `
    <div id="btn${id}" onclick="button_changer(this)">
      <button  class="department-btn ${id ? "" : "active-btn"}">${item}</button>
    </div>
    `;
    container.innerHTML += new_button;
  });
};

const button_changer = (data) => {
  let button_to_inactive = document.getElementById(active);
  text = button_to_inactive.textContent;
  button_to_inactive.innerHTML = `
  <button id="btn${active}" class="department-btn">${text}</button>
  `;
  console.log(button_to_inactive.innerHTML);

  active = data.id;
  let button_to_active = document.getElementById(active);
  text = button_to_active.textContent;
  button_to_active.innerHTML = `
      <button id="btn${active}" class="department-btn active-btn">${text}</button>
  `;
};

load_button();
