alert("Bienvenid@ a la Sección Turs");
let nombre = prompt("Cual Es Tu Nombre?").toUpperCase();

const span = document.querySelector("#welcome");
span.textContent = `Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa-solid fa-ticket");

//i.setAttribute("class", "fa-solid fa-ticket");
while (nombre.length < 3) {
  nombre = prompt(
    "Demasiado corto, dinos, cuál es realmente tu nombre ingresa al menos 3 letras"
  ).toUpperCase();
}
//span.textContent = "Hola, " + nombre;

let edad = parseInt(prompt("Cual es tu edad?"));

function menorEdad(edad) {
  if (edad < 18) {
    swal(
      "Oh no!",
      "¡ SOS MENOR DE EDAD ! NO PODES COMPRAR ENTRADAS",
      "warning"
    );
    let botones = document.querySelectorAll("button.btn");
    botones.forEach(function (button) {
      button.disabled = true;
      button.style.backgroundColor = "#ccc";
    });
  }
}
menorEdad(edad);

//alert ('Hola '+ nombre + ' de ' + edad + ' años, te interesaría comprar tickets?' )

let tickets = {
  Argentina: 2,
  España: 3,
  Guatemala: 5,
  Chile: 3,
  Peru: 1,
};

function getTickets(place) {
  if (tickets[place] > 0) {
    tickets[place]--;
    swal(
      "¡Felicitaciones!",
      "¡Tienes tu entrada para el concierto en " + place + "!",
      "success"
    );
  } else {
    swal("Oh no!", "¡No hay más entradas para " + place + "!", "error");
    disableSoldOutButtons();
  }
}

function disableSoldOutButtons() {
  const buttons = document.querySelectorAll(".btn");
  for (let lugar in tickets) {
    if (tickets[lugar] === 0) {
      buttons.forEach((button) => {
        if (button.previousElementSibling.textContent.includes(lugar)) {
          button.disabled = true;
          button.textContent = "SOLD OUT";
          button.style.backgroundColor = "gray";
          button.style.color = "white";
        }
      });
    }
  }
}

/*function addStarToFavorites(albums) {
  return albums.map((album) => album + " ⭐");
}

const myFavoriteAlbums = ["Dark Side of the Moon", "Abbey Road", "Thriller"];
const albumsWithStars = addStarToFavorites(myFavoriteAlbums);

const albumListElement = document.getElementById("albumList");
albumsWithStars.forEach((album) => {
  const listItem = document.createElement("li");
  listItem.textContent = album;
  albumListElement.appendChild(listItem);
});

/*
1) Hacer click en el boton "Comprar" (Usuario) 
2) Detectar que fecha/lugar quiere
3) Detectar cuantas entras disponibles tiene esa fecha/lugar
4) Si tiene más de 0, entonces: restar 1 a la cantidad total de entras 
4.1) Ese resultado lo guardo en el objeto que tiene las entradas
5) Si tiene 0, entonces: Le muestro un mensaje avisando que no hay mas entradas, cambio texto de boton*/
