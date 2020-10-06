// // TARJETAS:
const cards = document.querySelectorAll(".card");

// // NOMBRE:
const filtrarNombre = document.querySelector("#filtro-nombre");

// // COLORES:
const filtrarColor = document.querySelectorAll("input[type='checkbox']");

// // SEXO:
const filtrarSexo = document.querySelectorAll("input[type='radio']");

// Button:
const container = document.querySelector(".container");
const buttonGrilla = document.querySelector("button");

buttonGrilla.onclick = () => {
  container.classList.add("columna");
};

// pasaFiltros -> param card -> return true o false
// revisar si hay algo escrito en input // true / false
// CUMPLIDA revisar si hay algo chequeado en los checkbox // true / false
// revisar si hay algo chequeado en los radio // true / false
// ver si el nombre escrit en el input coincide con el data-nombre de la tarjeta // true / false
// ver si alguno de los checkbox chequeados coincide con los colores de la tarjeta // true / false
// ver si el radio chequeado coincide con el sexo de la tarjeta // true / false
// todas son preguntas:

// recorrer los filtros:
// me fijo si hay algo escrito en el input,
const hayAlgoEscritoEnElInput = () => {
  // filtronombre === ""
  if (filtrarNombre.value) {
    return true;
  } else {
    return false;
  }
};

// si hay algo escrito en el input me fijo si lo escrito coincide con la tarjeta
// si coincide con lo escrito en la trajeta retorno true
// si no coincide, retorno false
const compararInputConTarjeta = (card) => {
  if (card.dataset.nombre.includes(filtrarNombre.value.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

// me fijo si hay algo chequeado en los checkbox
const hayAlgoCheckboxChequeado = () => {
  for (checkbox of filtrarColor) {
    if (checkbox.checked) {
      return true;
    }
  }
  return false;
};

// si lo hay, me fijo que checkbox esta chequeado
// si los checkbox chequeados coinciden con el color de alguna tarjeta
// retorno true, sino retorno false
const coincideColorConTarjeta = (card) => {
  for (checkbox of filtrarColor) {
    if (checkbox.checked) {
      if (checkbox.value === card.dataset.color || checkbox.value === "todos") {
        return true;
      }
    }
  }
  return false;
};

// me fijo si hay algo chequeado en los radio
const hayAlgunRadioChequeado = () => {
  for (radio of filtrarSexo) {
    if (radio.checked) {
      return true;
    }
  }
  return false;
};

// si lo hay, me fijo que radio esta chequeado
// si el radio chequeado coinciden con el sexo de alguna tarjeta
// retorno true, sino retorno false
const coincideSexoConTarjeta = (card) => {
  for (radio of filtrarSexo) {
    if (radio.checked) {
      if (radio.value === card.dataset.sexo || radio.value === "i") {
        return true;
      }
    }
  }
  return false;
};

// separar y despues unir:
const pasaFiltroInput = (card) => {
  if (hayAlgoEscritoEnElInput()) {
    if (compararInputConTarjeta(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

const pasaFiltroCheckbox = (card) => {
  if (hayAlgoCheckboxChequeado()) {
    if (coincideColorConTarjeta(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

const pasaFiltroRadio = (card) => {
  if (hayAlgunRadioChequeado()) {
    if (coincideSexoConTarjeta(card)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

// function de los filtros:
const pasaFiltros = (card) => {
  if (
    pasaFiltroInput(card) &&
    pasaFiltroCheckbox(card) &&
    pasaFiltroRadio(card)
  ) {
    return true;
  } else {
    return false;
  }
};

// // codigo de los input :
// if (hayAlgoEscritoEnElInput()) {
//   if (compararInputConTarjeta(card)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// // codigo de los checkbox :
// else if (hayAlgoCheckboxChequeado()) {
//   if (coincideColorConTarjeta(card)) {
//     return true;
//   } else {
//     return false;
//   }
// }
//  // codigo de los radio :
// else if (hayAlgunRadioChequeado()) {
//   if (coincideSexoConTarjeta(card)) {
//     return true;
//   } else {
//     return false;
//   }
// } else {
//   return true;
// }

// accion:
const ocultarTarjeta = (card) => {
  return card.classList.add("hidden");
};

const mostrarTarjeta = (card) => {
  return card.classList.remove("hidden");
};

const filtrarTarjetas = () => {
  for (let card of cards) {
    if (pasaFiltros(card)) {
      mostrarTarjeta(card);
    } else {
      ocultarTarjeta(card);
    }
  }
};

// final:
filtrarNombre.oninput = () => {
  filtrarTarjetas();
  console.log(hayAlgoEscritoEnElInput());
};

for (let checkbox of filtrarColor) {
  checkbox.oninput = () => {
    filtrarTarjetas();
    console.log(hayAlgoCheckboxChequeado());
  };
}

for (let radio of filtrarSexo) {
  radio.oninput = () => {
    filtrarTarjetas();
    console.log(hayAlgunRadioChequeado());
  };
}

//
//
//
//
//
//
//////////////
// CLASE 30
// filtrarNombre.oninput = () => {
//   for (let card of cards) {
//     if (card.dataset.nombre.includes(filtrarNombre.value)) {
//       card.classList.remove("hidden");
//     } else {
//       card.classList.add("hidden");
//     }
//   }
// };

// // PERSONALIDAD:

// const filtrarPersonalidad = document.querySelectorAll("input[type='button']");
// for (let filtro of filtrarPersonalidad) {
//   filtro.onclick = () => {
//     for (let card of cards) {
//       if (filtro.dataset.temp === card.dataset.temp) {
//         card.classList.remove("hidden");
//       } else if (filtro.dataset.temp === "todos") {
//         card.classList.remove("hidden");
//       } else {
//         card.classList.add("hidden");
//       }
//     }
//   };
// }

// for (let checkbox of filtrarColor) {
//   checkbox.oninput = () => {
//     for (let card of cards) {
//       card.classList.add("hidden");
//       for (let filtro of filtrarColor) {
//         if (filtro.checked) {
//           if (filtro.value === card.dataset.color) {
//             card.classList.remove("hidden");
//           }
//           else if (filtro.value === "todos") {
//             card.classList.remove('hidden')
//           }
//         }
//       }
//     }
//   };
// }

// for (let radio of filtrarSexo) {
//   radio.oninput = () => {
//     for (let card of cards) {
//       card.classList.add('hidden');
//       if (radio.checked) {
//         if (radio.value === card.dataset.sexo) {
//           card.classList.remove('hidden');
//         }
//         if (radio.value === 'i') {
//           card.classList.remove('hidden');
//         }
//       }
//     }
//   };
// }
