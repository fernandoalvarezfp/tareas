const perroPaseado = true;
const casaAspirada = true;
const basuraSacada = true;

const pasearPerro = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (perroPaseado) {
        resolve("Paseo completado 🐶");
      } else {
        reject("No paseaste al perro");
      }
    }, 2000);
  });
};

const aspirarCasa = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (casaAspirada) {
        resolve("Casa limpia 🧹");
      } else {
        reject("No aspiraste la casa");
      }
    }, 3000);
  });
};

const sacarBasura = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (basuraSacada) {
        resolve("Basura sacada ♻️");
      } else {
        reject("No sacaste la basura 🪰");
      }
    }, 1000);
  });
};

const programa = async () => {
  try {
    let resultado = await pasearPerro();
    console.log(resultado);
    resultado = await aspirarCasa();
    console.log(resultado);
    resultado = await sacarBasura();
    console.log(resultado);
    console.log("Todas las tareas realizadas 🎉");
  } catch (error) {
    console.log(error);
  }
};

/*pasearPerro()
    .then((resultado) => {
      console.log(resultado);
      return aspirarCasa();
    })
    .then((resultado) => {
      console.log(resultado);
      return sacarBasura();
    })
    .then((resultado) => {
      console.log(resultado);
      console.log("Todas las tareas realizadas 🎉");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Fin del programa");
    })*/

programa();
