export class UI {
  static addFilmToUI(newFilm) {
    const filmList = document.getElementById("films");
    filmList.innerHTML += `
            <tr>
                <td><img src="${newFilm.url}" width="100%" height="320px" class="table-img"></td>
                <td>${newFilm.title}</td>
                <td>${newFilm.director}</td>
                <td><button id ="delete-film" >Filmi Sil</button></td>
            </tr>
        `;
  }

  static clearInputs(e1, e2, e3) {
    e1.value = "";
    e2.value = "";
    e3.value = "";
  }

  static loadAllFilms(films) {
    const filmList = document.getElementById("films");
    films.forEach((element) => {
      filmList.innerHTML += `
                <tr>
                    <td><img src="${element.url}" width="100%" height="320px" class="table-img"></td>
                    <td>${element.title}</td>
                    <td>${element.director}</td>
                    <td><button id ="delete-film" >Filmi Sil</button></td>
                </tr>
            `;
    });
  }

  static deleteFilmFromUI(element) {
    element.parentElement.parentElement.remove();
  }

  static clearAllFilmsFromUI() {
    const filmList = document.querySelector("#films");

    while (filmList.firstElementChild != null) {
      filmList.removeChild(filmList.firstElementChild);
    }
  }

  static displaySuccess(message) {
    const cardBody = document.querySelector(".card-head");
    const alert = document.createElement("div");

    alert.className = "success";
    alert.textContent = message;
    cardBody.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, 1000);
  }
  static displayWarning(message) {
    const cardBody = document.querySelector(".card-head");
    const alert = document.createElement("div");

    alert.className = "warning";
    alert.textContent = message;
    cardBody.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, 1000);
  }
  static displayAlready(message) {
    const cardBody = document.querySelector(".card-head");
    const alert = document.createElement("div");

    alert.className = "already";
    alert.textContent = message;
    cardBody.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, 1000);
  }
  static displayDelete(message) {
    const cardBody = document.querySelector(".card-head");
    const alert = document.createElement("div");

    alert.className = "delete";
    alert.textContent = message;
    cardBody.appendChild(alert);

    setTimeout(function () {
      alert.remove();
    }, 1000);
  }
}
