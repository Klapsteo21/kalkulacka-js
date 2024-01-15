var obrazovka = document.getElementById("obrazovka");

function pridathodnotu(value) {
  obrazovka.value += value;
}

function vycistit() {
  obrazovka.value = "";
}

function vypocitat() {
    try {
      obrazovka.value = eval(obrazovka.value);
    } catch (error) {
      obrazovka.value = "Error";
    }
  }  

function nasobeni() {
  obrazovka.value += "*";
}

function delit() {
  obrazovka.value += "/";
}

function scitani() {
  obrazovka.value += "+";
}

function odcitani() {
  obrazovka.value += "-";
}

function nadruhou() {
  obrazovka.value = Math.pow(eval(obrazovka.value), 2);
}

function odmocnina() {
  obrazovka.value = Math.sqrt(eval(obrazovka.value)) || "";
}

function desetiny() {
  var obsah = obrazovka.value;
  if (obsah.indexOf('.') === -1) {
    obrazovka.value += '.';
  }
}

function smazat() {
  obrazovka.value = obrazovka.value.slice(0, -1) 
}


