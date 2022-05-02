const calculate = () => {
  let paymentAmount = document.getElementById("monto").value;
  let AmountToPayDad = document.getElementById("papaPayment").value;

  AmountToPayDad
    ? (document.getElementById("papa").innerHTML = AmountToPayDad)
    : (document.getElementById("papa").innerHTML = 0);

  // removing the 100 from dad
  paymentAmount = paymentAmount - AmountToPayDad;

  // calculate 35% puchium
  const forPuchium = (paymentAmount * 0.35).toFixed(2);

  // calculate 5% ahorros de viaje
  const travel = (paymentAmount * 0.05).toFixed(2);

  //calculate 60% ahorros + inversiones
  const inversiones = ((paymentAmount - forPuchium) * 0.4).toFixed(2);
  const ahorros = ((paymentAmount - forPuchium) * 0.6).toFixed(2);

  document.getElementById("puchium").innerHTML = forPuchium;
  document.getElementById("ahorros").innerHTML = ahorros;
  document.getElementById("inversion").innerHTML = inversiones;
  document.getElementById("viajes").innerHTML = travel;
};

document.getElementById("calcular").onclick = function calculateSavings() {
  document.getElementById("papa").innerHTML = 0;
  document.getElementById("puchium").innerHTML = 0;
  document.getElementById("ahorros").innerHTML = 0;
  document.getElementById("inversion").innerHTML = 0;
  calculate();
};
