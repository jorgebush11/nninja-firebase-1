import "./styles.css";
import db from "./firebase.config";

const cafeElem = document.querySelector(".list");
const cafeList = [];

function renderItem(item) {
  const coffee = document.createElement("li");
  const name = document.createElement("h3");
  const city = document.createElement("p");

  coffee.setAttribute("data-id", item.id);

  name.textContent = item.data().name;
  coffee.appendChild(name);

  city.textContent = item.data().city;
  coffee.appendChild(city);

  cafeElem.appendChild(coffee);
}

function getData() {
  db.collection("cafes")
    .get()
    .then((snapshot) => snapshot.docs.map((item) => renderItem(item)))
    .catch((err) => console.log(err.message));
}

getData();
