let active = "button_container1";
let active_id = "1000";
const button_changer = (data = button_container1) => {
    let button_toInactive = document.getElementById(active);
    button_toInactive.innerHTML = `
    <button class="btn">
    ${button_toInactive.innerText}
</button>
      `;
  
    active = data.id;
    const name = data.innerText;
    data.innerHTML = `
    <button class="btn">
    ${name}
</button>
    `;
    console.log("hll")
  };
  