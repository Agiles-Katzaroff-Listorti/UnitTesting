class Calc {
  calculator(numeritos) {
    let numeros = numeritos.split(",");
    numeros = numeros.map((n) => parseInt(n));
    const sum = numeros.reduce((acum, val) => {
      return isNaN(val) ? acum : acum + val;
    }, 0);
    return sum;
  }
}

module.exports = Calc;
