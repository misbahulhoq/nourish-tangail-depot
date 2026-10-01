// this is for automatic date update
let today = new Date();

let day = today.getDate();

let month = today.getMonth() + 1;

let year = today.getFullYear();

function zeroFunctionDay() {
  return day < 10 ? (day = "0" + day) : day;
}

function zeroFunctionMonth() {
  return month < 10 ? (month = "0" + month) : month;
}

let fullDate = zeroFunctionDay() + " / " + zeroFunctionMonth() + " / " + year;

window.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".auto-date").value = fullDate;
});
// automatic date update ends here

// broiler stock counting

let broilerOpening = document.querySelector("#broiler-opening");

let broilerReceived = document.querySelector("#broiler-received");

let broilerSales = document.querySelector("#broiler-sales");

let broilerClosing = document.querySelector(".broiler-closing");

let broilerOpeningValue = 0;

let broilerReceivedValue = 0;

let broilerSalesValue = 0;

broilerOpening.addEventListener("input", () => {
  broilerOpeningValue = parseInt(broilerOpening.value);
  updateBroilerClosing();
  updateTotalOpening();
  updateTotalClosing();
});

broilerReceived.addEventListener("input", () => {
  broilerReceivedValue = parseInt(broilerReceived.value);
  updateBroilerClosing();
  updateTotalReceived();
  updateTotalClosing();
});

broilerSales.addEventListener("input", () => {
  broilerSalesValue = parseInt(broilerSales.value);
  updateBroilerClosing();
  updateTotalSales();
  updateTotalClosing();
});

function updateBroilerClosing() {
  broilerClosing.textContent =
    broilerOpeningValue + broilerReceivedValue - broilerSalesValue;
}

// end of broiler stock counting

// layer stock counting

let layerOpening = document.querySelector("#layer-opening");

let layerReceived = document.querySelector("#layer-received");

let layerSales = document.querySelector("#layer-sales");

let layerClosing = document.querySelector(".layer-closing");

let layerOpeningValue = 0,
  layerReceivedValue = 0,
  layerSalesValue = 0;

layerOpening.addEventListener("input", () => {
  layerOpeningValue = parseInt(layerOpening.value);
  update_Layer_Closing();
  updateTotalOpening();
  updateTotalClosing();
});

layerReceived.addEventListener("input", () => {
  layerReceivedValue = parseInt(layerReceived.value);
  update_Layer_Closing();
  updateTotalReceived();
  updateTotalClosing();
});

layerSales.addEventListener("input", () => {
  layerSalesValue = parseInt(layerSales.value);
  update_Layer_Closing();
  updateTotalSales();
  updateTotalClosing();
});

function update_Layer_Closing() {
  layerClosing.textContent =
    layerOpeningValue + layerReceivedValue - layerSalesValue;
}

// end of layer stock counting

// sonali stock counting starts here

let sonali_Opening = document.querySelector("#sonali-opening");

let sonali_Received = document.querySelector("#sonali-received");

let sonali_Sales = document.querySelector("#sonali-sales");

let sonali_Closing = document.querySelector(".sonali-closing");

let sonali_Opening_Value = 0;

let sonali_Received_Value = 0;

let sonali_Sales_Value = 0;

sonali_Opening.addEventListener("input", () => {
  sonali_Opening_Value = parseInt(sonali_Opening.value);
  update_Sonali_Closing();
  updateTotalOpening();
  updateTotalClosing();
});

sonali_Received.addEventListener("input", () => {
  sonali_Received_Value = parseInt(sonali_Received.value);
  update_Sonali_Closing();
  updateTotalReceived();
  updateTotalClosing();
});

sonali_Sales.addEventListener("input", () => {
  sonali_Sales_Value = parseInt(sonali_Sales.value);
  update_Sonali_Closing();
  updateTotalSales();
  updateTotalClosing();
});

function update_Sonali_Closing() {
  sonali_Closing.textContent =
    sonali_Opening_Value + sonali_Received_Value - sonali_Sales_Value;
}

// sonali stock counting ends here

// cattle stock counting starts here

let cattleOpening = document.querySelector("#cattle-opening");

let cattleReceived = document.querySelector("#cattle-received");

let cattleSales = document.querySelector("#cattle-sales");

let cattleClosing = document.querySelector(".cattle-closing");

let cattleOpening_Value = 0;

let cattleReceived_Value = 0;

let cattleSales_Value = 0;

cattleOpening.addEventListener("input", () => {
  cattleOpening_Value = parseInt(cattleOpening.value);
  updateCattleClosing();
  updateTotalOpening();
  updateTotalClosing();
});

cattleReceived.addEventListener("input", () => {
  cattleReceived_Value = parseInt(cattleReceived.value);
  updateCattleClosing();
  updateTotalReceived();
  updateTotalClosing();
});

cattleSales.addEventListener("input", () => {
  cattleSales_Value = parseInt(cattleSales.value);
  updateCattleClosing();
  updateTotalSales();
  updateTotalClosing();
});

function updateCattleClosing() {
  cattleClosing.textContent =
    cattleOpening_Value + cattleReceived_Value - cattleSales_Value;
}
// cattle stock counting ends here

// floating stock counting starts here

let floatingOpening = document.querySelector("#floating-opening");

let floatingReceived = document.querySelector("#floating-received");

let floatingSales = document.querySelector("#floating-sales");

let floatingClosing = document.querySelector(".floating-closing");

let floatingOpeningValue = 0;

let floatingReceivedValue = 0;

let floatingSalesValue = 0;

floatingOpening.addEventListener("input", () => {
  floatingOpeningValue = parseInt(floatingOpening.value);
  updateFloatingClosing();
  updateTotalOpening();
  updateTotalClosing();
});

floatingReceived.addEventListener("input", () => {
  floatingReceivedValue = parseInt(floatingReceived.value);
  updateFloatingClosing();
  updateTotalReceived();
  updateTotalClosing();
});

floatingSales.addEventListener("input", () => {
  floatingSalesValue = parseInt(floatingSales.value);
  updateFloatingClosing();
  updateTotalSales();
  updateTotalClosing();
});

function updateFloatingClosing() {
  floatingClosing.textContent =
    floatingOpeningValue + floatingReceivedValue - floatingSalesValue;
}

// floating stock counting ends here

// sinking stock counting starts here

let sinkingOpening = document.querySelector("#sinking-opening");

let sinkingReceived = document.querySelector("#sinking-received");

let sinkingSales = document.querySelector("#sinking-sales");

let sinkingClosing = document.querySelector(".sinking-closing");

let sinkingOpeningValue = 0;

let sinkingReceivedValue = 0;

let sinkingSalesValue = 0;

sinkingOpening.addEventListener("input", () => {
  sinkingOpeningValue = parseInt(sinkingOpening.value);
  updateSinkingClosing();
  updateTotalOpening();
  updateTotalClosing();
});

sinkingReceived.addEventListener("input", () => {
  sinkingReceivedValue = parseInt(sinkingReceived.value);
  updateSinkingClosing();
  updateTotalReceived();
  updateTotalClosing();
});

sinkingSales.addEventListener("input", () => {
  sinkingSalesValue = parseInt(sinkingSales.value);
  updateSinkingClosing();
  updateTotalSales();
  updateTotalClosing();
});

function updateSinkingClosing() {
  sinkingClosing.textContent =
    sinkingOpeningValue + sinkingReceivedValue - sinkingSalesValue;
}
// sinking stock counting ends here

// total function is going on here

let totalOpening = document.querySelector(".total-opening");

let totalReceived = document.querySelector(".total-received");

let totalSales = document.querySelector(".total-sales");

let totalClosing = document.querySelector(".total-closing");

function updateTotalOpening() {
  totalOpening.textContent =
    broilerOpeningValue +
    layerOpeningValue +
    sonali_Opening_Value +
    cattleOpening_Value +
    floatingOpeningValue +
    sinkingOpeningValue;
}

function updateTotalReceived() {
  totalReceived.textContent =
    broilerReceivedValue +
    layerReceivedValue +
    sonali_Received_Value +
    cattleReceived_Value +
    floatingReceivedValue +
    sinkingReceivedValue;
}

function updateTotalSales() {
  totalSales.textContent =
    broilerSalesValue +
    layerSalesValue +
    sonali_Sales_Value +
    cattleSales_Value +
    floatingSalesValue +
    sinkingSalesValue;
}

function updateTotalClosing() {
  totalClosing.textContent =
    broilerOpeningValue +
    layerOpeningValue +
    sonali_Opening_Value +
    cattleOpening_Value +
    floatingOpeningValue +
    sinkingOpeningValue +
    (broilerReceivedValue +
      layerReceivedValue +
      sonali_Received_Value +
      cattleReceived_Value +
      floatingReceivedValue +
      sinkingReceivedValue) -
    (broilerSalesValue +
      layerSalesValue +
      sonali_Sales_Value +
      cattleSales_Value +
      floatingSalesValue +
      sinkingSalesValue);
}
