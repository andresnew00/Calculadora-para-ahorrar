function calculate() {
  let paymentAmount = document.getElementById("monto").value;

  // return
  let puchium = 0;
  let inversionesYahorros = 0;
  let = 0;

  if (paymentAmount < 100) {
    document.getElementById("alert").innerHTML =
      "No es suficiente dinero para calcular";
  }

  if (paymentAmount == 100) {
    document.getElementById("alert").innerHTML = "Solo basta para pagar a papa";
    document.getElementById("papa").innerHTML = 100.00;
  }

  if (paymentAmount > 100) {
    document.getElementById("papa").innerHTML = 100.00;

    // removing the 100 from dad
    paymentAmount = paymentAmount - 100;

    // calculate 40% puchium
    puchium = (paymentAmount * 0.4).toFixed(2);

    //calculate 30% ahorros + inversiones
    inversionesYahorros = (paymentAmount * 0.3).toFixed(2);

    document.getElementById("puchium").innerHTML = puchium;
    document.getElementById("ahorros").innerHTML = inversionesYahorros;
    document.getElementById("inversion").innerHTML = inversionesYahorros;
  }
}

document.getElementById("calcular").onclick = function () {
  document.getElementById("papa").innerHTML = 0;
  document.getElementById("puchium").innerHTML = 0;
  document.getElementById("ahorros").innerHTML = 0;
  document.getElementById("inversion").innerHTML = 0;
  calculate();
};
