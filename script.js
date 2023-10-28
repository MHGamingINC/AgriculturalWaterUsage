document.getElementById("myButton").addEventListener("click", calculate);

function calculate(){

const MAX_VALUE = 100;
const MIN_VALUE = 10;

const cropWaterUsage = {
    // Source: chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://hess.copernicus.org/articles/15/1577/2011/hess-15-1577-2011.pdf
    // Measurements in m^3/ton
    corn : 1222,
    wheat : 1827,
    soy: 2145,
    potatoes: 224,
    rice: 1673
}

const cropYieldsPerAcre = {
  // Source: https://goodineverygrain.ca/2021/08/26/how-many-pounds-of-grain-can-one-acre-produce/
  // Measurements in tons/acre
  corn: 4.14,
  wheat: 2.3,
  soy: 1.27,
  potatoes: 10,
  rice: 3.69
}

    selectElement = document.querySelector('#cropType');
    cropType1 = selectElement.value;
    selectElement1 = document.querySelector('#fieldSize');
    fieldSize1 = selectElement1.value;

    document.getElementById("outputValue").textContent = (Math.round(cropWaterUsage[cropType1] * cropYieldsPerAcre[cropType1] * fieldSize1));
    document.getElementById("gallonWord").textContent = "Gallons"
    var outputValue = document.getElementById("outputValue");
    var outputNumber = 50;
    // cropWaterUsage[cropType1] * cropYieldsPerAcre[cropType1] * fieldSize1 * .002
    outputValue.style.fontSize = outputNumber + "px";
    outputValue.style.textAlign = "center";
    gallonWord.style.fontSize = outputNumber + "px";
    gallonWord.style.textAlign = "center";


}