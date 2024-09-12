async function main() {
   const res = await fetch('https://auroragrace501.github.io/370-project/fake_data.json');
    const obj = await res.json();
    console.log(obj)

    const data= [];
    for (let i=0; i<obj["symptoms"].length; ++i){
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
}

main();

  