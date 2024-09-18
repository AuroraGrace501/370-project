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

  active = data.id;
  let button_to_active = document.getElementById(active);
  text = button_to_active.textContent.trim();
  button_to_active.innerHTML = `
      <button id="btn${active}" class="department-btn active-btn">${text}</button>
  `;
  department_doctor(text);
};

const department_doctor = async (department = "All") => {
  // console.log(department);
  const response = await fetch("fake_doctor.json");
  const data = await response.json();
  const container = document.getElementById("doctor-info");
  container.innerHTML = "";
  data.forEach((item, id) => {
    if (department == "All" || department == item.specialization) {
      const doctor_card = `
      <div id="container">
           <div class="doctor-image">
             <img src="${item.image}" alt="" />
           </div>
 
           <div class="doctor-details">
             <h4>${item.name}</h4>
 
             <span id ="doc${id}" class="hint-star star">
             </span>
 
             <div class="info">
               <ul>
                 <li><strong>Specialization : </strong>${item.specialization}</li>
                 <li><strong>Phone : </strong>${item.phone}</li>
                 <li><strong>Location: </strong>${item.location}</li>
                 <li><strong>Availability: </strong>${item.availability}</li>
    
               </ul>
             </div>
 
             <div class="control">
               <button class="btn">
                 <span class="price">$${item.fee}</span>
                 <span class="shopping-cart"
                   ><i class="fa fa-bookmark" aria-hidden="true"></i
                 ></span>
                 <span class="buy">Book Now</span>
               </button>
             </div>
           </div>
         </div>
     
     `;
      container.innerHTML += doctor_card;
      const star_container = document.getElementById(`doc${id}`);
      for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(item.rating)) {
          star_container.innerHTML += `
         <i class="fa fa-star" aria-hidden="true"></i>
 `;
        } else if (i <= Math.ceil(item.rating)) {
          star_container.innerHTML += `
           <i class="fa fa-star-half-o" aria-hidden="true"></i>
   `;
        } else
          star_container.innerHTML += `
                   <i class="fa fa-star-o" aria-hidden="true"></i>
 `;
      }
    }
  });
  if (container.innerHTML == "") {
    let div = document.createElement("div");
    div.className = "no_doc";
    div.innerHTML = `
    <img class="no_doc_image" src="https://i.ibb.co.com/MZTdYwK/images.jpg" alt="Icon">
    <h1 class="heading">Sorry, no doctors are available here</h1>
    `;
    container.appendChild(div);
  }
};

load_button();
department_doctor();
