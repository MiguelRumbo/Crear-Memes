const select = document.getElementById("option");
const div = document.getElementById("imgcats_1");
const div2 = document.getElementById("imgcats_2");
const div3 = document.getElementById("imgcats_3");

select.addEventListener("change", function () {
  if (select.value == "1") {
    div.style.display = "block";
    div2.style.display = "none";
    div3.style.display = "none";
  } else if (select.value == "2") {
    div.style.display = "none";
    div2.style.display = "block";
    div3.style.display = "none";
  } else if (select.value == "3") {
    div.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "block";
  } else if (select.value == "4") {
    div.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
  }
});

function cambiarImg() {
  const img = document.getElementById("preview_2");
  const boton = event.target;
  const txt = document.getElementById("txtmeme");
  switch (boton.id) {
    case "img_1A":
      img.src = "img/Categoria1/img1.png";
      txt.style.color = "#fff";
      break;
    case "img_2A":
      img.src = "img/Categoria1/img2.png";
      txt.style.color = "#fff";
      break;
    case "img_3A":
      img.src = "img/Categoria1/img3.png";
      txt.style.color = "#fff";
      break;

    case "img_1B":
      img.src = "img/Categoria2/img4.png";
      txt.style.color = "#000000";
      break;
    case "img_2B":
      img.src = "img/Categoria2/img5.png";
      txt.style.color = "#000000";
      break;
    case "img_3B":
      img.src = "img/Categoria2/img6.png";
      txt.style.color = "#000000";
      break;

    case "img_1C":
      img.src = "img/Categoria3/img7.png";
      txt.style.color = "#fff";
      break;
    case "img_2C":
      img.src = "img/Categoria3/img8.png";
      txt.style.color = "#fff";
      break;
    case "img_3C":
      img.src = "img/Categoria3/img9.png";
      txt.style.color = "#fff";
      break;
  }
}

function crearText() {
  const texto = document.getElementById("txtmeme");
  let meme = document.getElementById("meme").value;
  texto.innerHTML = meme;
}
