const json = localStorage.getItem("contact");
const dataContainer = document.getElementById("data");

if (json) {
  const dataArray = JSON.parse(json);

  if (Array.isArray(dataArray)) {
    dataArray.forEach((obj, index) => {
      let markup = `<div><h3>CONTACT ${index + 1}</h3>`;
      for (const key in obj) {
        markup += `<div><span>${key}: ${obj[key]}</span></div>`;
      }
      markup += `</div>`;
      dataContainer.innerHTML += markup;
    });
  }
}
