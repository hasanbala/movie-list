const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody2 = document.querySelector(".card-foot");
const clearButton = document.querySelector("#clear-films");

//bütün eventlerin başlangıç noktası
eventListener();

function eventListener() {
  form.addEventListener("submit", addFilm);
  cardBody2.addEventListener("click", deleteFilm);
  clearButton.addEventListener("click", clearAllfilms);

  document.addEventListener("DOMContentLoaded", function () {
    let films = Storage.getFilmFromStorage();
    UI.loadAllFilms(films);
  });
}

function addFilm(e) {
  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));
  const title = titleElement.value.trim();
  const director = directorElement.value.trim();
  const url = urlElement.value.trim();

  let datas = Storage.getFilmFromStorage();
  let tempTitle;
  let tempDirector;
  let tempUrl;

  datas.forEach(function (x) {
    if (x.title === title && x.director === director && x.url === url) {
      tempTitle = x.title;
      tempDirector = x.director;
      tempUrl = x.url;
    }
  });

  if (title === "" || director === "" || url === "") {
    UI.displayAlready("lütfen tüm alanları doldurunuz");
    UI.clearInputs(titleElement, directorElement, urlElement);
  } else if (
    title === tempTitle &&
    director === tempDirector &&
    url === tempUrl
  ) {
    UI.displayAlready("girdiğiniz değerler zaten mevcuttur");
    UI.clearInputs(titleElement, directorElement, urlElement);
  } else {
    const newFilm = new Film(title, director, url);
    UI.addFilmToUI(newFilm); // arayüze film ekleme işlemi
    Storage.addFilmToStorage(newFilm); // storage ye film ekleme işlemi
    UI.displaySuccess("film başarıyla eklenmiştir");
  }
  UI.clearInputs(titleElement, directorElement, urlElement);
  e.preventDefault();
}

//listeden silmek istediğimiz elemanları seçip, silmeye gönderiyoruz
function deleteFilm(e) {
  if (e.target.id === "delete-film") {
    UI.deleteFilmFromUI(e.target);
    Storage.deleteFilmFromStorage(
      e.target.parentElement.previousElementSibling.previousElementSibling
        .textContent
    );
    UI.displayDelete("film başarılı bir şekilde silinmiştir");
  }
}

// tüm filmlmeri arayüzden kaldırma işlemi
function clearAllfilms() {
  if (localStorage.getItem("films") === null) {
    UI.displayWarning("listede silinecek element yoktur !!");
  } else {
    if (confirm("tüm filmleri silmek istediğinize emin misiniz")) {
      //.alıntıdır..todoList.innerHTML = ""; doğrudur fakat oldukça yavaş bir işlemdir

      UI.clearAllFilmsFromUI();
      Storage.clearAllFilmsFromStorage();
      UI.displayDelete("tüm filmler silinmiştir");
    }
  }
}
