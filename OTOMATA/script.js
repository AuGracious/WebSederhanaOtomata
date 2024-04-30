const numberInput = document.getElementById("numberInput");
const resultText = document.getElementById("result");
const checkBtn = document.querySelector(".check-btn");
const infoBtn = document.querySelector(".info-btn");
const infoModal = document.querySelector(".info-modal");

checkBtn.addEventListener("click", function() {
  const number = numberInput.value.trim();

  if (number === "") {
    resultText.textContent = "Masukan angka scientific!";
    return;
  }

  const regex = /^-?\d+\.?\d*(e[+-]?\d+)?$/;
  const isValid = regex.test(number);

  if (isValid) {
    const parts = number.split("e");
    const mantissa = parseFloat(parts[0]);
    const exponent = parseInt(parts[1]);

    // Check if exponent is 0
    if (exponent === 0) {
      resultText.textContent = "Valid Number (Normal Number)";
      convertArea.style.display = "block";
      normalNumberInput.value = mantissa;
    } else {
      resultText.textContent = "Valid Number";
      convertArea.style.display = "none";
    }
  } else {
    resultText.textContent = "Invalid Number";
    convertArea.style.display = "none";
  }
});

convertBtn.addEventListener("click", function() {
  const normalNumber = normalNumberInput.value.trim();

  if (normalNumber === "") {
    return;
  }

  const number = parseFloat(normalNumber);
  let exponent = 0;

  if (number !== 0 && Math.abs(number) < 1) {
    exponent = Math.floor(Math.log10(Math.abs(number))) * -1;
  } else if (number !== 0) {
    exponent = Math.floor(Math.log10(Math.abs(number)));
  }

  const mantissa = number / Math.pow(10, exponent);
  const scientificNumber = `${mantissa.toFixed(3)}e+${exponent}`;

  normalNumberInput.value = scientificNumber;
});

infoBtn.addEventListener("click", function() {
  infoModal.style.display = "block";
});

closeBtn.addEventListener("click", function() {
  infoModal.style.display = "none";
});
