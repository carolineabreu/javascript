function calculateAverage() {
  var input1 = parseInt(document.getElementById('a').value);
  var input2 = parseInt(document.getElementById('b').value);
  var input3 = parseInt(document.getElementById('c').value);

  const average = (input1 + input2 + input3) / 3;

  document.getElementById("result").innerHTML = `Resultado:  ${average}`;
}
