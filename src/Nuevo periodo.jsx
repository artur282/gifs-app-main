const Periodo = 20253 //se recibe el ultimo periodo de la base de datos

const sumar = (numero) => {
  let ArrayPeriodo = ConvertirArreglo(numero);
  ArrayPeriodo[4]++;
  if (ArrayPeriodo[4] > 3) {
    ArrayPeriodo[4] = 1;
    ArrayPeriodo[3]++;
  }
  if (ArrayPeriodo[3] > 9) {
    ArrayPeriodo[3] = 0;
    ArrayPeriodo[2]++;
  }
  if (ArrayPeriodo[2] > 9) {
    ArrayPeriodo[2] = 0;
    ArrayPeriodo[1]++;
  }
  ArrayPeriodo = ArrayPeriodo.join("");
  ArrayPeriodo = parseInt(ArrayPeriodo);
  return ArrayPeriodo;
};

const ConvertirArreglo = (num) => {
  if (num === 0) return [];
  return [...ConvertirArreglo(Math.floor(num / 10)), num % 10];
};

const NuevoPeriodo = sumar(Periodo); //la variable nuevo periodo se envia a la base de datos
console.log(NuevoPeriodo);



