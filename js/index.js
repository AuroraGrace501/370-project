async function main() {
   const res = await fetch('https://auroragrace501.github.io/370-project/fake_data.json');
    const obj = await res.json();
    console.log(obj)

    const data= [];
    for (let i=0; i<obj["symptoms"].length; i++){
        data.push({
            value: i,
            text: obj["symptoms"][i]
        })
    }
    let dlb = new DualListbox(".dlb", {
        availableTitle: "Suggested Symptoms",
        selectedTitle: "Selected Symptoms",
        addButtonText: ">",
        removeButtonText: "<",
        addAllButtonText: ">>",
        removeAllButtonText: "<<",
        searchPlaceholder: "Search Symptoms",
        options: data
      });
      dlb.addEventListener("added", function (event) {
        console.log(event);
      });
      dlb.addEventListener("removed", function (event) {
        console.log(event);
      });
      document.getElementById('menu-toggle').addEventListener('click', function() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    });
// script.js

document.addEventListener('DOMContentLoaded', function() {
  const buttonContainerWrapper = document.getElementById('button-container-wrapper');

  // Fetch the buttons data from the JSON file
  fetch('fake_department.json')
      .then(response => response.json())
      .then(data => {
          // Iterate over the data and create buttons
          data.forEach(buttonData => {
              const btn = document.createElement('button');
              btn.className = 'btn';
              btn.textContent = buttonData.label;

              // Optional: Add click event to each button
              btn.onclick = function() { button_changer(this); };

              // Append the button to the container
              buttonContainerWrapper.appendChild(btn);
          });
      })
      .catch(error => console.error('Error fetching the buttons data:', error));
});

// Example function to handle button clicks
// function button_changer(buttonElement) {
//   console.log(`Button clicked: ${buttonElement.textContent}`);
//   // Add your logic here
// }

  function button_changer(element) {
    // Remove 'active' class from all containers
    document.querySelectorAll('.button-container').forEach(container => {
        container.classList.remove('active');
    });
    
    // Add 'active' class to the clicked container
    element.classList.add('active');
  }
    
}

main();

  