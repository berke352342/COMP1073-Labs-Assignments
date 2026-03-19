fetch("js/i-scream.json")
  .then(res => res.json())
  .then(data => {

    const container = document.createElement("div");
    document.body.appendChild(container);

    data.flavours.forEach(flavour => {

      let div = document.createElement("div");

      // TYPE control
      if (flavour.type === "sweet") {
        div.style.background = "pink";
       } else if (flavour.type === "fresh") {
        div.style.background = "lightgreen";
        } else {
        div.style.background = "orange";
      }

      // CALORIES control
      let msg = flavour.calories > 250
        ? "High Calories ⚠️"
        : "Light Option ✅";

      div.innerHTML = `
        <h2>${flavour.name}</h2>
        <img src="${flavour.image}" width="120">
        <p>Calories: ${flavour.calories}</p>
        <p>Type: ${flavour.type}</p>
        <p>${msg}</p>
      `;

      container.appendChild(div);
    });

  });